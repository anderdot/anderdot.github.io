document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.getElementById('burgerButton');
    const navList = document.querySelector('.nav-list');

    burgerMenu.addEventListener('click', function () {
        toggleMenu();
        toggleBurgerIcon();
    });

    document.querySelectorAll('.nav-list a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));
            targetSection.scrollIntoView({ behavior: 'smooth' });
            navList.classList.remove('show');
            toggleBurgerIcon();
        });
    });

    function toggleMenu() {
        navList.classList.toggle('show');
    }

    function toggleBurgerIcon() {
        burgerMenu.classList.toggle('close');
        burgerMenu.innerHTML = burgerMenu.classList.contains('close') ? '&#10005;' : '&#9776;';
    }

    window.addEventListener('resize', updateStyles);

    function updateStyles() {
        const scrollbarStyle = document.getElementById('scrollbarStyle');
        const shouldRemoveStyle = window.innerWidth < 767;

        scrollbarStyle.innerHTML = shouldRemoveStyle ? '' : '::-webkit-scrollbar { width: 8px; }';
    }

    updateStyles();
});
