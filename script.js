document.addEventListener('DOMContentLoaded', function() {

    // ===================================
    // EFEITO DE DIGITAÇÃO NA HOME PAGE
    // ===================================
    const el = document.getElementById('typing-effect');
    if (el) { // Verifica se o elemento existe antes de prosseguir
        const text = "Olá, sou o Gabriel";
        const typeSpeed = 150;
        const eraseSpeed = 100;
        const delayAfterTyping = 2000;

        let charIndex = 0;

        function typeWriter() {
            if (charIndex < text.length) {
                el.textContent += text.charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, typeSpeed);
            } else {
                setTimeout(eraseText, delayAfterTyping);
            }
        }

        function eraseText() {
            if (el.textContent.length > 0) {
                el.textContent = el.textContent.substring(0, el.textContent.length - 1);
                setTimeout(eraseText, eraseSpeed);
            } else {
                charIndex = 0;
                setTimeout(typeWriter, typeSpeed);
            }
        }

        // Inicia o efeito pela primeira vez
        typeWriter();
    }

    // ===================================
    // ANIMAÇÃO AO ROLAR (FADE-IN SECTIONS)
    // ===================================
    const sections = document.querySelectorAll('main section');
    if (sections.length > 0) { // Verifica se há seções para observar
        const options = {
            root: null,
            threshold: 0.1,
            rootMargin: "0px"
        };

        const observer = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        sections.forEach(section => {
            observer.observe(section);
        });
    }

    // ===================================
    // FUNCIONALIDADE DO MENU HAMBÚRGUER
    // ===================================
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navLinks = document.getElementById('nav-links');

    if (hamburgerBtn && navLinks) { // Verifica se ambos os elementos existem
        hamburgerBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');

            const icon = hamburgerBtn.querySelector('i');
            const isOpen = navLinks.classList.contains('active');

            if (isOpen) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
                hamburgerBtn.setAttribute('aria-label', 'Fechar menu');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                hamburgerBtn.setAttribute('aria-label', 'Abrir menu');
            }
        });

        // Fecha o menu ao clicar em um link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    // Resetar ícone do botão
                    const icon = hamburgerBtn.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                    hamburgerBtn.setAttribute('aria-label', 'Abrir menu');
                }
            });
        });
    }

});