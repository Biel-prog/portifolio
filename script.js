document.addEventListener('DOMContentLoaded', function() {
    // ---- EFEITO DE DIGITAÇÃO ----
    const el = document.getElementById('typing-effect');
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

    // ---- ANIMAÇÃO AO ROLAR ----
    const sections = document.querySelectorAll('main section');

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

    // ---- MENU HAMBÚRGUER ----
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navLinks = document.getElementById('nav-links');

    if (hamburgerBtn && navLinks) { // Verifica se os elementos existem
        hamburgerBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active'); // Adiciona ou remove a classe .active

            // Mudar o ícone para 'X' quando o menu está aberto
            const icon = hamburgerBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times'); // Ícone de fechar (X)
                hamburgerBtn.setAttribute('aria-label', 'Fechar menu');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars'); // Ícone de barras (hambúrguer)
                hamburgerBtn.setAttribute('aria-label', 'Abrir menu');
            }
        });

        // Fechar o menu ao clicar em um link 
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