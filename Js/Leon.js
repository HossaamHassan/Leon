/* Up Down Arrow */
let btn = document.querySelector(".arrow");
window.onscroll = function () {
    if (window.scrollY >= 700) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};
btn.onclick = function () {
    window.scrollTo ({
        top : 0,
        behavior: "smooth",
    });
};