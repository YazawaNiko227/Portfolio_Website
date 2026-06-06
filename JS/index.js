const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('header nav');

if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    document.addEventListener('click', (event) => {
        if (!nav.contains(event.target) && !menuBtn.contains(event.target)) {
            nav.classList.remove('active');
        }
    });
}
