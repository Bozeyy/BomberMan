listeQuestions = [];
indexQuestion = 0;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// h1 d'id question
let question = document.getElementById('question');
// div d'id reponses
let reponses = document.getElementById('reponses');
// p d'id explication
let explication = document.getElementById('explication');
// h1 score de classe quiz_score
let score = document.querySelector('.quiz_score');
let points = 0;
let repondu = false;
let total = 0;
// p index question de class index_question
let index = document.querySelector('.index_question');


// fonction lancerQuiz
async function lancerQuiz(fichier) {
    console.log("lancerQuiz");
    // on commence par cacher la div de classe quiz
    document.querySelector('.choice_quiz').style.display = 'none';
    
    document.querySelector('.quiz_game').style.display = 'flex';

    console.log("questions");
    // Importer les questions depuis le fichier JavaScript
    let questions;
    try {
        questions = await import('../questionnaires/' + fichier);
        questions = questions.default; // Since import returns a module object
    } catch (error) {
        console.error('Erreur lors du chargement du fichier:', error);
        return;
    }

    listeQuestions = questions;
    indexQuestion = -1;

    // on mélange les questions
    listeQuestions = shuffle(listeQuestions);
    // pour chaque question on mélange les réponses
    listeQuestions.forEach(question => {
        question.Reponses = shuffle(question.Reponses);
    });

    total = listeQuestions.length;
    points = 0;
    score.innerHTML = "Score : "+ points + '/' + total;


    // on affiche la taille du tableau
    console.log(listeQuestions.length);

    nextQuestion();
}

function nextQuestion() {
    repondu = false;
    explication.innerHTML = '';
    if (indexQuestion + 1 < listeQuestions.length) {
        indexQuestion++;
        index.innerHTML = 'Question ' + (indexQuestion + 1) + '/' + total;
        question.innerHTML = listeQuestions[indexQuestion].question;
        reponses.innerHTML = '';
        // pour chaque reponse
        for (let i = 0; i < listeQuestions[indexQuestion].Reponses.length; i++) {
            // on crée un bouton
            let button = document.createElement('button');
            // on lui donne le texte de la reponse
            button.innerHTML = listeQuestions[indexQuestion].Reponses[i];
            // on lui donne une classe
            button.classList.add('btn');
            // on lui donne un id
            button.id = 'reponse' + i;
            // on lui donne un onclick
            button.onclick = function() { checkAnswer(i) };
            // on l'ajoute à la div reponses
            reponses.appendChild(button);
        }
    }
}

function checkAnswer(index) {
    const correct = listeQuestions[indexQuestion].BonneReponse;
    if (listeQuestions[indexQuestion].Reponses[index] === correct) {
        // on met le fond de html en vert pendant 1 seconde
        document.body.style.backgroundColor = 'green';        
        setTimeout(() => {
            document.body.style.backgroundColor = 'white';
        }, 1000);
        if (!repondu) {
            points++;
            repondu = true;
            score.innerHTML = "Score : "+ points + '/' + total;
        }
    } else {
        // on met le fond de html en rouge pendant 1 seconde
        document.body.style.backgroundColor = 'red';
        setTimeout(() => {
            document.body.style.backgroundColor = 'white';
        }, 1000);
        if (!repondu) {
            repondu = true;
        }
    }
    explication.innerHTML = listeQuestions[indexQuestion].Explication;    
}

function showBtn(cls) {
    document.querySelectorAll(".quiz_btn").forEach(btn => {
        btn.style.display = 'none';
    });
    document.querySelectorAll("."+cls).forEach(btn => {
        btn.style.display = 'flex';
    });
    document.querySelector(".quiz").style.display = 'grid';
}

function showMatiere(classMatiere) {
    document.querySelectorAll(".choix_matiere").forEach(matiere => {
        matiere.style.display = 'none';
    });
    document.querySelector("."+classMatiere).style.display = 'flex';
}

function showMenu() {
    document.querySelectorAll(".choix_matiere").forEach(matiere => {
        matiere.style.display = 'grid';
    });
    
    document.querySelectorAll(".choix_cours").forEach(cours => {
        cours.style.display = 'none';
    });
    document.querySelectorAll(".quiz_btn").forEach(btn => {
        btn.style.display = 'none';
    });
    document.querySelector(".quiz_game").style.display = 'none';

    document.querySelectorAll(".choix_matiere_btn").forEach(quiz => {
        quiz.style.display = 'block';
    });

    document.querySelector('.choice_quiz').style.display = 'block';
}