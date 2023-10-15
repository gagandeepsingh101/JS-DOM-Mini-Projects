let modalOpener=document.querySelector(".modal-opener");
let modalCloser=document.querySelector(".modal-closer");
let modalScreen=document.querySelector(".modal-bg");

modalOpener.addEventListener("click",() => {
   modalScreen.classList.add("modal-bg-view"); 
});

modalCloser.addEventListener("click",() => {
    modalScreen.classList.remove("modal-bg-view"); 
});