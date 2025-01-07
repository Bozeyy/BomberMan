import flashcardsS1 from "./QuestionJs/QuestionS1.js";
import flashcardsS2 from "./QuestionJs/QuestionS2.js";
import flashcardsS3 from "./QuestionJs/QuestionS3.js";

window.flashcardsS1 = flashcardsS1;
window.flashcardsS2 = flashcardsS2;
window.flashcardsS3 = flashcardsS3;

// Organisation des cours et séances
const courses = {
  GE28: {
    sessions: [flashcardsS1, flashcardsS2, flashcardsS3],
    sessionNames: ["COUR 1", "COUR 2", "COUR 3"],
  },
};

// Navigation pour revenir en arrière
let back_btn = document.getElementById("back_btn");
back_btn.addEventListener("click", function () {
  window.location.href = "index.html";
});

// Initialiser un cours
function initializeCourse(courseName) {
  const course = courses[courseName];
  if (!course) return;

  const chooseCourse = document.querySelector(".choose_course");
  const chooseSession = document.querySelector(".choose_session");
  chooseCourse.style.display = "none";
  chooseSession.style.display = "block";

  // Assigner les séances dynamiquement
  course.sessionNames.forEach((name, index) => {
    const sessionButton = document.getElementById(`session_btn_${index + 1}`);
    sessionButton.innerHTML = name;
    sessionButton.onclick = () => initializeFlashcards(course.sessions[index]);
  });
}

// Initialiser les flashcards d'une séance
function initializeFlashcards(courses) {
  let flashcards = courses;

  function shuffleFlashcards() {
    let shuffledFlashcards = flashcards.flashcards;
    for (let i = shuffledFlashcards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = shuffledFlashcards[i];
      shuffledFlashcards[i] = shuffledFlashcards[j];
      shuffledFlashcards[j] = temp;
    }
    return shuffledFlashcards;
  }

  let questionSelected = true;
  let card_question_p = document.getElementById("card_question_p");
  let card_answer_p = document.getElementById("card_answer_p");
  let card = document.querySelector(".card");
  let chooseSession = document.querySelector(".choose_session");
  let questionPart = document.querySelector(".question_part");

  let shuffledFlashcards = shuffleFlashcards();
  let indexCard = 0;

  card_question_p.innerHTML = shuffledFlashcards[indexCard].question;
  card_answer_p.innerHTML = shuffledFlashcards[indexCard].answer;
  card_answer_p.style.display = "none";
  chooseSession.style.display = "none";
  questionPart.style.display = "flex";

  card.addEventListener("click", function () {
    if (questionSelected) {
      card_question_p.style.display = "none";
      card_answer_p.style.display = "block";
      questionSelected = false;
    } else {
      card_question_p.style.display = "block";
      card_answer_p.style.display = "none";
      questionSelected = true;

      if (indexCard < shuffledFlashcards.length - 1) {
        indexCard++;
        card_question_p.innerHTML = shuffledFlashcards[indexCard].question;
        card_answer_p.innerHTML = shuffledFlashcards[indexCard].answer;
      } else {
        shuffledFlashcards = shuffleFlashcards();
        indexCard = 0;
        card_question_p.innerHTML = shuffledFlashcards[indexCard].question;
        card_answer_p.innerHTML = shuffledFlashcards[indexCard].answer;
      }
    }
  });
}

// Rendre les fonctions globales
window.initializeCourse = initializeCourse;
window.initializeFlashcards = initializeFlashcards;
