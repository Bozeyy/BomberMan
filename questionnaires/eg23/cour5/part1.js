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
        "Explication": "Les entretiens utilisent des questions ouvertes et dirigées pour obtenir l'opinion de l'utilisateur."
    },
    {
        "question": "Quel est le critère d'utilisabilité qui évalue la capacité d'un produit à être utilisé par des utilisateurs identifiés pour atteindre des buts définis avec efficacité, efficience et satisfaction ?",
        "Reponses": ["Efficacité", "Efficience", "Satisfaction de l'utilisateur", "Facilité d'apprentissage"],
        "BonneReponse": "Efficacité",
        "Explication": "L'efficacité évalue si le produit permet à l'utilisateur d'atteindre ses objectifs de manière efficace."
    },
    {
        "question": "Quel critère d'utilisabilité est associé à la consommation minimale de ressources pour atteindre les objectifs ?",
        "Reponses": ["Efficacité", "Efficience", "Satisfaction de l'utilisateur", "Facilité d'apprentissage"],
        "BonneReponse": "Efficience",
        "Explication": "L'efficience évalue la consommation minimale de ressources pour atteindre les objectifs."
    },
    {
        "question": "Quel critère d'utilisabilité est lié au confort et à l'évaluation subjective de l'utilisateur lors de l'utilisation du produit ?",
        "Reponses": ["Efficacité", "Efficience", "Satisfaction de l'utilisateur", "Facilité d'apprentissage"],
        "BonneReponse": "Satisfaction de l'utilisateur",
        "Explication": "La satisfaction de l'utilisateur concerne le confort et l'évaluation subjective de l'expérience utilisateur."
    },
    {
        "question": "Quel critère d'utilisabilité évalue la facilité avec laquelle un nouvel utilisateur peut apprendre à utiliser le produit ?",
        "Reponses": ["Efficacité", "Efficience", "Satisfaction de l'utilisateur", "Facilité d'apprentissage"],
        "BonneReponse": "Facilité d'apprentissage",
        "Explication": "La facilité d'apprentissage évalue la facilité avec laquelle un nouvel utilisateur peut apprendre à utiliser le produit."
    },
    {
        "question": "Quel critère d'utilisabilité évalue la capacité du produit à permettre à l'utilisateur d'atteindre ses objectifs de manière efficace ?",
        "Reponses": ["Efficacité", "Efficience", "Satisfaction de l'utilisateur", "Facilité d'utilisation"],
        "BonneReponse": "Efficacité",
        "Explication": "L'efficacité évalue si le produit permet à l'utilisateur d'atteindre ses objectifs de manière efficace."
    },
    {
        "question": "Quel critère d'utilisabilité évalue la capacité du produit à permettre à l'utilisateur d'atteindre ses objectifs avec une consommation minimale de ressources ?",
        "Reponses": ["Efficacité", "Efficience", "Satisfaction de l'utilisateur", "Facilité d'utilisation"],
        "BonneReponse": "Efficience",
        "Explication": "L'efficience évalue la consommation minimale de ressources pour atteindre les objectifs de l'utilisateur."
    },
    {
        "question": "Quel critère d'utilisabilité évalue le confort et l'évaluation subjective de l'utilisateur lors de l'utilisation du produit ?",
        "Reponses": ["Efficacité", "Efficience", "Satisfaction de l'utilisateur", "Facilité d'utilisation"],
        "BonneReponse": "Satisfaction de l'utilisateur",
        "Explication": "La satisfaction de l'utilisateur concerne le confort et l'évaluation subjective de l'expérience utilisateur."
    },
    {
        "question": "Quel critère d'utilisabilité évalue la facilité avec laquelle un nouvel utilisateur peut apprendre à utiliser le produit ?",
        "Reponses": ["Efficacité", "Efficience", "Satisfaction de l'utilisateur", "Facilité d'utilisation"],
        "BonneReponse": "Facilité d'utilisation",
        "Explication": "La facilité d'utilisation évalue la facilité avec laquelle un utilisateur peut utiliser le produit après l'avoir appris."
    },
    {
        "question": "Quel type d'évaluation de logiciel est effectué pendant la conception pour évaluer la qualité de l'interface et la facilité d'utilisation ?",
        "Reponses": ["Evaluation formative", "Evaluation sommative", "Contrôle qualité", "Comparaison de logiciels"],
        "BonneReponse": "Evaluation formative",
        "Explication": "L'évaluation formative est effectuée pendant la conception pour améliorer la qualité de l'interface et de l'utilisabilité."
    },
    {
        "question": "Quel type d'évaluation de logiciel est effectué après la diffusion pour mesurer la satisfaction des utilisateurs et identifier les incidents critiques ?",
        "Reponses": ["Evaluation formative", "Evaluation sommative", "Contrôle qualité", "Comparaison de logiciels"],
        "BonneReponse": "Evaluation sommative",
        "Explication": "L'évaluation sommative est effectuée après la diffusion pour mesurer la satisfaction des utilisateurs et identifier les incidents critiques."
    },
    {
        "question": "Quel critère d'utilisabilité évalue si le logiciel est utilisé conformément à ce qui était prévu lors de sa conception ?",
        "Reponses": ["Utilisabilité", "Utilité", "Usages", "Fiabilité"],
        "BonneReponse": "Usages",
        "Explication": "Le critère d'usages évalue si le logiciel est utilisé conformément à ce qui était prévu lors de sa conception."
    },
    {
        "question": "Quel critère d'utilisabilité évalue si le logiciel permet à l'utilisateur d'atteindre ses objectifs de haut niveau définis par le client ?",
        "Reponses": ["Utilisabilité", "Utilité", "Usages", "Fiabilité"],
        "BonneReponse": "Utilité",
        "Explication": "L'utilité évalue si le logiciel permet à l'utilisateur d'atteindre ses objectifs de haut niveau définis par le client."
    },
    {
        "question": "Quel critère d'utilisabilité évalue si le logiciel est libre d'erreurs d'utilisation ?",
        "Reponses": ["Utilisabilité", "Utilité", "Usages", "Fiabilité"],
        "BonneReponse": "Fiabilité",
        "Explication": "La fiabilité évalue si le logiciel est libre d'erreurs d'utilisation."
    },
    {
        "question": "Quel critère d'utilisabilité évalue la qualité globale du logiciel, y compris tous les aspects de l'expérience utilisateur ?",
        "Reponses": ["Utilisabilité", "Utilité", "Usages", "Fiabilité"],
        "BonneReponse": "Qualité globale",
        "Explication": "La qualité globale évalue la qualité totale du logiciel, y compris tous les aspects de l'expérience utilisateur."
    },
    {
        "question": "Quel principe ergonomique se réfère à la capacité du système à permettre à l'utilisateur de vérifier les effets de ses actions ?",
        "Reponses": ["Observabilité", "Causalité", "Consistance", "Familiarité"],
        "BonneReponse": "Observabilité",
        "Explication": "L'observabilité se réfère à la capacité du système à permettre à l'utilisateur de vérifier les effets de ses actions."
    },
    {
        "question": "Quel principe ergonomique se réfère à la capacité du système à aider l'utilisateur à prédire le comportement du système en fonction de ses interactions antérieures ?",
        "Reponses": ["Observabilité", "Causalité", "Consistance", "Familiarité"],
        "BonneReponse": "Causalité",
    }
];




export default questions;