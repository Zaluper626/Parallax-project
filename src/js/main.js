import "../../node_modules/focus-visible/dist/focus-visible"
import "../scss/main.scss";
import html from "../index.html";

document.addEventListener('scroll', e => {
    document.body.style.cssText = `--scrollTop: ${window.scrollY}px`;
});
