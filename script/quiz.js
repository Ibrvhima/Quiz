"use strict";

const moonIcon = document.getElementById("moon-icon");
const sunIcon = document.getElementById("sun-icon");

//creation des son des clic
const correctSound = new Audio("./sounds/Success-sound-effect.mp3");
const incorrectSound = new Audio("./sounds/Error-message-sound-effect.mp3");
const levelEnd = new Audio("./sounds/level-completed.mp3");
const clickSound = new Audio("./sounds/button-click.mp3");

moonIcon.addEventListener("click", () => {
  document.body.classList.add("dark");
  moonIcon.classList.add("hidden");
  sunIcon.classList.remove("hidden");
});

sunIcon.addEventListener("click", () => {
  document.body.classList.remove("dark");
  sunIcon.classList.add("hidden");
  moonIcon.classList.remove("hidden");
  container.classList.remove("drak");
});
//declarations des variables
let currentQuestion = 0;
let score = 0;

//Recuperation du container
const container = document.querySelector(".section_container");

// Function pour affichage de question
function displayeQuetions() {
  const question = questions[currentQuestion];

  const isImage =
    typeof question.question === "string" &&
    (question.question.endsWith(".png") ||
      question.question.endsWith(".jpg") ||
      question.question.endsWith(".jpeg"));

  container.innerHTML = `<h1 class="quiz_title"> <span><ion-icon name="logo-javascript"></ion-icon></span> JavaScript Quiz</h1>
  <p class="conteur"> ${currentQuestion + 1}/${questions.length} </p>
    ${
      isImage
        ? `<img class="question-image" src="${question.question}" alt="Question Image">`
        : `<p class="question">${question.question}</p>`
    }
     ${question.reponses
       .map(
         (rep, index) =>
           `<button class="reponse" data-index = "${index}">${rep}</button>`
       )
       .join("")}
     `;

  //ajout d'ecouteur d'evennement aux bouttons
  const bouttons = document.querySelectorAll(".reponse");
  bouttons.forEach((button) => {
    button.addEventListener("click", () => {
      clickSound.play();
      const positionReponse = parseInt(button.getAttribute("data-index"));
      if (positionReponse === question.reponseCorrect) {
        button.style.backgroundColor = "green";
        button.style.color = "white";
        correctSound.play();
        score++;
      } else {
        button.style.backgroundColor = "red";
        button.style.color = "white";
        incorrectSound.play();
      }

      // Passage à la question suivante
      currentQuestion++;
      if (currentQuestion < questions.length) {
        setTimeout(() => {
          displayeQuetions();
        }, 800);
      } else {
        setTimeout(() => {
          levelEnd.play();
          container.innerHTML = `
                    <p class="results"> Quiz terminé! votre score est de</p>
                    <p class="conteur"> ${score}XP.</p>
                    <button class="reprendre"  onclick = restartQuiz()>Reprendre</button>`;
        }, 800);
      }
    });
  });
}

//REDERMARE LE QUIZ
function restartQuiz() {
  clickSound.play();
  currentQuestion = 0;
  score = 0;
  displayeQuetions();
}

displayeQuetions();
