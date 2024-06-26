let questions = [
    {
        "question": "Quelle méthode de recueil d'informations implique le filtrage du courrier électronique selon Malone en 1986 ?",
        "Reponses": ["Information Lens", "Observation directe", "Entretiens", "Questionnaires"],
        "BonneReponse": "Information Lens",
        "Explication": "Information Lens est une méthode de filtrage du courrier électronique étudiée par Malone en 1986."
    },
    {
        "question": "Quel est l'objectif principal des questionnaires dans le recueil d'informations ?",
        "Reponses": ["Construire un résumé utile des avis de nombreux utilisateurs", "Observer les utilisateurs", "Enregistrer les actions des utilisateurs", "Analyser les données recueillies"],
        "BonneReponse": "Construire un résumé utile des avis de nombreux utilisateurs",
        "Explication": "Les questionnaires ont pour but de construire un résumé utile des avis de nombreux utilisateurs."
    },
    {
        "question": "Quel type de question est : 'Combien de messages avez-vous reçu aujourd'hui ?' ?",
        "Reponses": ["Question dirigée", "Question ouverte", "Question scalaire", "Question de classement"],
        "BonneReponse": "Question dirigée",
        "Explication": "La question 'Combien de messages avez-vous reçu aujourd'hui ?' est une question dirigée."
    },
    {
        "question": "Quel type de question est : 'Décrivez comment vous utilisez la messagerie' ?",
        "Reponses": ["Question ouverte", "Question dirigée", "Question scalaire", "Question de classement"],
        "BonneReponse": "Question ouverte",
        "Explication": "La question 'Décrivez comment vous utilisez la messagerie' est une question ouverte."
    },
    {
        "question": "Quelle technique de recueil d'informations demande aux utilisateurs de se souvenir d'un problème particulier récent ?",
        "Reponses": ["Technique de l'incident critique", "Observation directe", "Questionnaires", "Workshop"],
        "BonneReponse": "Technique de l'incident critique",
        "Explication": "La technique de l'incident critique demande aux utilisateurs de se souvenir d'un problème particulier récent."
    },
    {
        "question": "Quel est le pourcentage de sondés qui répondent 'Non' à la question Q1 sur l'accueil des migrants ?",
        "Reponses": ["75%", "50%", "25%", "90%"],
        "BonneReponse": "75%",
        "Explication": "75% des sondés répondent 'Non' à la question Q1 sur l'accueil des migrants."
    },
    {
        "question": "Combien de personnes devrait idéalement recevoir un questionnaire selon le document ?",
        "Reponses": ["50 - 1000", "10 - 100", "1000 - 5000", "100 - 200"],
        "BonneReponse": "50 - 1000",
        "Explication": "Il est recommandé d'envoyer le questionnaire à 50 - 1000 personnes."
    },
    {
        "question": "Quelle méthode de recueil d'informations consiste à observer et enregistrer les utilisateurs se servant du système ?",
        "Reponses": ["Observation directe", "Entretiens", "Questionnaires", "Espionnage"],
        "BonneReponse": "Observation directe",
        "Explication": "L'observation directe consiste à observer et enregistrer les utilisateurs se servant du système."
    },
    {
        "question": "Quelle méthode de recueil d'informations utilise des questions ouvertes et dirigées pour obtenir l'opinion de l'utilisateur ?",
        "Reponses": ["Entretiens", "Observation directe", "Questionnaires", "Espionnage"],
        "BonneReponse": "Entretiens",
        "Explication": "Les entretiens utilisent des questions ouvertes et dirigées pour obtenir l'opinion de l'utilisateur."
    },
    {
        "question": "Quelle méthode de recueil d'informations peut être intrusive et difficile à analyser mais est la plus détaillée ?",
        "Reponses": ["Vidéo", "Audio", "Papier", "Entretiens"],
        "BonneReponse": "Vidéo",
        "Explication": "L'enregistrement vidéo est la méthode la plus détaillée mais peut être intrusive et difficile à analyser."
    },
    {
        "question": "Quelle méthode de recueil d'informations est bon marché mais souvent incomplète et manque de détails ?",
        "Reponses": ["Papier", "Audio", "Vidéo", "Entretiens"],
        "BonneReponse": "Papier",
        "Explication": "L'enregistrement papier est bon marché mais souvent incomplet et manque de détails."
    },
    {
        "question": "Quel est l'avantage principal d'utiliser des enregistrements vidéo pour les observations ?",
        "Reponses": ["Détail maximal", "Moins intrusif", "Facilité d'analyse", "Coût bas"],
        "BonneReponse": "Détail maximal",
        "Explication": "Les enregistrements vidéo fournissent le plus de détails, bien qu'ils puissent être intrusifs et difficiles à analyser."
    },
    {
        "question": "Pourquoi est-il important d'utiliser au moins deux observateurs indépendants lors de l'observation directe ?",
        "Reponses": ["Pour établir le degré de concordance", "Pour réduire les coûts", "Pour simplifier l'analyse", "Pour éviter les erreurs"],
        "BonneReponse": "Pour établir le degré de concordance",
        "Explication": "Utiliser au moins deux observateurs indépendants permet d'établir le degré de concordance dans les observations."
    },
    {
        "question": "Quelle méthode de recueil d'informations peut être combinée avec des entretiens ou des questionnaires pour obtenir des résultats plus complets ?",
        "Reponses": ["Observation directe", "Technique de l'incident critique", "Enregistrement vidéo", "Espionnage"],
        "BonneReponse": "Observation directe",
        "Explication": "L'observation directe peut être combinée avec des entretiens ou des questionnaires pour obtenir des résultats plus complets."
    },
    {
        "question": "Quelle technique demande aux utilisateurs de commenter à haute voix les actions qu'ils effectuent pendant une étude d'utilisation ?",
        "Reponses": ["Commenter à haute voix", "Apprentissage coopératif", "Co-découverte", "Espionnage"],
        "BonneReponse": "Commenter à haute voix",
        "Explication": "La technique consistant à demander aux utilisateurs de commenter à haute voix les actions qu'ils effectuent permet d'obtenir des informations sur leur processus de pensée."
    },
    {
        "question": "Quelle méthode de recueil d'informations est particulièrement utile pour générer des exemples spécifiques de problèmes rencontrés par les utilisateurs ?",
        "Reponses": ["Technique de l'incident critique", "Observation directe", "Questionnaires", "Entretiens"],
        "BonneReponse": "Technique de l'incident critique",
        "Explication": "La technique de l'incident critique est particulièrement utile pour générer des exemples spécifiques de problèmes rencontrés par les utilisateurs."
    }
]

export default questions;