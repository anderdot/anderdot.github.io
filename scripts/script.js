document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.getElementById('burgerButton');
    const navList = document.querySelector('.nav-list');
    const sectionContainer = document.querySelector('.sections');
    const sections = sectionContainer.querySelectorAll('section');

    burgerMenu.addEventListener('click', toggleMenu);
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', scrollToSection);
    });

    function toggleMenu() {
        navList.classList.toggle('show');
        toggleBurgerIcon();
    }

    function scrollToSection(e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth' });
        navList.classList.remove('show');
        toggleBurgerIcon();
    }

    function toggleBurgerIcon() {
        burgerMenu.classList.toggle('close');
        burgerMenu.innerHTML = burgerMenu.classList.contains('close') ? '&#10005;' : '&#9776;';
    }

    function getBackgroundColor() {
        sections.forEach(function (section) {
            var rect = section.getBoundingClientRect();

            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                var backgroundColor = window.getComputedStyle(section).backgroundColor;
                document.documentElement.style.setProperty('--bg-active', backgroundColor);
                return;
            }
        });
    }

    sectionContainer.addEventListener('scroll', getBackgroundColor);
    window.addEventListener('scroll', getBackgroundColor);
    window.addEventListener('load', getBackgroundColor);
    window.addEventListener('resize', getBackgroundColor);
    window.addEventListener('orientationchange', getBackgroundColor);
});
