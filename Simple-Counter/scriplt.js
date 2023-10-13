let increasebtn = document.querySelector("#ctrl-btn #inc");
let decreasebtn = document.querySelector("#ctrl-btn #dec");
let resetbtn = document.querySelector("#ctrl-btn #reset");
let counterText = document.querySelector("#counter-sec h2");
let value = 0;
increasebtn.addEventListener("click", () => {
  value = value + 1;
  counterText.innerHTML = value;
  if (value > 0) counterText.style.color = "green";
  else if (value === 0) counterText.style.color = "black";
});
decreasebtn.addEventListener("click", () => {
  value = value - 1;
  counterText.innerHTML = value;
  if (value < 0) counterText.style.color = "red";
  else if (value === 0) counterText.style.color = "black";
});
resetbtn.addEventListener("click", () => {
  value = 0;
  counterText.innerHTML = value;
  counterText.style.color="black";
});
