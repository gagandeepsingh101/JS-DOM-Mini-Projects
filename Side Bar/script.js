let menu = document.querySelector(".menu-btn");
let close = document.querySelector(".close");
let leftbar = document.querySelector(".left");
menu.addEventListener("click", () => {
    leftbar.classList.add("show-sidebar");
});
close.addEventListener("click", () => {
    leftbar.classList.remove("show-sidebar");
});
