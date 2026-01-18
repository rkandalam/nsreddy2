document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-link');
    let currentPage = window.location.pathname.split('/').pop();
    currentPage = currentPage.replace('.html', '') || 'home';

    links.forEach(link => {
        if (link.dataset.page === currentPage) {
            link.classList.add('active');
        }
    });
});
