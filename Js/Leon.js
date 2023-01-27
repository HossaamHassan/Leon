let toTop = document.querySelector(".arrow");
window.onscroll = function () {
    if (this.scrollY >= 700) {
        toTop.classList.add("show");
    } else {
        toTop.classList.remove("show");
    }
};
toTop.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};