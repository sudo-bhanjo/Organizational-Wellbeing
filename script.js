document.addEventListener("DOMContentLoaded", function () {
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