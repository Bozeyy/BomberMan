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
        "question": "Quelle norme définit l'utilisabilité comme le degré selon lequel un produit peut être utilisé avec efficacité, efficience et satisfaction ?",
        "Reponses": ["ISO 9001", "ISO 9241", "ISO 14001", "ISO 27001"],
        "BonneReponse": "ISO 9241",
        "Explication": "La norme ISO 9241 définit l'utilisabilité comme le degré selon lequel un produit peut être utilisé avec efficacité, efficience et satisfaction."
    },
    {
        "question": "Quel critère d'utilisabilité fait référence à la capacité du logiciel à permettre à l'utilisateur de vérifier les effets de ses actions ?",
        "Reponses": ["Facilité d'apprentissage", "Causalité", "Observabilité", "Robustesse"],
        "BonneReponse": "Observabilité",
        "Explication": "L'observabilité fait référence à la capacité du logiciel à permettre à l'utilisateur de vérifier les effets de ses actions."
    },
    {
        "question": "Quelle méthode d'évaluation implique que l'utilisateur pense à voix haute pendant qu'il utilise le système ?",
        "Reponses": ["Observation directe", "Entretiens", "Pensée à voix haute", "Espionnage"],
        "BonneReponse": "Pensée à voix haute",
        "Explication": "La méthode de pensée à voix haute implique que l'utilisateur verbalise ses pensées pendant qu'il utilise le système."
    },
    {
        "question": "Quel critère d'utilisabilité mesure la consommation de ressources pour atteindre un résultat ?",
        "Reponses": ["Efficacité", "Efficience", "Satisfaction", "Facilité d'apprentissage"],
        "BonneReponse": "Efficience",
        "Explication": "L'efficience mesure la consommation de ressources (comme le temps ou les efforts) pour atteindre un résultat."
    },
    {
        "question": "Quel type de flexibilité se réfère à la capacité du système à s'adapter au contexte de l'utilisateur ?",
        "Reponses": ["Adaptabilité", "Substitivité", "Personnalisation", "Flexibilité d'utilisation"],
        "BonneReponse": "Adaptabilité",
        "Explication": "L'adaptabilité se réfère à la capacité du système à s'adapter au contexte de l'utilisateur."
    },
    {
        "question": "Quel principe ergonomique consiste à montrer le changement d'état d'un contrôle sur une interface tactile ?",
        "Reponses": ["Consistance", "Feedback", "Observabilité", "Causalité"],
        "BonneReponse": "Feedback",
        "Explication": "Le feedback consiste à montrer le changement d'état d'un contrôle sur une interface tactile."
    },
    {
        "question": "Quelle technique d'évaluation utilise des enregistrements vidéo pour analyser l'interaction utilisateur-système ?",
        "Reponses": ["Observation directe", "Entretiens", "Pensée à voix haute", "Oculométrie"],
        "BonneReponse": "Observation directe",
        "Explication": "L'observation directe peut utiliser des enregistrements vidéo pour analyser l'interaction utilisateur-système."
    },
    {
        "question": "Quel principe de Norman consiste à utiliser des connaissances déjà acquises par l'utilisateur pour concevoir l'interface ?",
        "Reponses": ["Simplifier la tâche", "Rendre les choses visibles", "Utiliser des connaissances existantes", "Standardiser"],
        "BonneReponse": "Utiliser des connaissances existantes",
        "Explication": "Le principe de Norman consiste à utiliser des connaissances déjà acquises par l'utilisateur pour concevoir l'interface."
    },
    {
        "question": "Quel type d'erreur est réduit en montrant clairement les conséquences des actions de l'utilisateur ?",
        "Reponses": ["Erreur de syntaxe", "Erreur de jugement", "Erreur de perception", "Erreur de manipulation"],
        "BonneReponse": "Erreur de manipulation",
        "Explication": "Les erreurs de manipulation sont réduites en montrant clairement les conséquences des actions de l'utilisateur."
    },
    {
        "question": "Quelle technique d'évaluation implique plusieurs utilisateurs travaillant ensemble pour résoudre des tâches avec le système ?",
        "Reponses": ["Entretiens", "Pensée à voix haute", "Méthode de co-découverte", "Observation directe"],
        "BonneReponse": "Méthode de co-découverte",
        "Explication": "La méthode de co-découverte implique plusieurs utilisateurs travaillant ensemble pour résoudre des tâches avec le système."
    },
    {
        "question": "Quel critère d'utilisabilité mesure le confort et l'évaluation subjective de l'utilisateur ?",
        "Reponses": ["Efficacité", "Efficience", "Satisfaction", "Facilité d'apprentissage"],
        "BonneReponse": "Satisfaction",
        "Explication": "La satisfaction mesure le confort et l'évaluation subjective de l'utilisateur."
    },
    {
        "question": "Quel principe ergonomique consiste à guider l'utilisateur pour éviter des erreurs ?",
        "Reponses": ["Consistance", "Feedback", "Causalité", "Guidage"],
        "BonneReponse": "Guidage",
        "Explication": "Le guidage consiste à conseiller et orienter l'utilisateur pour éviter des erreurs."
    },
    {
        "question": "Quelle méthode d'évaluation analyse la présence et l'accès aux fonctionnalités du système ?",
        "Reponses": ["Analyse formelle", "Analyse de cohérence", "Analyse de fonctionnalités", "Analyse de conformité"],
        "BonneReponse": "Analyse de fonctionnalités",
        "Explication": "L'analyse de fonctionnalités vérifie la présence et l'accès aux fonctionnalités du système."
    },
    {
        "question": "Quel type de flexibilité permet à l'utilisateur de personnaliser les commandes sur le touchpad de MacOS ?",
        "Reponses": ["Adaptabilité", "Substitivité", "Personnalisation", "Flexibilité d'utilisation"],
        "BonneReponse": "Personnalisation",
        "Explication": "La personnalisation permet à l'utilisateur de configurer les commandes sur le touchpad de MacOS."
    },
    {
        "question": "Quel critère d'utilisabilité mesure la facilité avec laquelle l'utilisateur peut prendre en main le logiciel ?",
        "Reponses": ["Efficacité", "Efficience", "Satisfaction", "Apprenabilité"],
        "BonneReponse": "Apprenabilité",
        "Explication": "L'apprenabilité mesure la facilité avec laquelle l'utilisateur peut prendre en main le logiciel."
    },
    {
        "question": "Quelle méthode de recueil d'informations utilise un protocole structuré pour guider l'utilisateur à travers des actions spécifiques ?",
        "Reponses": ["Entretiens", "Observation directe", "Pensée à voix haute", "Oculométrie"],
        "BonneReponse": "Pensée à voix haute",
        "Explication": "La méthode de pensée à voix haute utilise un protocole structuré pour guider l'utilisateur à travers des actions spécifiques."
    },
    {
        "question": "Quel type d'évaluation compare les logiciels avant un achat ou un téléchargement ?",
        "Reponses": ["Évaluation formative", "Évaluation sommative", "Analyse formelle", "Analyse de cohérence"],
        "BonneReponse": "Évaluation sommative",
        "Explication": "L'évaluation sommative compare les logiciels avant un achat ou un téléchargement."
    },
    {
        "question": "Quel principe ergonomique consiste à utiliser la perception pré-attentive pour les affichages critiques ?",
        "Reponses": ["Observabilité", "Guidage", "Consistance", "Lisibilité"],
        "BonneReponse": "Lisibilité",
        "Explication": "Utiliser la perception pré-attentive pour les affichages critiques améliore la lisibilité."
    },
    {
        "question": "Quelle méthode de recueil d'informations implique l'utilisation de questionnaires pour obtenir des données sur les utilisateurs ?",
        "Reponses": ["Entretiens", "Observation directe", "Pensée à voix haute", "Questionnaires"],
        "BonneReponse": "Questionnaires",
        "Explication": "Les questionnaires permettent de recueillir des données sur les utilisateurs."
    },
    {
        "question": "Quel critère d'utilisabilité mesure la facilité avec laquelle l'utilisateur peut se rappeler comment utiliser le logiciel après une période d'inactivité ?",
        "Reponses": ["Apprenabilité", "Efficacité", "Efficience", "Satisfaction"],
        "BonneReponse": "Apprenabilité",
        "Explication": "L'apprenabilité mesure la facilité avec laquelle l'utilisateur peut se rappeler comment utiliser le logiciel après une période d'inactivité."
    },
    {
        "question": "Quelle technique d'évaluation permet de recueillir des données quantitatives sur l'usage du système ?",
        "Reponses": ["Observation directe", "Entretiens", "Oculométrie", "Questionnaires"],
        "BonneReponse": "Oculométrie",
        "Explication": "L'oculométrie permet de recueillir des données quantitatives sur l'usage du système."
    },
    {
        "question": "Quel principe ergonomique consiste à rendre les objets interactifs facilement distinguables des objets non interactifs ?",
        "Reponses": ["Consistance", "Feedback", "Observabilité", "Distinguabilité"],
        "BonneReponse": "Distinguabilité",
        "Explication": "Le principe de distinguabilité consiste à rendre les objets interactifs facilement reconnaissables des objets non interactifs."
    },
    {
        "question": "Quel type d'évaluation se focalise sur l'identification des problèmes d'utilisabilité lors des premières étapes de développement ?",
        "Reponses": ["Évaluation formative", "Évaluation sommative", "Analyse de cohérence", "Analyse formelle"],
        "BonneReponse": "Évaluation formative",
        "Explication": "L'évaluation formative se focalise sur l'identification des problèmes d'utilisabilité lors des premières étapes de développement."
    },
    {
        "question": "Quel critère d'utilisabilité est concerné par la rapidité avec laquelle l'utilisateur peut réaliser ses tâches ?",
        "Reponses": ["Efficacité", "Efficience", "Satisfaction", "Apprenabilité"],
        "BonneReponse": "Efficience",
        "Explication": "L'efficience est concernée par la rapidité avec laquelle l'utilisateur peut réaliser ses tâches."
    },
    {
        "question": "Quel principe ergonomique implique que chaque action utilisateur doit avoir une réaction visible ou auditive ?",
        "Reponses": ["Consistance", "Feedback", "Causalité", "Observabilité"],
        "BonneReponse": "Feedback",
        "Explication": "Le principe de feedback implique que chaque action utilisateur doit avoir une réaction visible ou auditive."
    },
    {
        "question": "Quelle technique d'évaluation se focalise sur les interactions utilisateurs en environnement réel ou simulé ?",
        "Reponses": ["Observation directe", "Entretiens", "Oculométrie", "Pensée à voix haute"],
        "BonneReponse": "Observation directe",
        "Explication": "L'observation directe se focalise sur les interactions utilisateurs en environnement réel ou simulé."
    },
    {
        "question": "Quel type de flexibilité permet à l'utilisateur de sélectionner différentes méthodes d'interaction pour accomplir la même tâche ?",
        "Reponses": ["Adaptabilité", "Substitivité", "Personnalisation", "Flexibilité d'utilisation"],
        "BonneReponse": "Flexibilité d'utilisation",
        "Explication": "La flexibilité d'utilisation permet à l'utilisateur de choisir différentes méthodes d'interaction pour accomplir la même tâche."
    }
];


export default questions;