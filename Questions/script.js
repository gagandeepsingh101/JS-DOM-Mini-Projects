let allItem = Array.from(document.querySelectorAll(".gen-ques"));

allItem.forEach((item) => {
  let showAnswerBtn = item.querySelector(".hide-answer");

  showAnswerBtn.addEventListener("click", () => {
    let answer = item.querySelector(".answer");

    if (answer.classList.contains("showAnswer")) {
      showAnswerBtn.innerHTML = `<i class="ri-add-box-line "></i>`;
      answer.classList.remove("showAnswer");
    } else {
      showAnswerBtn.innerHTML = `<i class="ri-checkbox-indeterminate-line"></i>`;
      answer.classList.add("showAnswer");
    }
  });
});
