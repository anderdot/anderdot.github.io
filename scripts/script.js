document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.getElementById('burgerButton');
    const navList = document.querySelector('.nav-list');
    const sectionContainer = document.querySelector('.sections');
    const sections = sectionContainer.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-list a');

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

    function updateStyles() {
        const scrollbarStyle = document.getElementById('scrollbarStyle');
        const shouldRemoveStyle = window.innerWidth < 767;

        scrollbarStyle.innerHTML = shouldRemoveStyle ? '' : '::-webkit-scrollbar { width: 8px; }';
    }

    function highlightCurrentSection() {
        sections.forEach(function (section) {
            var rect = section.getBoundingClientRect();
            if (rect.bottom > 0 && rect.top < window.innerHeight) {
                navItems.forEach(function (navItem) {
                    navItem.classList.remove('active');
                });

                navItems.forEach(function (navItem) {
                    if (navItem.getAttribute('href') === '#' + section.id) {
                        navItem.classList.add('active');
                    } else {
                        navItem.classList.remove('active');
                    }
                });
            }
        });
    }

    updateStyles();
    sectionContainer.addEventListener('scroll', highlightCurrentSection);
    window.addEventListener('load', highlightCurrentSection);
    window.addEventListener('resize', updateStyles);
    window.addEventListener('resize', highlightCurrentSection);
    window.addEventListener('orientationchange', highlightCurrentSection);
});
