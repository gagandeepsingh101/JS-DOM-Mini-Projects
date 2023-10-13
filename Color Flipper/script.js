let bgChanger = document.querySelector("#main button");
let bgText = document.querySelector("#main h1 span");
let bg = document.querySelector("#main");

function getRandomColor(){
    let code="123456789ABCDEF";
    let color="#";
    for (let i = 0; i < 6; i++) {
        color += code[Math.floor(Math.random()*15)]        
    }
    return color;
}
function setRandomColor(randomColor){
    bg.style.backgroundColor = randomColor;
    bgText.textContent=randomColor;
}
bgChanger.addEventListener("click",()=>{
    let randomColor=getRandomColor();
    setRandomColor(randomColor);
});
setRandomColor(getRandomColor());