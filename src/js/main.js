import "../../node_modules/focus-visible/dist/focus-visible"
import "../scss/main.scss";
import html from "../index.html";
import "../library/gsap/gsap.min.js";
import "../library/gsap/ScrollTrigger.min.js";
import "../library/gsap/ScrollSmoother.min.js";

document.addEventListener('scroll', () => {
    document.body.style.setProperty(`--scrollTop`, `${window.scrollY}px`);
});

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content'
});

