document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            if (navbarCollapse.classList.contains('show')) {
                new bootstrap.Collapse(navbarCollapse).hide();
            }
        });
    });
    
    const slider = tns({
        container: "#hero-slider",
        items: 1,
        slideBy: "page",
        autoplay: true,
        autoplayTimeout: 5000,
        controls: false,
        nav: true,
        autoplayButtonOutput: false,
        mouseDrag: true,
        loop: true,
    });
});