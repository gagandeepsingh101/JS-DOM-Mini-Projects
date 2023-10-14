// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class
let menu=document.querySelector(".menu-btn");
let navList=document.querySelector(".links");
menu.addEventListener("click",()=>{
    if (menu.classList.contains("menu-btn-open")) {
        menu.classList.remove("menu-btn-open");
        navList.classList.remove("open-links");
    }
    else{
        menu.classList.add("menu-btn-open");
        navList.classList.add("open-links");
    }
        
    
});