let questions = [
    {
        "question": "Quelle est la méthode de recueil d'informations qui implique l'observation et l'enregistrement des utilisateurs se servant du système ?",
        "Reponses": ["Observation directe", "Entretiens", "Questionnaires", "Espionnage"],
        "BonneReponse": "Observation directe",
        "Explication": "L'observation directe consiste à observer et enregistrer les utilisateurs se servant du système."
    },
    {
        "question": "Quelle méthode de recueil d'informations utilise des questions ouvertes et dirigées pour obtenir l'opinion de l'utilisateur ?",
        "Reponses": ["Entretiens", "Observation directe", "Questionnaires", "Espionnage"],
        "BonneReponse": "Entretiens",
        "Explication": "Les entretiens permettent d'obtenir l'opinion de l'utilisateur sur le système en posant des questions ouvertes et dirigées."
    },
    {
        "question": "Quel est l'objectif principal des questionnaires dans le recueil d'informations ?",
        "Reponses": ["Construire un résumé utile des avis de nombreux utilisateurs", "Observer les utilisateurs en action", "Enregistrer les actions des utilisateurs", "Organiser des activités pour générer des idées"],
        "BonneReponse": "Construire un résumé utile des avis de nombreux utilisateurs",
        "Explication": "Les questionnaires visent à construire un résumé utile des avis de nombreux utilisateurs."
    },
    {
        "question": "Quelle technique de recueil d'informations implique d'interroger à propos d'un événement marquant récent ?",
        "Reponses": ["Technique de l'incident critique", "Questionnaires", "Observation directe", "Espionnage"],
        "BonneReponse": "Technique de l'incident critique",
        "Explication": "La technique de l'incident critique consiste à interroger à propos d'un événement marquant récent."
    },
    {
        "question": "Quelle méthode de recueil d'informations permet de mémoriser les actions des utilisateurs avec leur autorisation ?",
        "Reponses": ["Espionnage logiciel", "Observation directe", "Entretiens", "Workshop"],
        "BonneReponse": "Espionnage logiciel",
        "Explication": "L'espionnage logiciel mémorise les actions des utilisateurs avec leur autorisation."
    },
    {
        "question": "Quelle méthode de recueil d'informations combine observation et entretiens ?",
        "Reponses": ["Observation directe", "Entretiens", "Questionnaires", "Espionnage"],
        "BonneReponse": "Observation directe",
        "Explication": "L'observation directe peut être combinée avec des entretiens pour obtenir des informations détaillées."
    },
    {
        "question": "Quelle approche de prototypage permet de tester une petite partie du système avec une fonctionnalité complète ?",
        "Reponses": ["Prototypage vertical", "Prototypage horizontal", "Scénario", "Magicien d'OZ"],
        "BonneReponse": "Prototypage vertical",
        "Explication": "Le prototypage vertical permet de tester une petite partie du système avec une fonctionnalité complète."
    },
    {
        "question": "Quelle approche de réalisation d'une application est décrite comme 'descendante' ?",
        "Reponses": ["MERISE, SADT, SART", "Cascade", "Spirale", "Agile"],
        "BonneReponse": "MERISE, SADT, SART",
        "Explication": "La méthode descendante est décrite par MERISE, SADT, et SART."
    },
    {
        "question": "Quelle méthode agile se base sur un cycle de développement centré sur le client ?",
        "Reponses": ["RAD", "MERISE", "SADT", "Cascade"],
        "BonneReponse": "RAD",
        "Explication": "La méthode RAD se base sur un cycle de développement centré sur le client avec une approche itérative."
    },
    {
        "question": "Quelle méthode implique l'utilisateur très tôt dans le processus de conception pour éviter des modifications importantes ?",
        "Reponses": ["Méthodes orientées IHM", "Méthodes agiles", "Méthodes orientées objets", "Méthode ascendante"],
        "BonneReponse": "Méthodes orientées IHM",
        "Explication": "Les méthodes orientées IHM impliquent l'utilisateur très tôt dans le processus de conception."
    },
    {
        "question": "Quelle est la technique de recueil d'informations qui implique des ateliers pour générer des idées et développer ensemble ?",
        "Reponses": ["Workshops", "Entretiens", "Observation directe", "Espionnage"],
        "BonneReponse": "Workshops",
        "Explication": "Les workshops rassemblent utilisateurs, responsables et concepteurs pour générer et développer des idées ensemble."
    },
    {
        "question": "Quel style de questions permet de classer les fonctions par ordre d'utilité ?",
        "Reponses": ["Classement", "Scalaire", "Choix multiple", "Questions ouvertes"],
        "BonneReponse": "Classement",
        "Explication": "Le style de questions de type 'Classement' permet de classer les fonctions par ordre d'utilité."
    },
    {
        "question": "Quelle approche de réalisation d'une application est représentée par une séquence linéaire avec des phases distinctes ?",
        "Reponses": ["Cascade", "Spirale", "Agile", "MERISE"],
        "BonneReponse": "Cascade",
        "Explication": "L'approche en cascade est représentée par une séquence linéaire avec des phases distinctes."
    },
    {
        "question": "Quelle technique de conception utilise des images et des sous-titres pour donner une vue d'ensemble de l'interaction ?",
        "Reponses": ["Storyboards", "Scénarios", "Brainstorming", "Magicien d'OZ"],
        "BonneReponse": "Storyboards",
        "Explication": "Les storyboards utilisent des images et des sous-titres pour donner une vue d'ensemble de l'interaction."
    },
    {
        "question": "Quelle méthode de recueil d'informations utilise une grille de saisie et un écran résultat ?",
        "Reponses": ["Communication Homme-Machine", "Questionnaires", "Observation directe", "Entretiens"],
        "BonneReponse": "Communication Homme-Machine",
        "Explication": "La communication Homme-Machine utilise une grille de saisie et un écran résultat pour effectuer une recherche."
    },
    {
        "question": "Quel principe de recueil d'informations consiste à enregistrer toutes les idées, y compris les idées stupides, sans évaluation initiale ?",
        "Reponses": ["Brainstorming", "Scénarios", "Workshops", "Magicien d'OZ"],
        "BonneReponse": "Brainstorming",
        "Explication": "Le brainstorming consiste à enregistrer toutes les idées, y compris les idées stupides, sans évaluation initiale."
    },
    {
        "question": "Quelle approche de réalisation d'une application se concentre sur des prototypes de plus en plus complets ?",
        "Reponses": ["RAD", "Cascade", "Spirale", "Agile"],
        "BonneReponse": "RAD",
        "Explication": "La méthode RAD se concentre sur des prototypes de plus en plus complets."
    },
    {
        "question": "Quelle méthode de conception permet d'interpréter les entrées de l'utilisateur et de contrôler le comportement du système sans réelle intelligence artificielle ?",
        "Reponses": ["Magicien d'OZ", "Storyboards", "Brainstorming", "Scénarios"],
        "BonneReponse": "Magicien d'OZ",
        "Explication": "La méthode du Magicien d'OZ permet d'interpréter les entrées de l'utilisateur et de contrôler le comportement du système sans réelle intelligence artificielle."
    },
    {
        "question": "Quelle méthode de recueil d'informations repose sur l'utilisation de questionnaires pour obtenir des informations des utilisateurs ?",
        "Reponses": ["Questionnaires", "Entretiens", "Observation directe", "Espionnage"],
        "BonneReponse": "Questionnaires",
        "Explication": "Les questionnaires reposent sur l'utilisation de questions pour obtenir des informations des utilisateurs."
    },
    {
        "question": "Quel style de questions offre des options prédéfinies parmi lesquelles l'utilisateur doit choisir ?",
        "Reponses": ["Choix multiple", "Questions ouvertes", "Classement", "Scalaire"],
        "BonneReponse": "Choix multiple",
        "Explication": "Les questions à choix multiple offrent des options prédéfinies parmi lesquelles l'utilisateur doit choisir."
    },
    {
        "question": "Quelle approche de réalisation d'une application suit une séquence de cycles itératifs ?",
        "Reponses": ["Spirale", "Cascade", "MERISE", "Agile"],
        "BonneReponse": "Spirale",
        "Explication": "L'approche en spirale suit une séquence de cycles itératifs."
    },
    {
        "question": "Quelle technique de conception consiste à demander aux utilisateurs de raconter des incidents critiques ?",
        "Reponses": ["Scénarios", "Storyboards", "Brainstorming", "Magicien d'OZ"],
        "BonneReponse": "Scénarios",
        "Explication": "La technique des scénarios consiste à demander aux utilisateurs de raconter des incidents critiques."
    },
    {
        "question": "Quel style de questions demande aux utilisateurs d'exprimer leur opinion sans choix prédéfinis ?",
        "Reponses": ["Questions ouvertes", "Choix multiple", "Classement", "Scalaire"],
        "BonneReponse": "Questions ouvertes",
        "Explication": "Les questions ouvertes demandent aux utilisateurs d'exprimer leur opinion sans choix prédéfinis."
    },
    {
        "question": "Quelle méthode de recueil d'informations est souvent utilisée pour recueillir des données quantitatives et qualitatives ?",
        "Reponses": ["Questionnaires", "Observation directe", "Entretiens", "Espionnage"],
        "BonneReponse": "Questionnaires",
        "Explication": "Les questionnaires sont souvent utilisés pour recueillir des données quantitatives et qualitatives."
    },
    {
        "question": "Quelle approche de réalisation d'une application est itérative et incrémentale, souvent utilisée dans le développement logiciel moderne ?",
        "Reponses": ["Agile", "Cascade", "Spirale", "MERISE"],
        "BonneReponse": "Agile",
        "Explication": "L'approche Agile est itérative et incrémentale, souvent utilisée dans le développement logiciel moderne."
    },
    {
        "question": "Quelle méthode de conception permet de tester une interface utilisateur sans réellement développer le système sous-jacent ?",
        "Reponses": ["Magicien d'OZ", "Storyboards", "Scénarios", "Brainstorming"],
        "BonneReponse": "Magicien d'OZ",
        "Explication": "La méthode du Magicien d'OZ permet de tester une interface utilisateur sans réellement développer le système sous-jacent."
    },
    {
        "question": "Quelle méthode de recueil d'informations est utile pour obtenir une vue d'ensemble du comportement des utilisateurs ?",
        "Reponses": ["Observation directe", "Questionnaires", "Entretiens", "Espionnage"],
        "BonneReponse": "Observation directe",
        "Explication": "L'observation directe est utile pour obtenir une vue d'ensemble du comportement des utilisateurs."
    },
    {
        "question": "Quelle méthode de recueil d'informations est bon marché mais offre peu de détails et peut être incomplète ?",
        "Reponses": ["Enregistrement papier", "Enregistrement audio", "Enregistrement vidéo", "Questionnaires"],
        "BonneReponse": "Enregistrement papier",
        "Explication": "L'enregistrement papier est bon marché mais offre peu de détails et peut être incomplète."
    },
    {
        "question": "Quelle méthode de recueil d'informations peut être effectuée en laboratoire ou sur le terrain et est utile pour identifier les gros problèmes ?",
        "Reponses": ["Observation directe", "Entretiens", "Questionnaires", "Espionnage"],
        "BonneReponse": "Observation directe",
        "Explication": "L'observation directe est importante pour identifier les gros problèmes et peut être effectuée en laboratoire ou sur le terrain."
    },
    {
        "question": "Quelle méthode de recueil d'informations consiste à poser des questions spécifiques et à recueillir des réponses de nombreux utilisateurs pour obtenir un résumé des avis ?",
        "Reponses": ["Questionnaires", "Entretiens", "Observation directe", "Espionnage"],
        "BonneReponse": "Questionnaires",
        "Explication": "Les questionnaires permettent de recueillir les réponses de nombreux utilisateurs pour construire un résumé des avis."
    }
];


export default questions;