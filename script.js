// Scroll Reveal — adds .visible when .reveal enters viewport
function handleReveal() {
    document.querySelectorAll('.reveal').forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', handleReveal, { passive: true });
window.addEventListener('load', handleReveal);
handleReveal();
