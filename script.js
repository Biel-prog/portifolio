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

});