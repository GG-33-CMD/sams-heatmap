document.addEventListener('DOMContentLoaded', function() {
    var dropdown = document.querySelector('.dropdown');
    var menuButton = document.getElementById('menu-button');
    var navMenu = document.getElementById('nav-menu');

    dropdown.addEventListener('mouseenter', function() {
        this.querySelector('.dropdown-menu').style.display = 'block';
    });
    dropdown.addEventListener('mouseleave', function() {
        this.querySelector('.dropdown-menu').style.display = 'none';
    });

    menuButton.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
});
