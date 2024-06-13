let questions = [
    {
        "question": "Quelle est la norme ISO qui définit l'utilisabilité comme le degré selon lequel un produit peut être utilisé par des utilisateurs identifiés pour atteindre des buts définis avec efficacité, efficience et satisfaction ?",
        "Reponses": ["ISO 9241", "ISO 9001", "ISO 14001", "ISO 27001"],
        "BonneReponse": "ISO 9241",
        "Explication": "La norme ISO 9241 définit l'utilisabilité comme le degré selon lequel un produit peut être utilisé par des utilisateurs identifiés pour atteindre des buts définis avec efficacité, efficience et satisfaction."
    },
    {
        "question": "Quel est le critère d'utilisabilité qui évalue la capacité d'un logiciel à permettre à l'utilisateur d'atteindre facilement ses objectifs ?",
        "Reponses": ["Efficacité", "Efficience", "Satisfaction de l'utilisateur", "Facilité d'utilisation"],
        "BonneReponse": "Efficacité",
        "Explication": "L'efficacité évalue la capacité d'un logiciel à permettre à l'utilisateur d'atteindre facilement ses objectifs."
    },
    {
        "question": "Quel principe ergonomique concerne la capacité d'un système à aider l'utilisateur à prédire le comportement du système au vu d'interactions antérieures ?",
        "Reponses": ["Causalité", "Flexibilité", "Observabilité", "Robustesse"],
        "BonneReponse": "Causalité",
        "Explication": "La causalité est le principe ergonomique qui concerne la capacité d'un système à aider l'utilisateur à prédire le comportement du système au vu d'interactions antérieures."
    },
    {
        "question": "Quel critère d'utilisabilité évalue la consommation d'un minimum de ressources pour atteindre un but ?",
        "Reponses": ["Efficacité", "Efficience", "Satisfaction de l'utilisateur", "Facilité d'utilisation"],
        "BonneReponse": "Efficience",
        "Explication": "L'efficience évalue la consommation d'un minimum de ressources pour atteindre un but."
    },
    {
        "question": "Quel est le critère d'utilisabilité qui évalue le confort et l'évaluation subjective de l'utilisateur ?",
        "Reponses": ["Efficacité", "Efficience", "Satisfaction de l'utilisateur", "Facilité d'utilisation"],
        "BonneReponse": "Satisfaction de l'utilisateur",
        "Explication": "La satisfaction de l'utilisateur évalue le confort et l'évaluation subjective de l'utilisateur."
    },
    {
        "question": "Quel principe ergonomique concerne la capacité d'un système à permettre à l'utilisateur de vérifier les effets de ses actions ?",
        "Reponses": ["Observabilité", "Causalité", "Flexibilité", "Robustesse"],
        "BonneReponse": "Observabilité",
        "Explication": "L'observabilité est le principe ergonomique qui concerne la capacité d'un système à permettre à l'utilisateur de vérifier les effets de ses actions."
    },
    {
        "question": "Quel est le principe ergonomique qui concerne la capacité d'un système à offrir des modes d'interactions multiples pour répondre aux besoins, préférences et expérience de l'utilisation ?",
        "Reponses": ["Flexibilité", "Observabilité", "Causalité", "Robustesse"],
        "BonneReponse": "Flexibilité",
        "Explication": "La flexibilité est le principe ergonomique qui concerne la capacité d'un système à offrir des modes d'interactions multiples pour répondre aux besoins, préférences et expérience de l'utilisation."
    },
    {
        "question": "Quel principe ergonomique concerne la capacité d'un système à limiter les erreurs en guidant l'utilisateur pour éviter des actions incorrectes ?",
        "Reponses": ["Guidage", "Observabilité", "Causalité", "Robustesse"],
        "BonneReponse": "Guidage",
        "Explication": "Le guidage est le principe ergonomique qui concerne la capacité d'un système à limiter les erreurs en guidant l'utilisateur pour éviter des actions incorrectes."
    },
    {
        "question": "Quel principe ergonomique concerne la cohérence du comportement et de l'organisation de l'interface tout au long de l'utilisation ?",
        "Reponses": ["Consistance", "Flexibilité", "Observabilité", "Robustesse"],
        "BonneReponse": "Consistance",
        "Explication": "La consistance est le principe ergonomique qui concerne la cohérence du comportement et de l'organisation de l'interface tout au long de l'utilisation."
    },
    {
        "question": "Quel principe ergonomique concerne la capacité d'un système à être cohérent avec les connaissances antérieures de l'utilisateur et à présenter des interactions similaires à celles du monde réel ?",
        "Reponses": ["Familiarité", "Flexibilité", "Observabilité", "Robustesse"],
        "BonneReponse": "Familiarité",
        "Explication": "La familiarité est le principe ergonomique qui concerne la capacité d'un système à être cohérent avec les connaissances antérieures de l'utilisateur et à présenter des interactions similaires à celles du monde réel."
    },
    {
        "question": "Quel principe ergonomique concerne la capacité d'un système à offrir des interactions qui peuvent être généralisées à d'autres fonctionnalités ou d'autres logiciels ?",
        "Reponses": ["Généricité", "Flexibilité", "Observabilité", "Robustesse"],
        "BonneReponse": "Généricité",
        "Explication": "La généricité est le principe ergonomique qui concerne la capacité d'un système à offrir des interactions qui peuvent être généralisées à d'autres fonctionnalités ou d'autres logiciels."
    },
    {
        "question": "Quel principe ergonomique concerne l'application de normes et de standards largement reconnus dans la conception de l'interface ?",
        "Reponses": ["Standardisation", "Flexibilité", "Observabilité", "Robustesse"],
        "BonneReponse": "Standardisation",
        "Explication": "La standardisation est le principe ergonomique qui concerne l'application de normes et de standards largement reconnus dans la conception de l'interface."
    },
    {
        "question": "Quelle est la méthode d'évaluation qui implique l'observation et l'enregistrement des utilisateurs se servant du système dans leur environnement naturel ?",
        "Reponses": ["Test utilisateur sur site", "Entretiens", "Questionnaires", "Espionnage"],
        "BonneReponse": "Test utilisateur sur site",
        "Explication": "Le test utilisateur sur site implique l'observation et l'enregistrement des utilisateurs se servant du système dans leur environnement naturel."
    },
    {
        "question": "Quelle méthode d'évaluation utilise des questions ouvertes et dirigées pour obtenir l'opinion de l'utilisateur sur le système ?",
        "Reponses": ["Entretiens", "Observation directe", "Questionnaires", "Espionnage"],
        "BonneReponse": "Entretiens",
        "Explication": "Les entretiens utilisent des questions ouvertes et dirigées pour obtenir l'opinion de l'utilisateur sur le système."
    },
    {
        "question": "Quelle est la méthode d'évaluation qui collecte des données sur l'expérience utilisateur à travers des formulaires structurés ?",
        "Reponses": ["Questionnaires", "Observation directe", "Entretiens", "Espionnage"],
        "BonneReponse": "Questionnaires",
        "Explication": "Les questionnaires collectent des données sur l'expérience utilisateur à travers des formulaires structurés."
    },
    {
        "question": "Quelle méthode d'évaluation collecte des données discrètes sur les utilisateurs sans leur consentement ?",
        "Reponses": ["Espionnage", "Observation directe", "Entretiens", "Questionnaires"],
        "BonneReponse": "Espionnage",
        "Explication": "L'espionnage collecte des données discrètes sur les utilisateurs sans leur consentement."
    }
];



export default questions;