document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.getElementById('burgerButton');
    const navList = document.querySelector('.nav-list');

    burgerMenu.addEventListener('click', function () {
        navList.classList.toggle('show');
        toggleBurgerIcon();
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            navList.classList.remove('show');
            toggleBurgerIcon();
        });
    });

    function toggleBurgerIcon() {
        burgerMenu.classList.toggle('close');
        burgerMenu.innerHTML = burgerMenu.classList.contains('close') ? '&#10005;' : '&#9776;';
    }
});
