let preloader=document.querySelector('.pre-loader');
window.addEventListener("load", ()=>{
 setTimeout(() => {
        preloader.style.display="none";    
 }, 1000);
})

let slideSwitch = document.querySelector(".switch");
let switchBtn = document.querySelector(".video-controller")
let video=document.querySelector(".video-container video");
switchBtn.addEventListener("click",()=>{
    if(slideSwitch.classList.contains("slider")){
        slideSwitch.classList.remove("slider");
        video.play();
    }
    else{
        slideSwitch.classList.add("slider");
        video.pause();
    }
});