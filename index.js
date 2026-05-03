// const questions = document.querySelectorAll(".question-container");
// const answers = document.querySelectorAll(".answer-container");

// const plus = document.querySelectorAll(".plus");
// const minus = document.querySelectorAll(".minus");

// questions.forEach((questions) => {
//   questions.addEventListener("click", () => {
//     answers.forEach((answers) => {
//       answers.classList.toggle("show");
//     });
//     plus.forEach((plus) => {
//       plus.classList.toggle("hidden");
//     });
//     minus.forEach((minus) => {
//       minus.classList.toggle("show");
//     });
//   });
// });

// const answers = document.querySelectorAll(".answer-container");
// const plus = document.querySelectorAll(".plus");
// const minus = document.querySelectorAll(".minus");

// questions.forEach((questions) => {
//   questions.addEventListener("click", () => {
//     answers.forEach((answers) => {
//       answers.classList.toggle("hidden");
//     });
//     plus.forEach((plus) => {
//       plus.classList.toggle("hidden");
//     });
//     minus.forEach((minus) => {
//       minus.classList.add("hidden");
//     });
//   });
// });

// const questions = document.querySelectorAll(".question-container");

// questions.forEach((question) => {
//   const plus = question.querySelector(".plus");
//   const minus = question.querySelector(".minus");
//   const answer = question.nextElementSibling;  // La réponse juste après chaque question

//   question.addEventListener("click", () => {
//     // Ferme toutes les réponses
//     document.querySelectorAll(".answer-container").forEach((ans) => {
//       if (ans !== answer) {  // Si ce n'est pas la réponse de la question cliquée, on la cache
//         ans.classList.remove("show");
//       }
//     });

//     // Cache tous les "plus" et affiche tous les "minus" sauf celui de la question cliquée
//     document.querySelectorAll(".plus").forEach((icon) => {
//       if (icon !== plus) {
//         icon.classList.remove("hidden");
//       }
//     });

//     document.querySelectorAll(".minus").forEach((icon) => {
//       if (icon !== minus) {
//         icon.classList.add("hidden");
//       }
//     });

//     // Affiche ou cache la réponse spécifique à la question cliquée
//     answer.classList.toggle("show");

//     // Change les icônes
//     plus.classList.toggle("hidden");
//     minus.classList.toggle("show");
//   });
// });

const faqContainer = document.querySelectorAll(".faq .question-container");

faqContainer.forEach((question) => {
  question.addEventListener("click", function () {
    const plus = this.querySelector(".plus");
    const minus = this.querySelector(".minus");
    const answer = this.nextElementSibling;
    answer.classList.toggle("show");

    plus.classList.toggle("hidden");
    minus.classList.toggle("show-icon");
  });
});
