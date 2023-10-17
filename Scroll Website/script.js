let menutoggle = document.querySelector(".nav-toggle");
let navLinkList = document.querySelector(".navbar ul");
menutoggle.addEventListener("click", () => {
  navLinkList.classList.toggle("show-nav");
});
let alllinks = document.querySelectorAll(".scroll-links")
alllinks.forEach(link => {
    link.addEventListener("click", () => {
        if (navLinkList.classList.contains("show-nav")) {
            navLinkList.classList.remove("show-nav");
        }
    });
})

// fixed navbar on scrolling
let navbar = document.querySelector(".navbar");
window.addEventListener("scroll", function () {
  let navbarHeight = navbar.getBoundingClientRect().height;
  if (window.scrollY > navbarHeight + 250) {
    navbar.classList.add("fixed-navbar");
  } else {
    navbar.classList.remove("fixed-navbar");
  }
});

