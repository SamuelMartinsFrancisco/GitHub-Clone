const REPO_AREA = document.querySelector('aside');

function executeAll() {
    repoAreaPositionOnScroll();
}

function repoAreaPositionOnScroll() {
    document.addEventListener('scroll', (event) => {
        let scrollPosition = window.scrollY;

        REPO_AREA.style.position = scrollPosition > 0 ? 'fixed' : 'relative';
        REPO_AREA.style.height = scrollPosition > 0 ? '100%' : '';
        REPO_AREA.style.width = scrollPosition > 0 ? 'clamp(283px, calc(227px + 6.4vw), 350px)' : '';
    });
}

executeAll();