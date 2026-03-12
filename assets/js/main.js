document.addEventListener('DOMContentLoaded', function() {
    const certificadoModal = document.getElementById('certificado-modal');
    const modalImg = document.getElementById('img-certificado-modal');
    const captionText = document.getElementById('modal-caption');
    const closeModal = document.querySelector('.cerrar-modal');
    const contenidoGratuitoModal = document.getElementById('contenido-gratuito-modal');
    const formContenidoGratuito = document.getElementById('form-contenido-gratuito');
    const cerrarContenidoModalGratuito = document.querySelector('.cerrar-modal-gratuito');

    let lastInteraction = { type: null, wasSwipe: false, time: 0 };

    const contactForm = document.getElementById('contactForm');
    const enviarConsultaBtn = document.getElementById('enviarConsultaBtn');

    if (enviarConsultaBtn && contactForm) {
        enviarConsultaBtn.addEventListener('click', function() {
            if (!contactForm.checkValidity()) {
                contactForm.reportValidity();
                return;
            }
            
            // --- NUEVA LÓGICA DE ENVÍO DIRECTO ---
            const formData = new FormData(contactForm);
            
            // Feedback visual en el botón
            const textoOriginal = enviarConsultaBtn.innerText;
            enviarConsultaBtn.innerText = "Enviando...";
            enviarConsultaBtn.disabled = true;

            fetch('enviar_consulta.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.text())
            .then(data => {
                alert(data); // El PHP responderá si se envió con éxito
                if (data.includes("éxito")) {
                    contactForm.reset();
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert("Hubo un error al enviar la consulta.");
            })
            .finally(() => {
                enviarConsultaBtn.innerText = textoOriginal;
                enviarConsultaBtn.disabled = false;
            });
            // --- FIN LÓGICA DE ENVÍO DIRECTO ---
        });
    }

    const track = document.querySelector('.certificados-container');
    const nextButton = document.querySelector('.carousel-next-btn');
    const prevButton = document.querySelector('.carousel-prev-btn');
    const dotsContainer = document.querySelector('.carousel-dots');
    const carouselViewport = document.querySelector('.carousel-viewport');

    if (track && nextButton && prevButton && dotsContainer && carouselViewport) {
        const slides = Array.from(track.children);
        let slideWidth;
        let currentSlideIndex = 0;
        let slidesPerPage = 0;

        let startX = 0;
        let endX = 0;
        let isDragging = false;
        let currentTrackOffset = 0;
        let startTime = 0;
        const swipeThreshold = 75;
        const tapMaxDistance = 12;
        const tapMaxDuration = 250;

        function calculateSlideDimensions() {
            if (slides.length === 0) {
                nextButton.style.display = 'none';
                prevButton.style.display = 'none';
                dotsContainer.style.display = 'none';
                return;
            }
            const firstSlide = slides[0];
            const slideComputedStyle = getComputedStyle(firstSlide);
            const slideElementWidth = firstSlide.offsetWidth;
            const marginRight = parseFloat(slideComputedStyle.marginRight);
            slideWidth = slideElementWidth + marginRight;
            const visibleViewportWidth = carouselViewport.offsetWidth;
            const desktopBreakpoint = 1200;
            if (window.innerWidth >= desktopBreakpoint) {
                slidesPerPage = Math.floor(visibleViewportWidth / slideWidth);
                if (slidesPerPage === 0) slidesPerPage = 1;
                if (slidesPerPage > 5) slidesPerPage = 5;
            } else {
                slidesPerPage = Math.floor(visibleViewportWidth / slideWidth);
                if (slidesPerPage <= 0) slidesPerPage = 1;
            }
            if (slidesPerPage > slides.length) slidesPerPage = slides.length;
            if (slides.length <= slidesPerPage) {
                nextButton.style.display = 'none';
                prevButton.style.display = 'none';
                dotsContainer.style.display = 'none';
            } else {
                nextButton.style.display = 'block';
                prevButton.style.display = 'block';
                dotsContainer.style.display = 'block';
            }
            moveToSlide(currentSlideIndex, false);
        }

        function moveToSlide(index, animate = true) {
            let maxIndex = slides.length - slidesPerPage;
            if (maxIndex < 0) maxIndex = 0;
            if (index < 0) currentSlideIndex = 0;
            else if (index > maxIndex) currentSlideIndex = maxIndex;
            else currentSlideIndex = index;
            currentTrackOffset = -currentSlideIndex * slideWidth;
            if (animate) track.style.transition = 'transform 0.5s ease-in-out';
            else track.style.transition = 'none';
            track.style.transform = `translateX(${currentTrackOffset}px)`;
            updateDots();
            updateArrowVisibility();
        }

        function setupDots() {
            dotsContainer.innerHTML = '';
            const totalPages = Math.ceil(slides.length / slidesPerPage);
            for (let i = 0; i < totalPages; i++) {
                const dot = document.createElement('span');
                dot.classList.add('dot');
                dot.addEventListener('click', () => moveToSlide(i * slidesPerPage));
                dotsContainer.appendChild(dot);
            }
            updateDots();
        }

        function updateDots() {
            const dots = Array.from(dotsContainer.children);
            if (dots.length === 0) return;
            dots.forEach((dot, i) => {
                dot.classList.remove('active');
                if (currentSlideIndex >= (i * slidesPerPage) && currentSlideIndex < ((i + 1) * slidesPerPage)) dot.classList.add('active');
                const totalPages = Math.ceil(slides.length / slidesPerPage);
                if (currentSlideIndex === slides.length - slidesPerPage && i === totalPages - 1) dot.classList.add('active');
            });
            if (currentSlideIndex === 0 && dots.length > 0) dots[0].classList.add('active');
        }

        function updateArrowVisibility() {
            prevButton.disabled = currentSlideIndex === 0;
            nextButton.disabled = currentSlideIndex >= (slides.length - slidesPerPage);
            if (slides.length <= slidesPerPage) {
                prevButton.style.display = 'none';
                nextButton.style.display = 'none';
            } else {
                prevButton.style.display = 'block';
                nextButton.style.display = 'block';
            }
        }

        nextButton.addEventListener('click', () => {
            moveToSlide(currentSlideIndex + slidesPerPage);
        });
        prevButton.addEventListener('click', () => {
            moveToSlide(currentSlideIndex - slidesPerPage);
        });

        track.addEventListener('touchstart', handleStart, { passive: true });
        track.addEventListener('mousedown', handleStart);

        function handleStart(e) {
            if (slides.length <= slidesPerPage) return;
            startX = (e.touches ? e.touches[0].clientX : e.clientX);
            startTime = Date.now();
            isDragging = true;
            track.style.transition = 'none';
            if (e.type === 'mousedown') e.preventDefault();
            document.addEventListener('touchmove', handleMove, { passive: false });
            document.addEventListener('mousemove', handleMove);
            document.addEventListener('touchend', handleEnd);
            document.addEventListener('mouseup', handleEnd);
            document.addEventListener('mouseleave', handleEnd);
        }

        function handleMove(e) {
            if (!isDragging) return;
            e.preventDefault();
            endX = (e.touches ? e.touches[0].clientX : e.clientX);
            const dragDistance = endX - startX;
            track.style.transform = `translateX(${currentTrackOffset + dragDistance}px)`;
        }

        function handleEnd(e) {
            if (!isDragging) return;
            document.removeEventListener('touchmove', handleMove);
            document.removeEventListener('mousemove', handleMove);
            document.removeEventListener('touchend', handleEnd);
            document.removeEventListener('mouseup', handleEnd);
            document.removeEventListener('mouseleave', handleEnd);
            isDragging = false;
            const distance = (endX || startX) - startX;
            const duration = Date.now() - startTime;
            let nextIndex = currentSlideIndex;
            const absDistance = Math.abs(distance);
            let wasSwipe = false;
            if (absDistance > swipeThreshold) wasSwipe = true;
            if (distance < -swipeThreshold) nextIndex = currentSlideIndex + slidesPerPage;
            else if (distance > swipeThreshold) nextIndex = currentSlideIndex - slidesPerPage;
            moveToSlide(nextIndex);
            lastInteraction.type = (e.type && e.type.startsWith && e.type.startsWith('touch')) ? 'touch' : 'mouse';
            lastInteraction.wasSwipe = wasSwipe;
            lastInteraction.time = Date.now();
            startX = 0;
            endX = 0;
            startTime = 0;
            if (wasSwipe && e.type && e.type.startsWith && e.type.startsWith('touch')) {
                if (e.cancelable) e.preventDefault();
            }
        }

        calculateSlideDimensions();
        setupDots();
        moveToSlide(0, false);

        window.addEventListener('resize', () => {
            calculateSlideDimensions();
            setupDots();
            moveToSlide(currentSlideIndex, false);
        });

        const certificadosParaModal = document.querySelectorAll('.certificado-circulo');

        if (certificadosParaModal.length > 0) {
            certificadosParaModal.forEach(certificado => {
                certificado.addEventListener('touchstart', function(e) {
                    const t = (e.touches && e.touches[0]) || null;
                    if (t) {
                        this._touchStartX = t.clientX;
                        this._touchStartY = t.clientY;
                        this._touchStartTime = Date.now();
                    }
                }, { passive: true });

                certificado.addEventListener('touchend', function(e) {
                    const touch = (e.changedTouches && e.changedTouches[0]) || null;
                    if (!touch) return;
                    const touchX = touch.clientX;
                    const touchY = touch.clientY;
                    const startXLocal = this._touchStartX || touchX;
                    const startYLocal = this._touchStartY || touchY;
                    const duration = Date.now() - (this._touchStartTime || Date.now());
                    const deltaX = touchX - startXLocal;
                    const deltaY = touchY - startYLocal;
                    const absX = Math.abs(deltaX);
                    const absY = Math.abs(deltaY);
                    const now = Date.now();
                    if (absX <= tapMaxDistance && absY <= tapMaxDistance && duration <= tapMaxDuration) {
                        lastInteraction.type = 'touch';
                        lastInteraction.wasSwipe = false;
                        lastInteraction.time = now;
                        e.preventDefault();
                        e.stopPropagation();
                        const imageUrlToDisplay = this.dataset.largeImage;
                        const caption = this.dataset.caption;
                        if (imageUrlToDisplay) {
                            modalImg.src = imageUrlToDisplay;
                            modalImg.alt = caption || "Certificado Ampliado";
                            certificadoModal.style.display = 'flex';
                            document.body.classList.add('modal-open');
                        }
                        if (captionText) {
                            if (window.innerWidth >= 768) {
                                captionText.textContent = caption || '';
                            } else {
                                captionText.textContent = '';
                            }
                        }
                    } else {
                        lastInteraction.type = 'touch';
                        lastInteraction.wasSwipe = true;
                        lastInteraction.time = now;
                    }
                    this._touchStartX = null;
                    this._touchStartY = null;
                    this._touchStartTime = null;
                }, { passive: false });
            });
        }
    }

    const certificadosParaModalClick = document.querySelectorAll('.certificado-circulo');

    if (certificadoModal && modalImg && closeModal && certificadosParaModalClick.length > 0) {
        certificadosParaModalClick.forEach(certificado => {
            certificado.addEventListener('click', function(e) {
                if (lastInteraction.type === 'touch' && (Date.now() - lastInteraction.time) < 500) {
                    return;
                }
                e.stopPropagation();
                const imageUrlToDisplay = this.dataset.largeImage;
                const caption = this.dataset.caption;
                if (imageUrlToDisplay) {
                    modalImg.src = imageUrlToDisplay;
                    modalImg.alt = caption || "Certificado Ampliado";
                    certificadoModal.style.display = 'flex';
                    document.body.classList.add('modal-open');
                } else {
                    return;
                }
                if (captionText) {
                    if (window.innerWidth >= 768) {
                        captionText.textContent = caption || '';
                    } else {
                        captionText.textContent = '';
                    }
                }
            });
        });

        closeModal.addEventListener('click', function() {
            certificadoModal.style.display = 'none';
            modalImg.src = '';
            if (captionText) captionText.textContent = '';
            document.body.classList.remove('modal-open');
        });

        certificadoModal.addEventListener('click', function(event) {
            if (event.target === certificadoModal) {
                certificadoModal.style.display = 'none';
                modalImg.src = '';
                if (captionText) captionText.textContent = '';
                document.body.classList.remove('modal-open');
            }
        });
    }

    const btnAbrirContenidoModalGratuito = document.getElementById('descarga-aqui-btn');

    if (btnAbrirContenidoModalGratuito && contenidoGratuitoModal && cerrarContenidoModalGratuito && formContenidoGratuito) {
        btnAbrirContenidoModalGratuito.addEventListener('click', function(e) {
            e.preventDefault();
            contenidoGratuitoModal.style.display = 'flex';
            document.body.classList.add('modal-open');
        });

        cerrarContenidoModalGratuito.addEventListener('click', function() {
            contenidoGratuitoModal.style.display = 'none';
            formContenidoGratuito.reset();
            document.body.classList.remove('modal-open');
        });

        contenidoGratuitoModal.addEventListener('click', function(event) {
            if (event.target === contenidoGratuitoModal) {
                contenidoGratuitoModal.style.display = 'none';
                formContenidoGratuito.reset();
                document.body.classList.remove('modal-open');
            }
        });

        formContenidoGratuito.addEventListener('submit', function(e) {
            e.preventDefault();
            const userEmail = document.getElementById('user-email-gratuito').value;
            const selectedContents = [];
            const checkboxes = document.querySelectorAll('#form-contenido-gratuito input[name="contenido"]:checked');
            checkboxes.forEach(checkbox => {
                const labelText = checkbox.parentNode.textContent.trim();
                selectedContents.push(labelText);
            });
            if (selectedContents.length === 0) {
                alert('Por favor, selecciona al menos un contenido para descargar.');
                return;
            }
            const recipientEmail = 'brendadujovich@gmail.com';
            const subject = encodeURIComponent('Solicitud de Contenido Gratuito desde el Sitio Web');
            let emailBody = `Hola DIGITALBLOOMKT,\n\n`;
            emailBody += `El usuario ${userEmail} ha solicitado el siguiente contenido gratuito:\n\n`;
            emailBody += selectedContents.map(content => `- ${content}`).join('\n');
            emailBody += `\n\nPor favor, contacta a ${userEmail} para enviarle el contenido solicitado.\n\nSaludos,\nTu Sitio Web`;
            const body = encodeURIComponent(emailBody);
            const mailtoUrl = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
            window.open(mailtoUrl, '_blank');
            contenidoGratuitoModal.style.display = 'none';
            formContenidoGratuito.reset();
            document.body.classList.remove('modal-open');
        });
    }

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' || event.key === 'Esc') {
            let modalClosed = false;
            if (certificadoModal && certificadoModal.style.display === 'flex') {
                certificadoModal.style.display = 'none';
                modalImg.src = '';
                if (captionText) captionText.textContent = '';
                modalClosed = true;
            }
            if (contenidoGratuitoModal && contenidoGratuitoModal.style.display === 'flex') {
                contenidoGratuitoModal.style.display = 'none';
                formContenidoGratuito.reset();
                modalClosed = true;
            }
            if (modalClosed) document.body.classList.remove('modal-open');
        }
    });

    const navMenuSection = document.querySelector('.nav-menu-section');
    const menu = document.querySelector('.menu');

    if (navMenuSection && menu) {
        const menuOffsetTop = navMenuSection.offsetTop;
        let menuPlaceholder = null;
        function handleScrollAndResize() {
            if (window.innerWidth >= 1024) {
                if (window.scrollY >= menuOffsetTop) {
                    if (!menuPlaceholder) {
                        menuPlaceholder = document.createElement('div');
                        menuPlaceholder.style.height = navMenuSection.offsetHeight + 'px';
                        navMenuSection.parentNode.insertBefore(menuPlaceholder, navMenuSection);
                    }
                    navMenuSection.style.position = 'fixed';
                    navMenuSection.style.top = '0';
                    navMenuSection.style.width = '100%';
                    navMenuSection.style.zIndex = '9999';
                } else {
                    navMenuSection.style.position = 'static';
                    navMenuSection.style.top = '';
                    navMenuSection.style.width = '';
                    navMenuSection.style.zIndex = '';
                    if (menuPlaceholder) {
                        navMenuSection.parentNode.removeChild(menuPlaceholder);
                        menuPlaceholder = null;
                    }
                }
            } else {
                navMenuSection.style.position = 'static';
                navMenuSection.style.top = '';
                navMenuSection.style.width = '';
                navMenuSection.style.zIndex = '';
                if (menuPlaceholder) {
                    navMenuSection.parentNode.removeChild(menuPlaceholder);
                    menuPlaceholder = null;
                }
            }
        }
        handleScrollAndResize();
        window.addEventListener('scroll', handleScrollAndResize);
        window.addEventListener('resize', handleScrollAndResize);
    }
});