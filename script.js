document.addEventListener("DOMContentLoaded", () => {
    AOS.init({ duration: 1000, once: false });
    new Swiper(".swiper-container", {
        loop: true,
        autoplay: { delay: 5000 },
        pagination: { el: ".swiper-pagination", clickable: true }
    });
    gsap.from(".hero-content h1", {
        duration: 1.2,
        y: -50,
        opacity: 0,
        ease: "power2.out"
    });
    document.querySelectorAll(".btn").forEach(btn => {
        btn.addEventListener("click", () => {
            gsap.fromTo(btn, { scale: 1 }, { scale: 0.9, duration: 0.1, yoyo: true, repeat: 1 });
        });
    });
});
