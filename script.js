document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".first", {
        scrollTrigger: {
            trigger: ".first",
            markers: false,
            start: "top top",
            end: "top top",
            scrub: 0,
        },
        opacity: 1,
    });
    gsap.to(".second", {
        scrollTrigger: {
            trigger: ".second",
            markers: false,
            start: "top top",
            end: "top top",
            scrub: 0,
        },
        opacity: 1,
    });
    gsap.to(".third", {
        scrollTrigger: {
            trigger: ".third",
            markers: false,
            start: "top top",
            end: "top top",
            scrub: 0,
        },
        opacity: 1,
    });
    gsap.to(".forth", {
        scrollTrigger: {
            trigger: ".forth",
            markers: false,
            start: "top top",
            end: "top top",
            scrub: 0,
        },
        opacity: 1,
    });
});