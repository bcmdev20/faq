const faqContainer = document.querySelectorAll(".faq .question-container");

faqContainer.forEach((question) => {
  question.addEventListener("click", function () {
    const plus = this.querySelector(".plus");
    const minus = this.querySelector(".minus");
    const answer = this.nextElementSibling;
    answer.classList.toggle("show");

    plus.classList.toggle("hidden");
    minus.classList.toggle("show");
  });
});
