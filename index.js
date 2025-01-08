import flashcardsGE28S1 from "./QuestionJs/GE28/QuestionS1.js";
import flashcardsGE28S2 from "./QuestionJs/GE28/QuestionS2.js";
import flashcardsGE28S3 from "./QuestionJs/GE28/QuestionS3.js";

import flashcardsNF16S2 from "./QuestionJs/NF16/QuestionNF16S2.js";
import flashcardsNF16S3 from "./QuestionJs/NF16/QuestionNF16S3.js";

import flashcardsNF16S7 from "./QuestionJs/NF16/QuestionNF16S7.js";
import flashcardsNF16S8 from "./QuestionJs/NF16/QuestionNF16S8.js";


// Définir les flashcards pour chaque cours et les rendre globales
const flashcards = {
  GE28: {
    S1: flashcardsGE28S1,
    S2: flashcardsGE28S2,
    S3: flashcardsGE28S3,
  },
  NF16: {
    S2: flashcardsNF16S2,
    S3: flashcardsNF16S3,
    S7: flashcardsNF16S7,
    S8: flashcardsNF16S8,
  },
};

// Récupérer le conteneur pour les cours
const chooseCourseContainer = document.getElementById('choose_course_container');

// Liste des cours à ajouter dynamiquement
const courses = [
  { id: 'GE28', name: 'GE28' },
  { id: 'NF16', name: 'NF16' },
];

// Générer dynamiquement les boutons pour chaque cours
courses.forEach(course => {
  const button = document.createElement('button');
  button.textContent = course.name; // Texte affiché sur le bouton
  button.onclick = () => initializeCourse(course.id); // Ajouter l'action onclick
  chooseCourseContainer.appendChild(button); // Ajouter le bouton au conteneur
});

// Fonction pour initialiser un cours
function initializeCourse(courseId) {
  console.log(`Cours sélectionné : ${courseId}`);

  // Masquer la section des choix de cours
  chooseCourseContainer.style.display = 'none';

  // Afficher les boutons de session correspondants au cours sélectionné
  const chooseSession = document.querySelector('.choose_session');
  chooseSession.style.display = 'flex';

  // Effacer les anciens boutons de session
  chooseSession.innerHTML = "";

  // Générer dynamiquement les boutons des sessions
  const sessions = flashcards[courseId];
  Object.keys(sessions).forEach(sessionKey => {
    const sessionButton = document.createElement('button');
    sessionButton.textContent = `COUR ${sessionKey.slice(1)}`; // Ex. "COUR 1", "COUR 2"
    sessionButton.onclick = () => initializeFlashcards(sessions[sessionKey]);
    chooseSession.appendChild(sessionButton);
  });
}

// Navigation pour revenir en arrière
let back_btn = document.getElementById("back_btn");
back_btn.addEventListener("click", function () {
  window.location.href = "index.html";
});

// Initialiser les flashcards d'une séance
function initializeFlashcards(sessionFlashcards) {
  let flashcards = sessionFlashcards;

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
  let chooseSession = document.querySelector('.choose_session');
  let questionPart = document.querySelector('.question_part');

  // Masquer la section des sessions
  chooseSession.style.display = 'none';

  let shuffledFlashcards = shuffleFlashcards();
  let indexCard = 0;

  card_question_p.innerHTML = shuffledFlashcards[indexCard].question;
  card_answer_p.innerHTML = shuffledFlashcards[indexCard].answer;
  card_answer_p.style.display = 'none';
  questionPart.style.display = 'flex';

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
