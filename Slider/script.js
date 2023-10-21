let nextButton =document.querySelector("#next-btn");
let prevButton =document.querySelector("#prev-btn");
let slides =document.querySelectorAll(".slide");

let counter = 0;
nextButton.addEventListener("click", ()=>{
counter++;
carousal();
});

prevButton.addEventListener("click", ()=>{
counter--;
carousal();
});

function carousal() {
    if (counter<0) {
        counter = 0;
    }
    if (counter<slides.length-1) {
        nextButton.style.display = "block";
    } else {
        nextButton.style.display = "none";
    }

    if (counter===0) {
        prevButton.style.display = "none";
    } else {
        prevButton.style.display = "block";
    }
    slides.forEach(slide=>{
        slide.style.transform =`translateX(-${counter*100}%)`;
    })
}