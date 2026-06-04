import fs from 'node:fs/promises';
import path from 'node:path';

const targetUrl = process.argv[2];
const outputDir = process.argv[3] || 'reports/seo';

if (!targetUrl) {
  console.error('Usage: node tools/seo-scan.mjs <url> [output-dir]');
  process.exit(1);
}

const baseUrl = new URL(targetUrl);
const checks = [];
const resources = [];

function addCheck(category, name, status, detail = '', evidence = '') {
  checks.push({ category, name, status, detail, evidence });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function parseAttributes(raw = '') {
  const attrs = {};
  const attrRe = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)\s*(?:=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g;
  let match;
  while ((match = attrRe.exec(raw))) {
    attrs[match[1].toLowerCase()] = match[2] ?? match[3] ?? match[4] ?? '';
  }
  return attrs;
}

function extractTags(html, tag) {
  const re = new RegExp(`<${tag}\\b([^>]*)>`, 'gi');
  const tags = [];
  let match;
  while ((match = re.exec(html))) {
    tags.push({ raw: match[0], attrs: parseAttributes(match[1]) });
  }
  return tags;
}

function extractTagText(html, tag) {
  const re = new RegExp(`<${tag}\\b[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'gi');
  const values = [];
  let match;
  while ((match = re.exec(html))) {
    values.push(match[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
  }
  return values;
}

function resolveUrl(value, base = baseUrl) {
  try {
    return new URL(value, base).toString();
  } catch {
    return null;
  }
}

async function fetchWithTimeout(url, options = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), options.timeoutMs || 8000);
  try {
    const response = await fetch(url, { signal: controller.signal, redirect: 'follow' });
    const arrayBuffer = await response.arrayBuffer();
    const body = Buffer.from(arrayBuffer);
    return {
      url,
      finalUrl: response.url,
      status: response.status,
      ok: response.ok,
      contentType: response.headers.get('content-type') || '',
      bytes: body.length,
      text: body.toString('utf8'),
    };
  } catch (error) {
    return {
      url,
      finalUrl: url,
      status: 0,
      ok: false,
      contentType: '',
      bytes: 0,
      text: '',
      error: error.message,
    };
  } finally {
    clearTimeout(timeout);
  }
}

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function statusIcon(status) {
  if (status === 'pass') return 'PASS';
  if (status === 'warn') return 'WARN';
  return 'FAIL';
}

function score(checkList) {
  const weighted = checkList.reduce((acc, check) => {
    if (check.status === 'pass') return acc + 1;
    if (check.status === 'warn') return acc + 0.5;
    return acc;
  }, 0);
  return Math.round((weighted / checkList.length) * 100);
}

async function main() {
  const page = await fetchWithTimeout(baseUrl.toString());
  addCheck('HTTP', 'Pagina principal responde 200', page.ok ? 'pass' : 'fail', `Status ${page.status}`, page.finalUrl);

  const html = page.text;
  const title = (html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1] || '').replace(/\s+/g, ' ').trim();
  const metaTags = extractTags(html, 'meta');
  const linkTags = extractTags(html, 'link');
  const scriptTags = extractTags(html, 'script');
  const imgTags = extractTags(html, 'img');
  const aTags = extractTags(html, 'a');
  const formTags = extractTags(html, 'form');
  const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].flatMap((tag) =>
    extractTagText(html, tag).map((text) => ({ tag, text })),
  );
  const h1s = headings.filter((h) => h.tag === 'h1');

  const metaDescription = metaTags.find((tag) => tag.attrs.name?.toLowerCase() === 'description')?.attrs.content || '';
  const robotsMeta = metaTags.find((tag) => tag.attrs.name?.toLowerCase() === 'robots')?.attrs.content || '';
  const canonical = linkTags.find((tag) => tag.attrs.rel?.toLowerCase() === 'canonical')?.attrs.href || '';
  const viewport = metaTags.find((tag) => tag.attrs.name?.toLowerCase() === 'viewport')?.attrs.content || '';
  const charset = html.match(/<meta\s+charset=["']?([^"'>\s]+)/i)?.[1] || '';
  const jsonLdBlocks = [...html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)].map((m) => m[1]);

  addCheck('SEO', 'Titulo entre 10 y 70 caracteres', title.length >= 10 && title.length <= 70 ? 'pass' : 'fail', `${title.length} caracteres`, title);
  addCheck('SEO', 'Meta description presente', metaDescription ? 'pass' : 'fail', `${metaDescription.length} caracteres`, metaDescription);
  addCheck('SEO', 'Meta description en rango recomendado', metaDescription.length >= 70 && metaDescription.length <= 160 ? 'pass' : 'warn', `${metaDescription.length} caracteres`);
  addCheck('SEO', 'Canonical presente', canonical ? 'pass' : 'fail', canonical);
  addCheck('SEO', 'Meta robots indexable', !robotsMeta || /index/i.test(robotsMeta) ? 'pass' : 'warn', robotsMeta || 'Sin meta robots restrictiva');
  addCheck('SEO', 'Un unico H1', h1s.length === 1 ? 'pass' : 'fail', `${h1s.length} H1`, h1s.map((h) => h.text).join(' | '));
  addCheck('SEO', 'Encabezados visibles', headings.length > 0 ? 'pass' : 'fail', `${headings.length} encabezados`);
  addCheck('SEO', 'Charset UTF-8 declarado', /utf-?8/i.test(charset) ? 'pass' : 'fail', charset);
  addCheck('Movil', 'Viewport responsive declarado', /width=device-width/i.test(viewport) ? 'pass' : 'fail', viewport);

  let validJsonLd = 0;
  for (const block of jsonLdBlocks) {
    try {
      JSON.parse(block);
      validJsonLd += 1;
    } catch {}
  }
  addCheck('SEO', 'JSON-LD valido', validJsonLd > 0 ? 'pass' : 'warn', `${validJsonLd}/${jsonLdBlocks.length} bloques validos`);

  const missingAlt = imgTags.filter((tag) => !Object.hasOwn(tag.attrs, 'alt'));
  addCheck('Imagenes', 'Todas las imagenes tienen alt', missingAlt.length === 0 ? 'pass' : 'fail', `${missingAlt.length} imagenes sin alt`);

  const internalLinks = [];
  const externalLinks = [];
  const hashLinks = [];
  const targetBlankMissingRel = [];

  for (const tag of aTags) {
    const href = tag.attrs.href || '';
    if (!href || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) continue;
    if (href.startsWith('#')) {
      hashLinks.push(href.slice(1));
      continue;
    }
    const resolved = resolveUrl(href);
    if (!resolved) continue;
    const url = new URL(resolved);
    if (url.origin === baseUrl.origin) internalLinks.push(url.toString());
    else externalLinks.push(url.toString());
    if (tag.attrs.target === '_blank' && !/(noopener|noreferrer)/i.test(tag.attrs.rel || '')) {
      targetBlankMissingRel.push(href);
    }
  }

  const idValues = new Set([...html.matchAll(/\sid=["']([^"']+)["']/gi)].map((m) => m[1]));
  const brokenHashLinks = hashLinks.filter((id) => !idValues.has(id));
  addCheck('Links', 'Enlaces internos presentes', internalLinks.length + hashLinks.length > 0 ? 'pass' : 'fail', `${internalLinks.length + hashLinks.length} enlaces internos`);
  addCheck('Links', 'Enlaces externos presentes', externalLinks.length > 0 ? 'pass' : 'warn', `${externalLinks.length} enlaces externos`);
  addCheck('Links', 'Anclas internas validas', brokenHashLinks.length === 0 ? 'pass' : 'fail', brokenHashLinks.join(', '));
  addCheck('Seguridad', 'Links target blank con rel seguro', targetBlankMissingRel.length === 0 ? 'pass' : 'fail', `${targetBlankMissingRel.length} links sin noopener/noreferrer`);

  const formsOk = formTags.some((tag) => tag.attrs.action && (tag.attrs.method || '').toLowerCase() === 'post');
  addCheck('Conversion', 'Formulario de contacto detectable', formTags.length > 0 ? 'pass' : 'fail', `${formTags.length} formularios`);
  addCheck('Conversion', 'Formulario usa POST y action', formsOk ? 'pass' : 'warn');

  const linkedResources = [];
  for (const tag of linkTags) {
    const rel = (tag.attrs.rel || '').toLowerCase();
    if (['stylesheet', 'icon', 'apple-touch-icon', 'manifest'].includes(rel) && tag.attrs.href) {
      linkedResources.push(resolveUrl(tag.attrs.href));
    }
  }
  for (const tag of scriptTags) {
    if (tag.attrs.src) linkedResources.push(resolveUrl(tag.attrs.src));
  }
  for (const tag of imgTags) {
    if (tag.attrs.src) linkedResources.push(resolveUrl(tag.attrs.src));
  }

  const sameOriginResources = unique(linkedResources).filter((url) => url && new URL(url).origin === baseUrl.origin);
  for (const url of sameOriginResources) {
    const resource = await fetchWithTimeout(url);
    resources.push(resource);
  }

  const cssBodies = resources.filter((resource) => /text\/css/i.test(resource.contentType) || resource.url.endsWith('.css'));
  const cssUrls = [];
  for (const css of cssBodies) {
    for (const match of css.text.matchAll(/url\((['"]?)(.*?)\1\)/gi)) {
      const value = match[2].trim();
      if (!value || value.startsWith('data:')) continue;
      cssUrls.push(resolveUrl(value, css.finalUrl));
    }
  }
  for (const url of unique(cssUrls).filter((url) => url && new URL(url).origin === baseUrl.origin)) {
    if (!resources.some((resource) => resource.url === url)) {
      resources.push(await fetchWithTimeout(url));
    }
  }

  const failedResources = resources.filter((resource) => !resource.ok);
  const totalResourceBytes = resources.reduce((acc, resource) => acc + resource.bytes, page.bytes);
  addCheck('Recursos', 'Recursos locales responden OK', failedResources.length === 0 ? 'pass' : 'fail', `${failedResources.length} fallidos de ${resources.length}`);
  addCheck('Performance', 'Peso HTML menor a 100 KB', page.bytes < 100_000 ? 'pass' : 'warn', `${page.bytes} bytes`);
  addCheck('Performance', 'Peso local inicial razonable', totalResourceBytes < 1_500_000 ? 'pass' : 'warn', `${totalResourceBytes} bytes incluyendo recursos locales detectados`);

  const robots = await fetchWithTimeout(resolveUrl('/robots.txt'));
  addCheck('Indexacion', 'robots.txt disponible', robots.ok ? 'pass' : 'fail', `Status ${robots.status}`);
  addCheck('Indexacion', 'robots.txt declara sitemap', /sitemap:/i.test(robots.text) ? 'pass' : 'warn');

  const declaredSitemapUrl = robots.text.match(/sitemap:\s*(\S+)/i)?.[1] || resolveUrl('/sitemap.xml');
  let sitemapTestUrl = declaredSitemapUrl;
  const isLocalTarget = ['127.0.0.1', 'localhost'].includes(baseUrl.hostname);
  if (isLocalTarget) {
    const sitemapPath = new URL(declaredSitemapUrl).pathname || '/sitemap.xml';
    sitemapTestUrl = resolveUrl(sitemapPath);
  }
  const sitemap = await fetchWithTimeout(sitemapTestUrl);
  addCheck('Indexacion', 'sitemap.xml disponible', sitemap.ok ? 'pass' : 'fail', `Status ${sitemap.status}`, sitemapTestUrl);
  addCheck('Indexacion', 'sitemap contiene URL canonica', sitemap.text.includes('https://digitalbloomkt.com/') ? 'pass' : 'warn');

  const favicon = linkTags.find((tag) => /icon/i.test(tag.attrs.rel || ''))?.attrs.href;
  const faviconUrl = favicon ? resolveUrl(favicon) : resolveUrl('/favicon.ico');
  const faviconResponse = await fetchWithTimeout(faviconUrl);
  addCheck('Usabilidad', 'Favicon disponible', faviconResponse.ok ? 'pass' : 'fail', `Status ${faviconResponse.status}`, faviconUrl);

  const reportScore = score(checks);
  const summary = {
    target: targetUrl,
    scannedAt: new Date().toISOString(),
    score: reportScore,
    counts: {
      pass: checks.filter((check) => check.status === 'pass').length,
      warn: checks.filter((check) => check.status === 'warn').length,
      fail: checks.filter((check) => check.status === 'fail').length,
      resources: resources.length,
    },
    checks,
    resources: resources.map(({ url, status, bytes, contentType, ok, error }) => ({ url, status, bytes, contentType, ok, error })),
  };

  const rows = checks.map((check) => `
    <tr class="${check.status}">
      <td>${escapeHtml(check.category)}</td>
      <td>${escapeHtml(check.name)}</td>
      <td>${statusIcon(check.status)}</td>
      <td>${escapeHtml(check.detail)}</td>
      <td>${escapeHtml(check.evidence)}</td>
    </tr>`).join('');

  const resourceRows = summary.resources.map((resource) => `
    <tr class="${resource.ok ? 'pass' : 'fail'}">
      <td>${escapeHtml(resource.url)}</td>
      <td>${resource.status}</td>
      <td>${resource.bytes}</td>
      <td>${escapeHtml(resource.contentType)}</td>
    </tr>`).join('');

  const htmlReport = `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>SEO local report</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 32px; color: #202124; }
    h1 { margin-bottom: 0; }
    .score { font-size: 48px; font-weight: 700; margin: 16px 0; }
    table { width: 100%; border-collapse: collapse; margin: 24px 0; font-size: 14px; }
    th, td { border: 1px solid #ddd; padding: 8px; vertical-align: top; }
    th { background: #f6f6f6; text-align: left; }
    tr.pass td:nth-child(3) { color: #137333; font-weight: 700; }
    tr.warn td:nth-child(3) { color: #b06000; font-weight: 700; }
    tr.fail td:nth-child(3) { color: #b3261e; font-weight: 700; }
    .meta { color: #5f6368; }
  </style>
</head>
<body>
  <h1>SEO local report</h1>
  <p class="meta">${escapeHtml(targetUrl)} - ${escapeHtml(summary.scannedAt)}</p>
  <div class="score">${reportScore}/100</div>
  <p>PASS: ${summary.counts.pass} | WARN: ${summary.counts.warn} | FAIL: ${summary.counts.fail}</p>
  <h2>Checks</h2>
  <table>
    <thead><tr><th>Categoria</th><th>Check</th><th>Estado</th><th>Detalle</th><th>Evidencia</th></tr></thead>
    <tbody>${rows}</tbody>
  </table>
  <h2>Recursos locales</h2>
  <table>
    <thead><tr><th>URL</th><th>Status</th><th>Bytes</th><th>Content-Type</th></tr></thead>
    <tbody>${resourceRows}</tbody>
  </table>
</body>
</html>`;

  await fs.mkdir(outputDir, { recursive: true });
  const jsonPath = path.join(outputDir, 'local-seo-report.json');
  const htmlPath = path.join(outputDir, 'local-seo-report.html');
  await fs.writeFile(jsonPath, JSON.stringify(summary, null, 2));
  await fs.writeFile(htmlPath, htmlReport);

  console.log(`SEO score: ${reportScore}/100`);
  console.log(`PASS ${summary.counts.pass} | WARN ${summary.counts.warn} | FAIL ${summary.counts.fail}`);
  console.log(`JSON: ${jsonPath}`);
  console.log(`HTML: ${htmlPath}`);
  for (const check of checks.filter((item) => item.status !== 'pass')) {
    console.log(`${statusIcon(check.status)} [${check.category}] ${check.name}: ${check.detail}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
