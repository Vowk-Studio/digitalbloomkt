// ==========================================
// 1. ESTADO GLOBAL Y DATOS DE SERVICIOS
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

// Base de datos de los modales de Servicios (Estructura de Packs Completa)
const servicesDetails = {
    'redes-sociales': {
        title: 'Gestión en Redes Sociales',
        subtitle: 'Elegí el pack ideal para tu marca',
        packs: [
            {
                name: 'Pack DAISY',
                content: `
                    <div class="modal-features">
                        <h4>¿Qué incluye este servicio mensual?</h4>
                        <ul>
                            <li><i class="fas fa-check"></i> <strong>Contenido Mensual:</strong> 2 Reels, 2 Carruseles y 8 Historias (adaptables a TikTok y WhatsApp).</li>
                            <li><i class="fas fa-check"></i> <strong>Estrategia Coherente:</strong> Diseñada para generar conexión emocional, autoridad, interacción real y ventas.</li>
                            <li><i class="fas fa-check"></i> <strong>Copywriting y SEO:</strong> Textos persuasivos, limpios y con hashtags estratégicos según tu nicho.</li>
                            <li><i class="fas fa-check"></i> <strong>Gestión Integral:</strong> Edición audiovisual, programación, publicación y análisis de horarios óptimos.</li>
                        </ul>
                        <div class="modal-bonus">
                            <strong><i class="fas fa-gift" style="color:var(--primary); margin-right: 5px;"></i> BONUS EXCLUSIVO:</strong> Optimización de perfil de Instagram (Redacción de bio profesional, diseño de historias destacadas y enlaces efectivos).
                        </div>
                    </div>
                `,
                wspMessage: 'Hola Brenda, quisiera más información y contratar el Pack DAISY de Gestión en Redes Sociales.'
            },
            {
                name: 'Pack BLOOM',
                content: `
                    <div class="modal-features">
                        <h4>¿Qué incluye este servicio mensual?</h4>
                        <ul>
                            <li><i class="fas fa-check"></i> <strong>Contenido Mensual:</strong> 4 Reels, 4 Carruseles y 16 Historias (adaptables a TikTok y WhatsApp).</li>
                            <li><i class="fas fa-check"></i> <strong>Estrategia Intensiva:</strong> Mayor visibilidad, constancia de marca, interacción y posicionamiento sin saturar a tu comunidad.</li>
                            <li><i class="fas fa-check"></i> <strong>Copywriting y SEO:</strong> Textos claros, persuasivos y enfocados en conectar y convertir.</li>
                            <li><i class="fas fa-check"></i> <strong>Gestión Integral:</strong> Edición, programación, publicación y análisis mensual de rendimiento para detectar mejoras.</li>
                        </ul>
                        <div class="modal-bonus">
                            <strong><i class="fas fa-gift" style="color:var(--primary); margin-right: 5px;"></i> BONUS EXCLUSIVO:</strong> Optimización de perfil de Instagram (Redacción de bio profesional, diseño de historias destacadas y enlaces efectivos).
                        </div>
                        <div class="modal-bonus" style="border-left-color: var(--dark); background-color: var(--gray-light);">
                            <strong><i class="fas fa-gem" style="color:var(--dark); margin-right: 5px;"></i> BONUS PREMIUM:</strong> 1 reunión mensual de seguimiento estratégico. Revisión general de marca, propuesta de mejoras y acompañamiento cercano en la planificación.
                        </div>
                        <p style="margin-top:15px; font-style:italic; color:var(--gray-text);">Pensado para marcas que necesitan una presencia más fuerte, constante y estratégica en redes.</p>
                    </div>
                `,
                wspMessage: 'Hola Brenda, quisiera más información y contratar el Pack BLOOM de Gestión en Redes Sociales.'
            }
        ]
    },
    'pauta': {
        title: 'Pauta Publicitaria',
        subtitle: 'Campañas de Alto Impacto',
        packs: [
            {
                name: 'Pack ACACIA (Meta Ads)',
                content: `
                    <div class="modal-features">
                        <h4>¿Qué incluye la estrategia en Meta Ads?</h4>
                        <ul>
                            <li><i class="fas fa-check"></i> <strong>Estrategia a medida:</strong> Campañas basadas en tus objetivos comerciales. Si es FB Ads (Campaña con A/B testing) o IG Ads (Promoción estratégica).</li>
                            <li><i class="fas fa-check"></i> <strong>Textos Optimizados:</strong> Redacción de copys persuasivos e investigación de palabras clave.</li>
                            <li><i class="fas fa-check"></i> <strong>Contenido Publicitario:</strong> Diseño del material gráfico o audiovisual necesario para la campaña.</li>
                            <li><i class="fas fa-check"></i> <strong>Asesoramiento:</strong> Te acompaño en la definición del presupuesto ideal para cumplir tus metas.</li>
                        </ul>
                    </div>
                `,
                wspMessage: 'Hola Brenda, quisiera más información y contratar el Pack Acacia de Meta Ads.'
            },
            {
                name: 'Pack ACACIA (Google Ads)',
                content: `
                    <div class="modal-features">
                        <h4>¿Qué incluye el servicio de Google Ads?</h4>
                        <ul>
                            <li><i class="fas fa-check"></i> <strong>Relevamiento Inicial:</strong> Revisión estratégica del sitio, análisis de palabras clave e investigación competitiva.</li>
                            <li><i class="fas fa-check"></i> <strong>Configuración Técnica:</strong> Google Tag Manager, Analytics 4, Search Console y setup de eventos de conversión.</li>
                            <li><i class="fas fa-check"></i> <strong>Campaña de Búsqueda:</strong> Estructuración de anuncios, redacción orientada a CTR y segmentación precisa por ubicación y dispositivos.</li>
                            <li><i class="fas fa-check"></i> <strong>Monitoreo y Optimización:</strong> Supervisión diaria en los primeros 7 días, ajustes por rendimiento e informe inicial de métricas clave.</li>
                        </ul>
                    </div>
                `,
                wspMessage: 'Hola Brenda, quisiera más información y contratar el servicio de Google Ads.'
            }
        ]
    },
    'estrategia': {
        title: 'Creación de Estrategia',
        subtitle: 'Tu Hoja de Ruta al Crecimiento',
        packs: [
            {
                name: 'Pack ESTRATEGIA',
                content: `
                    <div class="modal-features">
                        <h4>¿Qué incluye este servicio?</h4>
                        <ul>
                            <li><i class="fas fa-check"></i> <strong>Análisis Estratégico:</strong> Evaluación actual de la marca, revisión de perfil y detección de oportunidades de mejora.</li>
                            <li><i class="fas fa-check"></i> <strong>Desarrollo de Estrategia:</strong> Definición de objetivos y pilares de contenido para generar conexión, autoridad y ventas.</li>
                            <li><i class="fas fa-check"></i> <strong>Público Objetivo:</strong> Análisis del buyer persona y recomendaciones para comunicar de forma más efectiva.</li>
                            <li><i class="fas fa-check"></i> <strong>Plan de Comunicación:</strong> Lineamientos de tono de voz, estilo visual y formatos sugeridos según tus objetivos.</li>
                            <li><i class="fas fa-check"></i> <strong>Propuesta de Contenido:</strong> Ideas estratégicas y organización base para comunicar con coherencia y constancia.</li>
                            <li><i class="fas fa-check"></i> <strong>Entrega Final:</strong> Documento estratégico en PDF con recomendaciones accionables y claras.</li>
                        </ul>
                        <div class="modal-bonus">
                            <strong><i class="fas fa-gift" style="color:var(--primary); margin-right: 5px;"></i> BONUS EXCLUSIVO:</strong> Devolución personalizada por videollamada o reunión. Un espacio para explicar la estrategia y evacuar todas tus dudas.
                        </div>
                        <p style="margin-top:15px; font-style:italic; color:var(--gray-text);">Ideal para marcas que necesitan claridad, orden y dirección antes de invertir en gestión de redes o publicidad.</p>
                    </div>
                `,
                wspMessage: 'Hola Brenda, quisiera más información sobre el Pack ESTRATEGIA.'
            }
        ]
    },
    'diseno': {
        title: 'Diseño de Piezas (Contenido)',
        subtitle: 'Estética y Funcionalidad',
        packs: [
            {
                name: 'Pack DISEÑO',
                content: `
                    <div class="modal-features">
                        <h4>¿Qué incluye este servicio?</h4>
                        <ul>
                            <li><i class="fas fa-check"></i> <strong>Diseño de Piezas:</strong> Posteos, carruseles y placas para historias adaptadas a distintos formatos.</li>
                            <li><i class="fas fa-check"></i> <strong>Desarrollo Visual Alineado:</strong> Diseños pensados según tu identidad, con coherencia estética en tipografías y colores.</li>
                            <li><i class="fas fa-check"></i> <strong>Diseño Orientado:</strong> Piezas creadas para comunicar estratégicamente, informando, conectando y vendiendo.</li>
                            <li><i class="fas fa-check"></i> <strong>Edición y Armado:</strong> Organización visual y jerarquización de textos para captar la atención de tu audiencia.</li>
                            <li><i class="fas fa-check"></i> <strong>Entrega Final:</strong> Piezas listas para publicar en el formato digital acordado.</li>
                        </ul>
                        <div class="modal-bonus">
                            <strong><i class="fas fa-gift" style="color:var(--primary); margin-right: 5px;"></i> BONUS EXCLUSIVO:</strong> Revisión estética general del feed o perfil con sugerencias visuales para mantener una imagen más profesional.
                        </div>
                        <p style="margin-top:15px; font-style:italic; color:var(--gray-text);">Ideal para marcas que ya tienen definido qué comunicar, pero necesitan una imagen visual profesional y atractiva.</p>
                    </div>
                `,
                wspMessage: 'Hola Brenda, quisiera cotizar el Pack de Diseño de Piezas (Contenido).'
            }
        ]
    },
    'web': {
        title: 'Desarrollo de Software',
        subtitle: 'Soluciones Digitales a Medida',
        packs: [
            {
                name: 'Desarrollo Web Institucional',
                content: `
                    <div class="modal-features">
                        <h4>Tu Casa Digital Profesional</h4>
                        <ul>
                            <li><i class="fas fa-laptop"></i> <strong>Diseño Adaptable:</strong> Versión responsive (celular, tablet y PC) adaptada a tu identidad de marca.</li>
                            <li><i class="fas fa-sitemap"></i> <strong>Estructura Completa:</strong> Secciones de Quiénes Somos, Servicios, Redes Sociales y catálogos.</li>
                            <li><i class="fas fa-comments"></i> <strong>Herramientas de Contacto:</strong> Botón de WhatsApp integrado, formularios de contacto y mapa interactivo.</li>
                            <li><i class="fas fa-lock"></i> <strong>Seguridad y Rendimiento:</strong> Certificado SSL, protección DDoS y copias de seguridad.</li>
                            <li><i class="fas fa-globe"></i> <strong>Beneficios Adicionales:</strong> 12 meses de dominio web totalmente gratis y soporte personalizado.</li>
                        </ul>
                        <div class="modal-bonus">
                            <strong><i class="fas fa-paint-roller" style="color:var(--primary); margin-right: 5px;"></i> BONUS DE PLANTILLAS:</strong> Te compartimos 4 opciones de plantillas web modernas, dinámicas y creativas para elegir la que mejor se adapte a tu marca.
                        </div>
                        <div class="modal-bonus" style="border-left-color: var(--dark); background-color: var(--gray-light);">
                            <strong><i class="fas fa-tools" style="color:var(--dark); margin-right: 5px;"></i> BONUS DE MANTENIMIENTO:</strong> Mantenimiento técnico del sitio totalmente gratis por el primer mes.
                        </div>
                    </div>
                `,
                wspMessage: 'Hola Brenda, quisiera más información sobre el servicio de Desarrollo Web.'
            },
            {
                name: 'Desarrollo Mobile (iOS y Android)',
                content: `
                    <div class="modal-features">
                        <h4>Llevá tu negocio al bolsillo de tus clientes</h4>
                        <ul>
                            <li><i class="fab fa-apple"></i> <strong>Apps 100% Nativas:</strong> Desarrollo a medida para su publicación oficial en App Store (Apple) y Google Play Store (Android).</li>
                            <li><i class="fas fa-mobile-alt"></i> <strong>Experiencia de Usuario Premium:</strong> Diseño de interfaces (UI/UX) intuitivas, fluidas y enfocadas en la retención del usuario.</li>
                            <li><i class="fas fa-rocket"></i> <strong>Tecnología de Vanguardia:</strong> Desarrolladas en React Native para garantizar un rendimiento óptimo, rápido y escalable.</li>
                            <li><i class="fas fa-cogs"></i> <strong>Funciones Avanzadas:</strong> Integración de notificaciones push, geolocalización, pasarelas de pago o cualquier funcionalidad a demanda.</li>
                            <li><i class="fas fa-cloud-upload-alt"></i> <strong>Acompañamiento Integral:</strong> Nos encargamos de todo el proceso, desde el código hasta la subida exitosa a las tiendas.</li>
                        </ul>
                        <p style="margin-top:15px; font-style:italic; color:var(--gray-text);">Ideal para fidelizar clientes, crear e-commerce nativos o digitalizar servicios exclusivos.</p>
                    </div>
                `,
                wspMessage: 'Hola Brenda, quisiera cotizar el Desarrollo de una Aplicación Mobile (iOS/Android).'
            },
            {
                name: 'Aplicaciones de Escritorio (Windows)',
                content: `
                    <div class="modal-features">
                        <h4>Sistemas operativos a la medida de tu empresa</h4>
                        <ul>
                            <li><i class="fab fa-windows"></i> <strong>Desarrollo 100% Personalizado:</strong> Aplicaciones de escritorio para Windows creadas específicamente para resolver las necesidades de tu negocio.</li>
                            <li><i class="fas fa-boxes"></i> <strong>Sistemas de Gestión:</strong> Ideal para control de stock, facturación, bases de datos de clientes (CRM) o herramientas operativas internas.</li>
                            <li><i class="fas fa-tachometer-alt"></i> <strong>Rendimiento Robusto:</strong> Software estable, seguro y rápido que optimiza los flujos de trabajo diarios de tu equipo.</li>
                            <li><i class="fas fa-network-wired"></i> <strong>Conectividad Híbrida:</strong> Opciones de funcionamiento offline (sin internet) con sincronización de datos en la nube.</li>
                            <li><i class="fas fa-headset"></i> <strong>Soporte y Capacitación:</strong> Entrega del sistema llave en mano con capacitación básica para que tu equipo aprenda a utilizarlo.</li>
                        </ul>
                        <p style="margin-top:15px; font-style:italic; color:var(--gray-text);">La solución definitiva para automatizar procesos internos y tener el control total de tu empresa.</p>
                    </div>
                `,
                wspMessage: 'Hola Brenda, quisiera cotizar el Desarrollo de un Sistema/Aplicación para Windows.'
            }
        ]
    },
    'identidad': {
        title: 'Identidad de Marca',
        subtitle: 'Branding que Perdura',
        packs: [
            {
                name: 'Pack ESSENCE',
                content: `
                    <div class="modal-features">
                        <h4>¿Qué incluye este servicio?</h4>
                        <ul>
                            <li><i class="fas fa-check"></i> <strong>Análisis Inicial:</strong> Relevamiento profundo de la esencia, valores, diferencial competitivo y oportunidades de mejora de tu marca.</li>
                            <li><i class="fas fa-check"></i> <strong>Identidad Verbal y Conceptual:</strong> Definición de personalidad, tono de voz, estilo y concepto general alineado a tus objetivos.</li>
                            <li><i class="fas fa-check"></i> <strong>Identidad Visual:</strong> Definición de paleta cromática, selección tipográfica y estilo gráfico sugerido para redes y web.</li>
                            <li><i class="fas fa-check"></i> <strong>Diseño de Logo:</strong> Propuesta de logo personalizada con hasta 3 instancias de ajustes o cambios.</li>
                            <li><i class="fas fa-check"></i> <strong>Dirección de Marca:</strong> Lineamientos estratégicos para aplicar con consistencia en todos tus canales de comunicación.</li>
                            <li><i class="fas fa-check"></i> <strong>Entrega Final:</strong> Manual en PDF, archivos de logo y recomendaciones para implementar en entornos digitales.</li>
                        </ul>
                        <div class="modal-bonus">
                            <strong><i class="fas fa-gift" style="color:var(--primary); margin-right: 5px;"></i> BONUS EXCLUSIVO:</strong> Reunión de entrega y presentation de la identidad desarrollada para explicar criterios, aplicación y resolver dudas.
                        </div>
                        <p style="margin-top:15px; font-style:italic; color:var(--gray-text);">Servicio diseñado para marcas que desean construir o redefinir su identidad con una base estratégica, visual y conceptual sólida.</p>
                    </div>
                `,
                wspMessage: 'Hola Brenda, quisiera más información sobre el Pack ESSENCE de Identidad de Marca.'
            }
        ]
    }
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
                <div class="servicio-card bg-serv-1" data-id="redes-sociales"><h3>Gestión en Redes Sociales</h3><p>Construimos comunidades sólidas y auténticas.</p></div>
                <div class="servicio-card bg-serv-2" data-id="pauta"><h3>Pauta Publicitaria</h3><p>Campañas optimizadas en Meta Ads y Google Ads.</p></div>
                <div class="servicio-card bg-serv-3" data-id="estrategia"><h3>Creación de Estrategia</h3><p>Rutas claras para el crecimiento de tu negocio.</p></div>
                <div class="servicio-card bg-serv-4" data-id="diseno"><h3>Diseño de Piezas (Contenido)</h3><p>Piezas visuales atractivas y funcionales.</p></div>
                <div class="servicio-card bg-serv-5" data-id="web"><h3>Desarrollo Web/Mobile/Windows</h3><p>Tu casa digital rápida, segura y estéticamente impecable.</p></div>
                <div class="servicio-card bg-serv-6" data-id="identidad"><h3>Identidad de Marca</h3><p>Desarrollo de branding que conecta y perdura.</p></div>
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
        <div class="modal-content text-left" style="max-width: 700px; padding-top: 40px; border-top: 8px solid var(--primary);">
            <span class="cerrar-modal-servicio" style="position: absolute; top: 15px; right: 25px; font-size: 2.5rem; cursor: pointer; color: var(--gray-text); z-index: 2001;">×</span>
            <div id="servicio-modal-content-inject" class="servicio-modal-scroll">
                </div>
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

    // LÓGICA POPUP SERVICIOS (Navegación en 2 Pasos)
    const modalBodyInject = document.getElementById('servicio-modal-content-inject');

    // Función 1: Renderiza las tarjetas de los packs
    function renderPacksList(serviceId) {
        const data = servicesDetails[serviceId];
        let packsCardsHtml = data.packs.map((pack, index) => `
            <div class="pack-card" data-service="${serviceId}" data-packindex="${index}">
                <h3>${pack.name}</h3>
                <span class="pack-arrow"><i class="fas fa-chevron-right"></i></span>
            </div>
        `).join('');

        modalBodyInject.innerHTML = `
            <h2 class="modal-title-gold" style="margin-bottom: 5px; font-size: 2.2rem; text-align: center;">${data.title}</h2>
            <h3 class="modal-subtitle-gold">${data.subtitle}</h3>
            <div class="packs-grid">
                ${packsCardsHtml}
            </div>
        `;

        // Al hacer click en un Pack, abrimos sus detalles
        modalBodyInject.querySelectorAll('.pack-card').forEach(card => {
            card.addEventListener('click', function() {
                renderPackDetail(this.dataset.service, this.dataset.packindex);
            });
        });
    }

    // Función 2: Renderiza los detalles de un pack específico
    function renderPackDetail(serviceId, packIndex) {
        const data = servicesDetails[serviceId];
        const pack = data.packs[packIndex];

        // Se inyecta el botón volver (arriba a la izquierda), el título y los beneficios sin precios
        modalBodyInject.innerHTML = `
            <button class="btn-back-packs" data-service="${serviceId}">
                <i class="fas fa-arrow-left"></i> Volver a Packs
            </button>
            
            <h2 class="modal-title-gold" style="margin-bottom: 5px; font-size: 2.5rem; text-align: center; margin-top: 20px;">${pack.name}</h2>
            <h3 class="modal-subtitle-gold">${data.title}</h3>
            
            <div class="modal-rich-text">
                ${pack.content}
            </div>
            
            <a href="https://wa.me/+5492213576210?text=${encodeURIComponent(pack.wspMessage)}" target="_blank" class="btn-shine-gold w-100" style="display: block; margin-top: 30px;">Quiero mi pack <i class="fab fa-whatsapp" style="margin-left: 8px;"></i></a>
        `;

        // Al hacer click en "Volver", llamamos a la Función 1
        modalBodyInject.querySelector('.btn-back-packs').addEventListener('click', function() {
            renderPacksList(this.dataset.service);
        });
    }

    // Evento inicial: Al hacer click en un servicio en el Hero
    document.querySelectorAll('.servicio-card').forEach(card => {
        card.addEventListener('click', function() {
            const id = this.dataset.id;
            if(servicesDetails[id]) {
                renderPacksList(id); // Cargamos la lista de packs
                openModal('servicio-modal'); // Abrimos el modal
            }
        });
    });

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
