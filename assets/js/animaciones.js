document.addEventListener('DOMContentLoaded', () => {
    const esMovil = window.innerWidth <= 768;

    const opciones = {
        root: null,
        threshold: esMovil ? 0.05 : 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const el = entry.target;
            const animacionClase = el.dataset.anim;

            if (entry.isIntersecting) {
                el.classList.add(animacionClase);
            } else {
                el.classList.remove(animacionClase);
            }
        });
    }, opciones);

    const elementosParaAnimar = [
        { sel: '.logo', anim: 'visible-logo' },
        { sel: '.header-principal', anim: 'visible-titulo' },
        { sel: '.header-subtitulo', anim: 'visible-subtitulo' },
        { sel: '.menu-item', anim: 'visible-menu-item' },
        { sel: '.hero p', anim: 'visible-hero-p' },
        { sel: '.servicios h2', anim: 'visible-servicios-h2' },
        { sel: '.servicio-item', anim: 'visible-servicio-card' },
        { sel: '.quienes-somos h2', anim: 'visible-quienes-h2' },
        { sel: '.quienes-somos p', anim: 'visible-quienes-p' },
        { sel: '.contenido-gratuito img', anim: 'visible-gratuito-img' },
        { sel: '.contenido-texto-y-boton-wrapper', anim: 'visible-gratuito-box' },
        { sel: '.reseña-title', anim: 'visible-reseña-title' },
        { sel: '.reseñas-card', anim: 'visible-reseña-card' },
        { sel: '.i1', anim: 'visible-i1' },
        { sel: '.i2', anim: 'visible-i2' },
        { sel: '.i3', anim: 'visible-i3' },
        { sel: '.certificado-circulo', anim: 'visible-certificado' },
        { sel: '.ubicacion', anim: 'visible-ubicacion' },
        { sel: '.formulario-consulta', anim: 'visible-formulario' },
        { sel: '.social-item', anim: 'visible-redes' }
    ];

    elementosParaAnimar.forEach(item => {
        const targets = document.querySelectorAll(item.sel);
        targets.forEach(t => {
            t.dataset.anim = item.anim;
            observer.observe(t);
        });
    });

    /* --- Lógica para el Botón WhatsApp Premium --- */
    const wspButton = document.querySelector('.whatsapp-button');
    if (wspButton) {
        // Configuramos el estado inicial por JS para que no parpadee al cargar
        wspButton.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                wspButton.style.opacity = '1';
                wspButton.style.visibility = 'visible';
                wspButton.style.transform = 'scale(1)';
            } else {
                wspButton.style.opacity = '0';
                wspButton.style.visibility = 'hidden';
                wspButton.style.transform = 'scale(0.5)';
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const footer = document.querySelector('footer');

    if (footer) {
        const observerOptions = {
            root: null,
            // Ponemos un margen negativo para que "venga desde el futuro" 
            // y no parpadee justo en el borde de la pantalla
            rootMargin: '0px 0px 50px 0px', 
            threshold: 0.01 
        };

        const footerObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    footer.classList.add('footer-visible');
                } else {
                    // Si querés que NO se vaya al subir, borrá la línea de abajo
                    footer.classList.remove('footer-visible');
                }
            });
        }, observerOptions);

        footerObserver.observe(footer);
    }
});