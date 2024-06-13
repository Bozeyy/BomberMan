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

    // on affiche la taille du tableau
    console.log(listeQuestions.length);

    nextQuestion();
}

function nextQuestion() {
    explication.innerHTML = '';
    if (indexQuestion + 1 < listeQuestions.length) {
        indexQuestion++;
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
    } else {
        // on met le fond de html en rouge pendant 1 seconde
        document.body.style.backgroundColor = 'red';
        setTimeout(() => {
            document.body.style.backgroundColor = 'white';
        }, 1000);
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
}