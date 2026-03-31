// ==========================================
// 1. ESTADO GLOBAL
// ==========================================
const state = {
    currentPath: '',
    menuItems: [
        { id: 'servicios', label: 'Servicios' },
        { id: 'quienes-somos', label: 'Nosotros' },
        { id: 'contenido-gratuito', label: 'Recursos Gratuitos' },
        { id: 'certificados', label: 'Certificados' },
        { id: 'contacto', label: 'Contacto' }
    ]
};

// ==========================================
// 2. COMPONENTES HTML (Diseño Moderno)
// ==========================================

const Header = () => `
    <header class="header anim-montaje">
        <div class="header-container">
            <div class="logo">
                <img src="./assets/images/logo1.png" alt="DigitalBloomKT Logo">
            </div>
            <nav class="menu">
                ${state.menuItems.map(item => `
                    <a href="#${item.id}" class="menu-item">${item.label}</a>
                `).join('')}
            </nav>
            <div class="mobile-menu-btn"><i class="fas fa-bars"></i></div>
        </div>
    </header>
`;

const Hero = () => `
    <section id="hero" class="hero anim-montaje" style="animation-delay: 0.2s;">
        <div class="hero-content">
            <p class="hero-tagline">Estrategia & Creatividad</p>
            <h2 class="hero-title">Donde tu marca <span>florece.</span></h2>
            <a href="#servicios" class="btn-primary">Descubrir Servicios</a>
        </div>
        <div class="hero-image-wrapper">
             <img class="hero-image" src="./assets/images/fondo1.png" alt="DigitalBloomKT Background">
        </div>
    </section>
`;

const Servicios = () => `
    <section id="servicios" class="servicios section-padding">
        <div class="container">
            <div class="section-header">
                <span class="subtitle">EXPERTISE</span>
                <h2>Te presento mis servicios</h2>
            </div>
            <div class="servicios-grid">
                <div class="servicio-card bg-serv-1" data-title="Gestión en Redes Sociales" data-desc="Construimos comunidades sólidas y auténticas. Nos enfocamos en conectar tu marca con tu audiencia ideal a través de contenido estratégico, interacción constante y análisis de tendencias para asegurar un crecimiento real."><h3>Gestión en Redes Sociales</h3><p>Construimos comunidades sólidas y auténticas.</p></div>
                <div class="servicio-card bg-serv-2" data-title="Pauta Publicitaria" data-desc="Campañas optimizadas en Meta Ads y Google Ads. Maximizamos tu retorno de inversión (ROI) segmentando al detalle para llegar exactamente a las personas que buscan lo que tu marca tiene para ofrecer."><h3>Pauta Publicitaria</h3><p>Campañas optimizadas en Meta Ads y Google Ads.</p></div>
                <div class="servicio-card bg-serv-3" data-title="Creación de Estrategia" data-desc="Rutas claras para el crecimiento de tu negocio. Analizamos tu mercado, competencia y objetivos para diseñar un plan de acción a medida que garantice resultados escalables a largo plazo."><h3>Creación de Estrategia</h3><p>Rutas claras para el crecimiento de tu negocio.</p></div>
                <div class="servicio-card bg-serv-4" data-title="Diseño en Canva" data-desc="Piezas visuales atractivas y funcionales. Creamos plantillas y diseños personalizados que mantienen una estética profesional y completamente coherente con la identidad y valores de tu marca."><h3>Diseño en Canva</h3><p>Piezas visuales atractivas y funcionales.</p></div>
                <div class="servicio-card bg-serv-5" data-title="Desarrollo Web" data-desc="Tu casa digital rápida, segura y estéticamente impecable. Desarrollamos sitios web optimizados para el posicionamiento (SEO) y pensados estratégicamente para convertir visitantes en clientes."><h3>Desarrollo Web</h3><p>Tu casa digital rápida, segura y estéticamente impecable.</p></div>
                <div class="servicio-card bg-serv-6" data-title="Identidad de Marca" data-desc="Desarrollo de branding que conecta y perdura. Definimos tu voz, paleta de colores, tipografías y logotipo para que tu marca transmita su verdadera esencia en cada punto de contacto."><h3>Identidad de Marca</h3><p>Desarrollo de branding que conecta y perdura.</p></div>
            </div>
        </div>
    </section>
`;

const QuienesSomos = () => `
    <section id="quienes-somos" class="quienes-somos section-padding">
        <div class="container layout-split">
            <div class="content-text">
                <span class="subtitle">QUIENES SOMOS</span>
                <h2>NUESTRA HISTORIA</h2>
                <p>Digitalbloomkt nació del deseo de transformar marcas que sienten que tienen mucho para dar… pero no saben cómo mostrarlo.</p>
                <p>Soy <strong>Brenda Dujovich</strong>, y estoy detrás de esta agencia que combina estrategia, creatividad y mucha empatía.</p>
                <p>Durante años trabajé con fábricas, emprendedores y marcas que querían crecer pero se sentían perdidos entre reels, algoritmos y diseños. Ahí entendí algo clave: <strong>no alcanza con publicar, hay que conectar.</strong></p>
                <ul class="check-list">
                    <li><i class="fas fa-check"></i> Diseñamos estrategias reales.</li>
                    <li><i class="fas fa-check"></i> Creamos contenido que representa tu esencia.</li>
                    <li><i class="fas fa-check"></i> Acompañamos a tu marca a florecer paso a paso.</li>
                </ul>
                <p class="highlight-text">Bienvenido a Digitalbloomkt, donde tu marca florece.</p>
            </div>
            <div class="content-image">
                 <div class="image-placeholder">
                    <img src="./assets/images/perfil.png" alt="Brenda Dujovich" class="foto-perfil">
                    <img src="./assets/images/logo1.png" alt="DigitalBloomKT Logo" class="logo-superpuesto">
                 </div>
            </div>
        </div>
    </section>
`;

const ContenidoGratuito = () => `
    <section id="contenido-gratuito" class="contenido-gratuito section-padding">
        <div class="container container-cta">
            <div class="cta-card">
                <h2>Descarga mi contenido gratuito</h2>
                <p>Recursos, guías y plantillas diseñadas para impulsar el crecimiento de tu marca hoy mismo.</p>
                <button id="descarga-aqui-btn" class="btn-shine-black">Descargar Aquí</button>
            </div>
        </div>
    </section>
`;

const Resenas = () => `
    <section id="reseñas-section" class="reseñas-section section-padding">
        <img src="assets/images/flor-testimonio1.png" class="flor-bg flor-tl" alt="">
        <img src="assets/images/flor-testimonio2.png" class="flor-bg flor-br" alt="">
        
        <div class="container content-relative">
            <div class="section-header center">
                <span class="subtitle">Lo que dicen nuestros clientes</span>
                <h2>TESTIMONIOS</h2>
            </div>
            <div class="reseñas-grid">
                <div class="review-card"><img src="assets/images/res-img.jpg" alt="Reseña 1"></div>
                <div class="review-card"><img src="assets/images/res-img2.jpg" alt="Reseña 2"></div>
                <div class="review-card"><img src="assets/images/res-img3.jpg" alt="Reseña 3"></div>
                <div class="review-card"><img src="assets/images/res-img4.jpg" alt="Reseña 4"></div>
            </div>
            <div class="ver-mas-container">
                <a href="https://www.instagram.com/stories/highlights/17844320421113426/" class="btn-instagram-shine" target="_blank" rel="noopener noreferrer">
                    Ver más reseñas en Instagram <i class="fab fa-instagram"></i>
                </a>
            </div>
        </div>
    </section>
`;

const Certificados = () => `
    <section id="certificados" class="certificados section-padding">
        <div class="container">
            <div class="section-header center">
                <span class="subtitle">Mis Certificados</span>
                <h2>FORMACIÓN</h2>
            </div>
            <div class="certificados-wrap"> 
                <div class="certificado-circulo" data-large-image="assets/certificados/adsvisors.png" data-caption="Certificado de Asesoría de Marketing Digital (Advisors)"><p>Advisors<br>Marketing</p></div>
                <div class="certificado-circulo" data-large-image="assets/certificados/cmypublicidad.png" data-caption="Certificado de Community Manager y Publicidad Digital"><p>CM y<br>Publicidad</p></div>
                <div class="certificado-circulo" data-large-image="assets/certificados/copywriting.png" data-caption="Certificado de Copywriting Persuasivo"><p>Copywriting</p></div>
                <div class="certificado-circulo" data-large-image="assets/certificados/HerramientasDigitales.png" data-caption="Certificado de Herramientas Digitales I"><p>Herramientas<br>Digitales I</p></div>
                <div class="certificado-circulo" data-large-image="assets/certificados/GrowthMarketing.png" data-caption="Certificado de Growth Marketing y Estrategias de Crecimiento"><p>Growth<br>Marketing</p></div>
                <div class="certificado-circulo" data-large-image="assets/certificados/seo.png" data-caption="Certificado de SEO Básico para Posicionamiento Web"><p>SEO<br>Básico</p></div>
                <div class="certificado-circulo" data-large-image="assets/certificados/HerramientasDigitales2.png" data-caption="Certificado de Herramientas Digitales II"><p>Herramientas<br>Digitales II</p></div>
                <div class="certificado-circulo" data-large-image="assets/certificados/publicidaddisplaygoogleads.png" data-caption="Certificado de Publicidad Display con Google Ads"><p>Display<br>GoogleAds</p></div>
                <div class="certificado-circulo" data-large-image="assets/certificados/marketingdigital.png" data-caption="Certificado Completo de Marketing Digital"><p>Marketing<br>Digital</p></div>
                <div class="certificado-circulo" data-large-image="assets/certificados/Foto-Producto.png" data-caption="Certificado de Fotografía de Producto Profesional"><p>Foto<br>Producto</p></div>
                <div class="certificado-circulo" data-large-image="assets/certificados/publicidadenredes.png" data-caption="Certificado de Publicidad en Redes Sociales"><p>Publicidad<br>en Redes</p></div>
                <div class="certificado-circulo" data-large-image="assets/certificados/identidaddemarca.png" data-caption="Certificado de Creación de Identidad de Marca"><p>Identidad<br>de Marca</p></div>
                <div class="certificado-circulo" data-large-image="assets/certificados/HerramientasDigitales3.png" data-caption="Certificado de Herramientas Digitales III"><p>Herramientas<br>Digitales III</p></div>
                <div class="certificado-circulo" data-large-image="assets/certificados/publicidad.png" data-caption="Certificado Avanzado de Google Ads"><p>Google<br>Ads</p></div>
                <div class="certificado-circulo" data-large-image="assets/certificados/reelsytiktok.png" data-caption="Certificado de Creación de Contenido para Reels y TikTok"><p>Reels y<br>TikTok</p></div>
                <div class="certificado-circulo" data-large-image="assets/certificados/emailmarketing.png" data-caption="Certificado de Email Marketing"><p>Email Marketing</p></div>
            </div>
        </div>
    </section>
`;

const Contacto = () => `
    <section id="contacto" class="contacto section-padding">
        <div class="container">
            <div class="section-header center">
                <span class="subtitle">HABLEMOS</span>
                <h2>CONTACTANOS</h2>
                <p class="cta-text-giant">¿Lista para hacer florecer tu marca? Escribinos y comencemos a trabajar en tu estrategia.</p>
            </div>
            
            <div class="contact-layout-centered">
                <div class="social-sidebar">
                    <a href="https://www.instagram.com/digitalbloomkt/" target="_blank" class="social-btn"><i class="fab fa-instagram"></i></a>
                    <a href="https://www.facebook.com/share/16BipM7eHb/" target="_blank" class="social-btn"><i class="fab fa-facebook-f"></i></a>
                    <a href="mailto:brendadujovich@gmail.com" class="social-btn"><i class="fas fa-envelope"></i></a>
                    <a href="https://www.tiktok.com/@digitalbloomkt?lang=es-419" target="_blank" class="social-btn"><i class="fab fa-tiktok"></i></a>
                </div>
                
                <div class="contact-form-wrapper">
                    <form id="contactForm" class="modern-form">
                        <div class="form-group">
                            <label for="nombre">Nombre</label>
                            <input type="text" id="nombre" name="nombre" placeholder="Tu nombre completo" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="tu@email.com" required>
                        </div>
                        <div class="form-group">
                            <label for="consulta">Mensaje</label>
                            <textarea id="consulta" name="consulta" rows="4" placeholder="¿En qué podemos ayudarte?" required></textarea>
                        </div>
                        <button type="button" id="enviarConsultaBtn" class="btn-shine-gold w-100">Enviar Consulta</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
`;

const Footer = () => `
    <footer class="modern-footer">
        <div class="container footer-grid">
            <div class="footer-brand">
                <h2>DigitalBloo<span>MKT</span></h2>
                <p>Neuro-estrategias para marcas que dominan el futuro.</p>
            </div>
            <div class="footer-links">
                <h3>Navegación</h3>
                <a href="#servicios">Servicios</a>
                <a href="#quienes-somos">Nosotros</a>
                <a href="#contacto">Contacto</a>
            </div>
            <div class="footer-status">
                <div class="status-badge">
                    <span class="dot"></span> DISPONIBLE
                </div>
                <p>Aceptando nuevos desafíos para 2026.</p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>© 2026 DIGITALBLOOMKT — Todos los derechos reservados.</p>
        </div>
    </footer>
`;

const ModalsYExtras = () => `
    <a href="https://wa.me/+5492213576210?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20sus%20servicios." target="_blank" rel="noopener noreferrer" class="whatsapp-float">
        <i class="fab fa-whatsapp"></i>
    </a>

    <div id="contenido-gratuito-modal" class="modal-overlay">
        <div class="modal-content">
            <span class="cerrar-modal-gratuito">×</span>
            <h2 class="modal-title-gold">MATERIAL GRATUITO</h2>
            <p style="text-align: center; margin-bottom: 20px;">Selecciona los recursos y te los enviaremos.</p>
            <form id="form-contenido-gratuito" class="modern-form form-gratuito-scroll">
                <div class="checkbox-grid">
                    <label class="custom-checkbox"><input type="checkbox" name="contenido" value="guia-seo-basico"><span>Guía de SEO Básico</span></label>
                    <label class="custom-checkbox"><input type="checkbox" name="contenido" value="checklist-marketing-digital"><span>Checklist de Marketing Digital</span></label>
                    <label class="custom-checkbox"><input type="checkbox" name="contenido" value="ebook-copywriting-persuasivo"><span>Ebook de Copywriting Persuasivo</span></label>
                    <label class="custom-checkbox"><input type="checkbox" name="contenido" value="curso-google-ads-avanzado"><span>Curso Google Ads Avanzado</span></label>
                    <label class="custom-checkbox"><input type="checkbox" name="contenido" value="guia-creacion-reels-tiktok"><span>Guía de Creación de Reels y TikTok</span></label>
                    <label class="custom-checkbox"><input type="checkbox" name="contenido" value="plantilla-calendario-contenido"><span>Plantilla Calendario de Contenido</span></label>
                    <label class="custom-checkbox"><input type="checkbox" name="contenido" value="auditoria-redes-sociales"><span>Auditoría Rápida de Redes</span></label>
                    <label class="custom-checkbox"><input type="checkbox" name="contenido" value="kit-diseno-basico"><span>Kit de Diseño Gráfico Básico</span></label>
                    <label class="custom-checkbox"><input type="checkbox" name="contenido" value="estrategias-email-marketing"><span>Estrategias de Email Marketing</span></label>
                    <label class="custom-checkbox"><input type="checkbox" name="contenido" value="consejos-fotoproducto"><span>Consejos para Foto de Producto</span></label>
                    <label class="custom-checkbox"><input type="checkbox" name="contenido" value="guia-analitica-web"><span>Guía de Analítica Web</span></label>
                    <label class="custom-checkbox"><input type="checkbox" name="contenido" value="plantilla-brief-cliente"><span>Plantilla de Brief para Cliente</span></label>
                    <label class="custom-checkbox"><input type="checkbox" name="contenido" value="herramientas-digitales-avanzadas"><span>Herramientas Digitales Avanzadas</span></label>
                    <label class="custom-checkbox"><input type="checkbox" name="contenido" value="caso-estudio-marketing-exitoso"><span>Caso de Estudio Marketing Exitoso</span></label>
                    <label class="custom-checkbox"><input type="checkbox" name="contenido" value="guia-publicidad-facebook-instagram"><span>Guía de Publicidad en FB e IG</span></label>
                    <label class="custom-checkbox"><input type="checkbox" name="contenido" value="claves-branding-personal"><span>Claves para el Branding Personal</span></label>
                    <label class="custom-checkbox"><input type="checkbox" name="contenido" value="curso-chatbots-marketing"><span>Curso Básico Chatbots</span></label>
                    <label class="custom-checkbox"><input type="checkbox" name="contenido" value="plantilla-reporte-marketing"><span>Plantilla Reporte de Marketing</span></label>
                    <label class="custom-checkbox"><input type="checkbox" name="contenido" value="guia-linkedin-para-negocios"><span>Guía de LinkedIn Negocios</span></label>
                    <label class="custom-checkbox"><input type="checkbox" name="contenido" value="consejos-creacion-blog"><span>Consejos Creación de Blog</span></label>
                    <label class="custom-checkbox"><input type="checkbox" name="contenido" value="estrategias-fidelizacion-clientes"><span>Estrategias Fidelización</span></label>
                    <label class="custom-checkbox"><input type="checkbox" name="contenido" value="introduccion-google-analytics-4"><span>Intro a Google Analytics 4</span></label>
                    <label class="custom-checkbox"><input type="checkbox" name="contenido" value="checklist-lanzamiento-producto"><span>Checklist Lanzamiento Producto</span></label>
                    <label class="custom-checkbox"><input type="checkbox" name="contenido" value="guia-marketing-contenidos"><span>Guía de Marketing de Contenidos</span></label>
                    <label class="custom-checkbox"><input type="checkbox" name="contenido" value="curso-canva-diseno-rapido"><span>Curso Canva Diseño Rápido</span></label>
                    <label class="custom-checkbox"><input type="checkbox" name="contenido" value="tacticas-incrementar-ventas"><span>Tácticas para Incrementar Ventas</span></label>
                    <label class="custom-checkbox"><input type="checkbox" name="contenido" value="manual-customer-journey"><span>Manual Customer Journey</span></label>
                    <label class="custom-checkbox"><input type="checkbox" name="contenido" value="tendencias-marketing-digital-2025"><span>Tendencias Marketing 2025</span></label>
                    <label class="custom-checkbox"><input type="checkbox" name="contenido" value="guia-primeros-pasos-ecommerce"><span>Guía Primeros Pasos E-commerce</span></label>
                    <label class="custom-checkbox"><input type="checkbox" name="contenido" value="consejos-crear-landing-page"><span>Consejos Landing Page Efectiva</span></label>
                    <label class="custom-checkbox"><input type="checkbox" name="contenido" value="plantilla-estrategia-social-media"><span>Plantilla Estrategia Social Media</span></label>
                    <label class="custom-checkbox"><input type="checkbox" name="contenido" value="guia-google-my-business"><span>Guía de Google My Business</span></label>
                </div>
                <input type="email" id="user-email-gratuito" placeholder="Tu Email" required style="margin-top:15px; width:100%; padding: 15px; border: 1px solid #ddd; border-radius: 8px; font-size:1.1rem;">
                <button type="submit" class="btn-shine-gold w-100" style="margin-top: 15px;">Solicitar</button>
            </form>
        </div>
    </div>

    <div id="certificado-modal" class="modal-overlay modal-centered">
        <span class="cerrar-modal">×</span>
        <div class="modal-image-container flex-center">
             <img id="img-certificado-modal" src="" alt="Certificado">
             <div id="modal-caption"></div>
        </div>
    </div>
    
    <div id="servicio-modal" class="modal-overlay modal-centered">
        <div class="modal-content text-center" style="max-width: 600px;">
            <span class="cerrar-modal-servicio" style="position: absolute; top: 15px; right: 25px; font-size: 2.5rem; cursor: pointer; color: var(--gray-text); z-index: 2001;">×</span>
            <h2 id="servicio-modal-title" class="modal-title-gold" style="margin-top: 10px;"></h2>
            <p id="servicio-modal-desc" style="font-size: 1.25rem; color: var(--gray-text); margin-top: 15px; line-height: 1.8;"></p>
        </div>
    </div>
`;

const App = () => `
    ${Header()}
    ${Hero()}
    ${Servicios()}
    ${QuienesSomos()}
    ${ContenidoGratuito()}
    ${Resenas()}
    ${Certificados()}
    ${Contacto()}
    ${Footer()}
    ${ModalsYExtras()}
`;

// ==========================================
// 3. RENDERIZADO SPA
// ==========================================
function renderApp() {
    const appContainer = document.getElementById('app');
    
    const mount = () => {
        appContainer.innerHTML = App();
        requestAnimationFrame(() => {
            appContainer.querySelectorAll('.anim-montaje').forEach(el => el.classList.add('montado'));
        });
        initEffects();
    };

    if (document.startViewTransition) {
        document.startViewTransition(() => mount());
    } else {
        mount();
    }
}

// ==========================================
// 4. LÓGICA DE INTERACCIÓN
// ==========================================
function initEffects() {
    
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
    });

    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.menu');
    if(mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    document.querySelectorAll('.menu-item, .btn-primary').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if(!href || !href.startsWith('#')) return;
            
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                navMenu.classList.remove('active'); 
                const headerHeight = document.querySelector('.header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerHeight;
        
                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
            }
        });
    });

    const openModal = (id) => {
        document.getElementById(id).classList.add('active');
        document.body.style.overflow = 'hidden';
    };
    const closeModal = () => {
        document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
        document.body.style.overflow = 'auto';
    };

    const btnGratis = document.getElementById('descarga-aqui-btn');
    if(btnGratis) btnGratis.addEventListener('click', () => openModal('contenido-gratuito-modal'));

    // Lógica Popup Certificados
    document.querySelectorAll('.certificado-circulo').forEach(card => {
        card.addEventListener('click', function() {
            const img = document.getElementById('img-certificado-modal');
            const caption = document.getElementById('modal-caption');
            if(this.dataset.largeImage) {
                img.src = this.dataset.largeImage;
                caption.textContent = this.dataset.caption;
                openModal('certificado-modal');
            }
        });
    });

    // NUEVO: Lógica Popup Servicios
    document.querySelectorAll('.servicio-card').forEach(card => {
        card.addEventListener('click', function() {
            const title = document.getElementById('servicio-modal-title');
            const desc = document.getElementById('servicio-modal-desc');
            title.textContent = this.dataset.title;
            desc.textContent = this.dataset.desc;
            openModal('servicio-modal');
        });
    });

    // Añadida la clase .cerrar-modal-servicio para que cierre
    document.querySelectorAll('.cerrar-modal, .cerrar-modal-gratuito, .cerrar-modal-servicio, .modal-overlay').forEach(el => {
        el.addEventListener('click', (e) => {
            if(e.target === el || e.target.classList.contains('flex-center')) closeModal();
        });
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section-header, .servicio-card, .review-card, .certificado-circulo, .content-text, .modern-form').forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        observer.observe(el);
    });

    const contactForm = document.getElementById('contactForm');
    const enviarConsultaBtn = document.getElementById('enviarConsultaBtn');
    if (enviarConsultaBtn && contactForm) {
        enviarConsultaBtn.addEventListener('click', function() {
            if (!contactForm.checkValidity()) { contactForm.reportValidity(); return; }
            const formData = new FormData(contactForm);
            const originalText = this.innerText;
            this.innerText = "Enviando..."; this.disabled = true;

            fetch('enviar_consulta.php', { method: 'POST', body: formData })
            .then(res => res.text()).then(data => { alert(data); contactForm.reset(); })
            .catch(() => alert("Error enviando consulta."))
            .finally(() => { this.innerText = originalText; this.disabled = false; });
        });
    }

    const formGratis = document.getElementById('form-contenido-gratuito');
    if(formGratis) {
        formGratis.addEventListener('submit', (e) => {
            e.preventDefault();
            closeModal();
            alert("Solicitud enviada. Revisa tu email.");
            formGratis.reset();
        });
    }
}

document.addEventListener('DOMContentLoaded', renderApp);
