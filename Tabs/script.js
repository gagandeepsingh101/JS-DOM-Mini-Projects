let allTab=Array.from(document.querySelectorAll(".tab-links li"));
let contentArea=Array.from(document.querySelectorAll(".content"));
allTab.forEach(tab=>{
    let link=tab.querySelector("a");
    link.addEventListener("click",()=>{
        let currentcontent=document.querySelector(`${link.getAttribute("href")}`);
        allTab.forEach( tab=> {
            tab.classList.add("active-tab");
            tab.classList.add("tab-hover");
        });
        contentArea.forEach(allcontentArea=>{
            allcontentArea.classList.remove("active-content");
        })
        currentcontent.classList.add("active-content");
        tab.classList.remove("active-tab");
        tab.classList.remove("tab-hover");
    })
})