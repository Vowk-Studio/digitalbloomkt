window.addEventListener('unhandledrejection', (event) => {
    const reason = event.reason;
    const message = String(reason?.message || reason || '');
    if (reason?.name === 'InvalidStateError' && message.includes('Transition was aborted because of invalid state')) {
        event.preventDefault();
    }
});

// ==========================================
// 1. ESTADO GLOBAL Y DATOS DE SERVICIOS
// ==========================================
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
// 2. INICIALIZACION SOBRE HTML ESTATICO
// ==========================================
// La pagina ya viene renderizada en index.html para que Hostinger y los bots reciban contenido completo.

// ==========================================
// 4. LÓGICA DE INTERACCIÓN
// ==========================================
function initEffects() {
    
    const header = document.querySelector('.header');
    if (header) window.addEventListener('scroll', () => {
        if (window.scrollY > 50) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
    }, { passive: true });

    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.menu');
    if(mobileBtn && navMenu) {
        mobileBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileBtn.setAttribute('aria-expanded', String(navMenu.classList.contains('active')));
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
                navMenu?.classList.remove('active'); 
                mobileBtn?.setAttribute('aria-expanded', 'false');
                const headerHeight = header?.offsetHeight || 0;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerHeight;
        
                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
            }
        });
    });

    const openModal = (id) => {
        const modal = document.getElementById(id);
        if (!modal) return;
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    };
    const closeModal = () => {
        document.querySelectorAll('.modal-overlay').forEach(m => {
            m.classList.remove('active');
            m.setAttribute('aria-hidden', 'true');
        });
        document.body.style.overflow = 'auto';
    };

    const btnGratis = document.getElementById('descarga-aqui-btn');
    if(btnGratis) btnGratis.addEventListener('click', () => openModal('contenido-gratuito-modal'));

    const enableDeferredBackgrounds = () => {
        document.querySelectorAll('.servicio-card').forEach(card => card.classList.add('bg-ready'));
        document.querySelector('.certificados')?.classList.add('bg-ready');
    };

    if ('IntersectionObserver' in window) {
        const backgroundObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                if (entry.target.id === 'servicios') {
                    document.querySelectorAll('.servicio-card').forEach(card => card.classList.add('bg-ready'));
                } else {
                    entry.target.classList.add('bg-ready');
                }
                backgroundObserver.unobserve(entry.target);
            });
        }, { rootMargin: '-80px 0px', threshold: 0.01 });

        ['servicios', 'certificados'].forEach(id => {
            const section = document.getElementById(id);
            if (section) backgroundObserver.observe(section);
        });
    } else {
        enableDeferredBackgrounds();
    }

    const loadLazyImage = (image) => {
        if (image.dataset.srcset) image.srcset = image.dataset.srcset;
        if (image.dataset.sizes) image.sizes = image.dataset.sizes;
        if (image.dataset.src) image.src = image.dataset.src;
        image.classList.remove('lazy-img');
    };

    const lazyImages = document.querySelectorAll('img.lazy-img');
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                loadLazyImage(entry.target);
                imageObserver.unobserve(entry.target);
            });
        }, { rootMargin: '220px 0px' });

        lazyImages.forEach(image => imageObserver.observe(image));
    } else {
        lazyImages.forEach(loadLazyImage);
    }

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
            <button class="pack-card" type="button" data-service="${serviceId}" data-packindex="${index}">
                <h3>${pack.name}</h3>
                <span class="pack-arrow"><i class="fas fa-chevron-right"></i></span>
            </button>
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
            
            <a href="https://wa.me/+5492213576210?text=${encodeURIComponent(pack.wspMessage)}" target="_blank" rel="noopener noreferrer" class="btn-shine-gold w-100" style="display: block; margin-top: 30px;">Quiero mi pack <i class="fab fa-whatsapp" aria-hidden="true" style="margin-left: 8px;"></i></a>
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

    const revealTargets = document.querySelectorAll('.section-header, .servicio-card, .review-card, .certificado-circulo, .content-text, .modern-form');
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-up');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        revealTargets.forEach(el => {
            el.style.opacity = "0";
            el.style.transform = "translateY(30px)";
            observer.observe(el);
        });
    } else {
        revealTargets.forEach(el => el.classList.add('fade-in-up'));
    }

    const contactForm = document.getElementById('contactForm');
    const enviarConsultaBtn = document.getElementById('enviarConsultaBtn');
    if (enviarConsultaBtn && contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const wasAgentInvoked = e.agentInvoked && typeof e.respondWith === 'function';
            if (!contactForm.checkValidity()) {
                contactForm.reportValidity();
                if (wasAgentInvoked) {
                    e.respondWith(Promise.resolve({
                        status: 'invalid',
                        message: 'Faltan datos requeridos o el email no es valido.'
                    }));
                }
                return;
            }
            const formData = new FormData(contactForm);
            const originalText = enviarConsultaBtn.innerText;
            enviarConsultaBtn.innerText = "Enviando..."; enviarConsultaBtn.disabled = true;

            const submitRequest = fetch(contactForm.getAttribute('action') || './enviar_consulta.php', { method: 'POST', body: formData })
            .then(res => res.text()).then(data => {
                alert(data);
                contactForm.reset();
                return { status: 'submitted', message: data };
            })
            .catch(() => {
                const message = "Error enviando consulta.";
                alert(message);
                return { status: 'error', message };
            })
            .finally(() => { enviarConsultaBtn.innerText = originalText; enviarConsultaBtn.disabled = false; });

            if (wasAgentInvoked) e.respondWith(submitRequest);
        });
    }

    const formGratis = document.getElementById('form-contenido-gratuito');
    if(formGratis) {
        formGratis.addEventListener('submit', (e) => {
            e.preventDefault();
            const wasAgentInvoked = e.agentInvoked && typeof e.respondWith === 'function';
            if (!formGratis.checkValidity()) {
                formGratis.reportValidity();
                if (wasAgentInvoked) {
                    e.respondWith(Promise.resolve({
                        status: 'invalid',
                        message: 'El email es requerido para enviar los recursos gratuitos.'
                    }));
                }
                return;
            }
            const selectedResources = Array.from(formGratis.querySelectorAll('input[name="contenido"]:checked')).map(input => input.value);
            const email = formGratis.querySelector('#user-email-gratuito')?.value || '';
            closeModal();
            const message = "Solicitud enviada. Revisa tu email.";
            alert(message);
            formGratis.reset();
            if (wasAgentInvoked) {
                e.respondWith(Promise.resolve({
                    status: 'requested',
                    message,
                    email,
                    selectedResources
                }));
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.anim-montaje').forEach(el => el.classList.add('montado'));
    initEffects();
});
