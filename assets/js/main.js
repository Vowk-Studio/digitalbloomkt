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
                <div class="logo-text">
                    <h1>DIGITALBLOOMKT</h1>
                    <p>Agencia de Marketing</p>
                </div>
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
                <div class="servicio-card"><i class="fas fa-hashtag icon"></i><h3>Gestión en Redes Sociales</h3><p>Construimos comunidades sólidas y auténticas.</p></div>
                <div class="servicio-card"><i class="fas fa-bullhorn icon"></i><h3>Pauta Publicitaria</h3><p>Campañas optimizadas en Meta Ads y Google Ads.</p></div>
                <div class="servicio-card"><i class="fas fa-chess-knight icon"></i><h3>Creación de Estrategia</h3><p>Rutas claras para el crecimiento de tu negocio.</p></div>
                <div class="servicio-card"><i class="fas fa-palette icon"></i><h3>Diseño en Canva</h3><p>Piezas visuales atractivas y funcionales.</p></div>
                <div class="servicio-card"><i class="fas fa-laptop-code icon"></i><h3>Desarrollo Web</h3><p>Tu casa digital rápida, segura y estéticamente impecable.</p></div>
                <div class="servicio-card"><i class="fas fa-fingerprint icon"></i><h3>Identidad de Marca</h3><p>Desarrollo de branding que conecta y perdura.</p></div>
            </div>
        </div>
    </section>
`;

const QuienesSomos = () => `
    <section id="quienes-somos" class="quienes-somos section-padding">
        <div class="container layout-split">
            <div class="content-text">
                <span class="subtitle">NUESTRA HISTORIA</span>
                <h2>Quiénes Somos</h2>
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
                    <img src="./assets/images/logo1.png" alt="Brenda Dujovich - DigitalBloomKT">
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
                <button id="descarga-aqui-btn" class="btn-primary">Descargar Aquí</button>
            </div>
        </div>
    </section>
`;

const Resenas = () => `
    <section id="reseñas-section" class="reseñas-section section-padding">
        <div class="container">
            <div class="section-header center">
                <span class="subtitle">TESTIMONIOS</span>
                <h2>Lo que dicen nuestros clientes</h2>
            </div>
            <div class="reseñas-grid">
                <div class="review-card"><img src="assets/images/res-img.jpg" alt="Reseña 1"></div>
                <div class="review-card"><img src="assets/images/res-img2.jpg" alt="Reseña 2"></div>
                <div class="review-card"><img src="assets/images/res-img3.jpg" alt="Reseña 3"></div>
                <div class="review-card"><img src="assets/images/res-img4.jpg" alt="Reseña 4"></div>
            </div>
            <div class="ver-mas-container">
                <a href="https://www.instagram.com/stories/highlights/17844320421113426/" class="btn-secondary" target="_blank" rel="noopener noreferrer">Ver más reseñas en Instagram <i class="fab fa-instagram"></i></a>
            </div>
        </div>
    </section>
`;

const Certificados = () => `
    <section id="certificados" class="certificados section-padding">
        <div class="container">
            <div class="section-header">
                <span class="subtitle">FORMACIÓN</span>
                <h2>Mis Certificados</h2>
            </div>
            <div class="certificados-grid"> 
                <div class="cert-card" data-large-image="assets/certificados/adsvisors.png" data-caption="Marketing Digital (Advisors)"><i class="fas fa-award cert-icon"></i><p>Advisors Marketing</p></div>
                <div class="cert-card" data-large-image="assets/certificados/cmypublicidad.png" data-caption="Community Manager y Publicidad"><i class="fas fa-award cert-icon"></i><p>CM y Publicidad</p></div>
                <div class="cert-card" data-large-image="assets/certificados/copywriting.png" data-caption="Copywriting Persuasivo"><i class="fas fa-award cert-icon"></i><p>Copywriting</p></div>
                <div class="cert-card" data-large-image="assets/certificados/HerramientasDigitales.png" data-caption="Herramientas Digitales I"><i class="fas fa-award cert-icon"></i><p>Herramientas I</p></div>
                <div class="cert-card" data-large-image="assets/certificados/GrowthMarketing.png" data-caption="Growth Marketing"><i class="fas fa-award cert-icon"></i><p>Growth Marketing</p></div>
                <div class="cert-card" data-large-image="assets/certificados/seo.png" data-caption="SEO Básico"><i class="fas fa-award cert-icon"></i><p>SEO Básico</p></div>
                <div class="cert-card" data-large-image="assets/certificados/publicidad.png" data-caption="Avanzado Google Ads"><i class="fas fa-award cert-icon"></i><p>Google Ads</p></div>
                <div class="cert-card" data-large-image="assets/certificados/marketingdigital.png" data-caption="Marketing Digital"><i class="fas fa-award cert-icon"></i><p>Marketing Digital</p></div>
            </div>
        </div>
    </section>
`;

const Contacto = () => `
    <section id="contacto" class="contacto section-padding">
        <div class="container layout-split">
            <div class="contact-info">
                <span class="subtitle">HABLEMOS</span>
                <h2>Contáctanos</h2>
                <p>¿Lista para hacer florecer tu marca? Escríbenos y comencemos a trabajar en tu estrategia.</p>
                <div class="social-links-modern">
                    <a href="https://www.instagram.com/digitalbloomkt/" target="_blank" class="social-btn"><i class="fab fa-instagram"></i></a>
                    <a href="https://www.facebook.com/share/16BipM7eHb/" target="_blank" class="social-btn"><i class="fab fa-facebook-f"></i></a>
                    <a href="mailto:brendadujovich@gmail.com" class="social-btn"><i class="fas fa-envelope"></i></a>
                    <a href="https://www.tiktok.com/@digitalbloomkt?lang=es-419" target="_blank" class="social-btn"><i class="fab fa-tiktok"></i></a>
                </div>
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
                    <button type="button" id="enviarConsultaBtn" class="btn-primary w-100">Enviar Consulta</button>
                </form>
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
            <span class="cerrar-modal-gratuito">&times;</span>
            <h2>Material Gratuito</h2>
            <p>Selecciona los recursos y te los enviaremos.</p>
            <form id="form-contenido-gratuito" class="modern-form">
                <div class="checkbox-grid">
                    <label class="custom-checkbox"><input type="checkbox" name="contenido" value="guia-seo"><span>Guía de SEO Básico</span></label>
                    <label class="custom-checkbox"><input type="checkbox" name="contenido" value="checklist"><span>Checklist Marketing</span></label>
                    <label class="custom-checkbox"><input type="checkbox" name="contenido" value="copywriting"><span>Ebook Copywriting</span></label>
                    <label class="custom-checkbox"><input type="checkbox" name="contenido" value="reels"><span>Guía Reels y TikTok</span></label>
                </div>
                <input type="email" id="user-email-gratuito" placeholder="Tu Email" required style="margin-top:15px; width:100%; padding: 15px; border: 1px solid #ddd; border-radius: 8px; font-size:1.1rem;">
                <button type="submit" class="btn-primary w-100" style="margin-top: 15px;">Solicitar</button>
            </form>
        </div>
    </div>

    <div id="certificado-modal" class="modal-overlay">
        <span class="cerrar-modal">&times;</span>
        <div class="modal-image-container">
             <img id="img-certificado-modal" src="" alt="Certificado">
             <div id="modal-caption"></div>
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
    
    // Header Sticky Effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
    });

    // Menú Móvil
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.menu');
    if(mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Scroll Suave
    document.querySelectorAll('.menu-item').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                navMenu.classList.remove('active'); // Cerrar menu en movil
                const headerHeight = document.querySelector('.header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerHeight;
        
                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
            }
        });
    });

    // Modales
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

    document.querySelectorAll('.cert-card').forEach(card => {
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

    document.querySelectorAll('.cerrar-modal, .cerrar-modal-gratuito, .modal-overlay').forEach(el => {
        el.addEventListener('click', (e) => {
            if(e.target === el) closeModal();
        });
    });

    // Intersection Observer Animaciones al Scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section-header, .servicio-card, .review-card, .cert-card, .content-text, .modern-form').forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        observer.observe(el);
    });

    // Formularios
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
