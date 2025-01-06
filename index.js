import flashcards from "./QuestionJs/QuesitonS3.js";

/**
 * fonction qui va renvoyer un tableau de flashcards mélangées
 */
function shuffleFlashcards() {
    let flashcardsArray = flashcards.flashcards;
    let shuffledArray = flashcardsArray.sort(() => Math.random() - 0.5);
    return shuffledArray;
}

let questionSelected = true;

let card_question_p = document.getElementById("card_question_p");
let card_answer_p = document.getElementById("card_answer_p");
let card = document.querySelector(".card");

let shuffledFlashcards = shuffleFlashcards();
let indexCard = 0;

console.log(shuffledFlashcards);

card_question_p.innerHTML = shuffledFlashcards[indexCard].question;
card_answer_p.innerHTML = shuffledFlashcards[indexCard].answer;
card_answer_p.style.display = "none";

// quand on clique sur la div de class card
card.addEventListener("click", function () {

    // on fait une courte animation sur la div card qui rétrécit et s'agrandit
    
    console.log("click");
    if (questionSelected) {
        card_question_p.style.display = "none";
        card_answer_p.style.display = "block";
        questionSelected = false;
    } else {
        card_question_p.style.display = "block";
        card_answer_p.style.display = "none";
        questionSelected = true;
        // on passe à la question suivante si il y en a une
        if (indexCard < shuffledFlashcards.length - 1) {
            indexCard++;
            card_question_p.innerHTML = shuffledFlashcards[indexCard].question;
            card_answer_p.innerHTML = shuffledFlashcards[indexCard].answer;
        } else {
            // on mélange les flashcards
            shuffledFlashcards = shuffleFlashcards();
            indexCard = 0;
            card_question_p.innerHTML = shuffledFlashcards[indexCard].question;
            card_answer_p.innerHTML = shuffledFlashcards[indexCard].answer;
        }
    }
    console.log("index : ", indexCard);
});