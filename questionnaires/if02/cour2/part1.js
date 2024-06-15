let questions = [
    {
        "question": "Quel est le principal objectif du système d'information d'ElectroClick ?",
        "Reponses": ["Gérer les activités commerciales", "Augmenter les ventes", "Réduire les coûts", "Maximiser les profits"],
        "BonneReponse": "Gérer les activités commerciales",
        "Explication": "Le système d'information est utilisé pour gérer les activités commerciales telles que la gestion des stocks, le suivi des commandes et la relation client."
    },
    {
        "question": "Quelle fonction du système d'information d'ElectroClick permet de suivre les niveaux de stock ?",
        "Reponses": ["Gestion des stocks", "Suivi des commandes", "Gestion de la relation client", "Analyse des données client"],
        "BonneReponse": "Gestion des stocks",
        "Explication": "Le système d'information suit les niveaux de stock des produits de l'entreprise."
    },
    {
        "question": "Quelle action l'entreprise Saveurs & Saisons a-t-elle entreprise grâce à l'analyse des données de son système d'information ?",
        "Reponses": ["Étendre l'offre végétarienne pendant les heures de dîner", "Réduire les prix des plats végétariens", "Fermer le restaurant le soir", "Embaucher plus de personnel"],
        "BonneReponse": "Étendre l'offre végétarienne pendant les heures de dîner",
        "Explication": "Suite à l'analyse des données, le restaurant a décidé d'étendre son offre végétarienne pour répondre à la demande croissante."
    },
    {
        "question": "Qu'est-ce que l'entreprise ElectroClick stocke dans son système d'information concernant les clients ?",
        "Reponses": ["Coordonnées et historique d'achat", "Photos et vidéos des clients", "Opinions personnelles des clients", "Résultats d'enquêtes de satisfaction"],
        "BonneReponse": "Coordonnées et historique d'achat",
        "Explication": "ElectroClick stocke les coordonnées et l'historique d'achat des clients dans son système d'information."
    },
    {
        "question": "Qu'est-ce que l'entreprise Saveurs & Saisons collecte à l'aide de son système de gestion des commandes ?",
        "Reponses": ["Données sur les plats les plus commandés et les commentaires des clients", "Informations sur les nouveaux concurrents", "Liste des fournisseurs de nourriture", "Données financières du restaurant"],
        "BonneReponse": "Données sur les plats les plus commandés et les commentaires des clients",
        "Explication": "Le système de gestion des commandes collecte des données sur les plats les plus commandés et les commentaires des clients."
    },
    {
        "question": "Quelle méthode de recueil d'informations implique l'observation et l'enregistrement des utilisateurs se servant du système ?",
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
        "question": "Quel terme désigne les faits ou détails à partir desquels l'information est obtenue ?",
        "Reponses": ["Données", "Informations", "Connaissances", "Décisions"],
        "BonneReponse": "Données",
        "Explication": "Les données sont les faits ou détails à partir desquels l'information est obtenue."
    },
    {
        "question": "Qu'est-ce que le système d'information de Saveurs & Saisons collecte pour améliorer ses services ?",
        "Reponses": ["Commentaires des clients sur les plats", "Photos des clients mangeant", "CV des employés", "Liste des fournisseurs de nourriture"],
        "BonneReponse": "Commentaires des clients sur les plats",
        "Explication": "Le système d'information collecte les commentaires des clients sur les plats pour améliorer les services du restaurant."
    },
    {
        "question": "Quel est le but principal de la modélisation UML dans la conception des systèmes d'information ?",
        "Reponses": ["Documenter et visualiser les systèmes", "Créer des bases de données", "Écrire du code informatique", "Surveiller les utilisateurs"],
        "BonneReponse": "Documenter et visualiser les systèmes",
        "Explication": "UML est utilisé pour documenter et visualiser les systèmes d'information lors de la conception."
    },
    {
        "question": "Quelle fonctionnalité du système d'information d'ElectroClick aide à prévenir les ruptures de stock ?",
        "Reponses": ["Réapprovisionnement efficace", "Analyse des données client", "Gestion de la relation client", "Augmentation des prix"],
        "BonneReponse": "Réapprovisionnement efficace",
        "Explication": "Le système d'information d'ElectroClick aide à prévenir les ruptures de stock en facilitant le réapprovisionnement efficace."
    },
    {
        "question": "Quelle action l'entreprise ElectroClick peut-elle entreprendre grâce à la gestion des stocks via son système d'information ?",
        "Reponses": ["Évaluation des coûts de stockage et rentabilité des produits", "Réduction des prix de tous les produits", "Augmentation du nombre d'employés", "Fermeture des magasins"],
        "BonneReponse": "Évaluation des coûts de stockage et rentabilité des produits",
        "Explication": "Le système d'information d'ElectroClick permet d'évaluer les coûts de stockage et la rentabilité des produits."
    },
    {
        "question": "Quel type de données collecte le système d'information d'ElectroClick concernant les clients ?",
        "Reponses": ["Coordonnées et historique d'achat", "Photos des clients", "Opinions politiques des clients", "Croyances religieuses des clients"],
        "BonneReponse": "Coordonnées et historique d'achat",
        "Explication": "Le système d'information d'ElectroClick collecte les coordonnées et l'historique d'achat des clients."
    },
    {
        "question": "Qu'est-ce que le restaurant Saveurs & Saisons a appris grâce à l'analyse des données de son système d'information ?",
        "Reponses": ["Les plats végétariens reçoivent des évaluations élevées et leur demande augmente le soir", "Les plats de viande sont moins populaires que les plats végétariens", "Le restaurant perd de l'argent chaque jour", "Les employés sont mécontents du salaire"],
        "BonneReponse": "Les plats végétariens reçoivent des évaluations élevées et leur demande augmente le soir",
        "Explication": "L'analyse des données a révélé que les plats végétariens du restaurant reçoivent des évaluations élevées et leur demande augmente le soir."
    },
    {
        "question": "Quelle méthode de collecte d'informations le restaurant Saveurs & Saisons utilise-t-il pour obtenir des données sur les plats les plus commandés et les commentaires des clients ?",
        "Reponses": ["Système de gestion des commandes", "Surveillance vidéo", "Applications mobiles", "Réseaux sociaux"],
        "BonneReponse": "Système de gestion des commandes",
        "Explication": "Le restaurant utilise un système de gestion des commandes pour collecter des données sur les plats les plus commandés et les commentaires des clients."
    },
    {
        "question": "Quelle méthode de recueil d'informations implique de poser des questions spécifiques pour obtenir des réponses précises des utilisateurs ?",
        "Reponses": ["Questionnaires", "Entretiens", "Observation directe", "Espionnage"],
        "BonneReponse": "Questionnaires",
        "Explication": "Les questionnaires posent des questions spécifiques pour obtenir des réponses précises des utilisateurs."
    },
    {
        "question": "Quelle méthode de recueil d'informations implique la collecte d'opinions et de commentaires verbaux des utilisateurs ?",
        "Reponses": ["Entretiens", "Observation directe", "Questionnaires", "Espionnage"],
        "BonneReponse": "Entretiens",
        "Explication": "Les entretiens impliquent la collecte d'opinions et de commentaires verbaux des utilisateurs."
    },
    {
        "question": "Quelle est l'importance de l'alignement stratégique des systèmes d'information selon le cours ?",
        "Reponses": ["Aligner les SI sur les objectifs de l'entreprise", "Sécuriser les données des clients", "Réduire les coûts informatiques", "Augmenter la complexité des systèmes"],
        "BonneReponse": "Aligner les SI sur les objectifs de l'entreprise",
        "Explication": "L'alignement stratégique des SI vise à aligner les systèmes d'information sur les objectifs et les besoins stratégiques de l'entreprise."
    },
    {
        "question": "Quel est le rôle de la modélisation UML dans la conception des systèmes d'information ?",
        "Reponses": ["Documenter et visualiser les systèmes", "Écrire du code informatique", "Analyser les données des clients", "Surveiller les employés"],
        "BonneReponse": "Documenter et visualiser les systèmes",
        "Explication": "UML est utilisé pour documenter et visualiser les systèmes d'information afin de faciliter la conception et la compréhension."
    },
    {
        "question": "Quel type de données le système d'information de Saveurs & Saisons collecte-t-il principalement concernant les clients ?",
        "Reponses": ["Commentaires sur les plats", "Informations financières", "Déplacements des clients", "Préférences politiques"],
        "BonneReponse": "Commentaires sur les plats",
        "Explication": "Le système d'information collecte principalement des commentaires sur les plats des clients pour améliorer les services."
    },
    {
        "question": "Qu'est-ce que l'entreprise ElectroClick peut analyser grâce aux données de son système d'information sur les clients ?",
        "Reponses": ["Comportement, satisfaction, attentes des clients", "Données financières de l'entreprise", "Rapports internes confidentiels", "Cours boursiers"],
        "BonneReponse": "Comportement, satisfaction, attentes des clients",
        "Explication": "ElectroClick peut analyser le comportement, la satisfaction et les attentes des clients grâce aux données collectées dans son système d'information."
    },
    {
        "question": "Quelle fonction du système d'information d'ElectroClick aide à ajuster le marketing et à améliorer l'expérience client ?",
        "Reponses": ["Analyse des données client", "Gestion des stocks", "Suivi des commandes", "Réapprovisionnement efficace"],
        "BonneReponse": "Analyse des données client",
        "Explication": "L'analyse des données client dans le système d'information d'ElectroClick aide à ajuster le marketing et à améliorer l'expérience client."
    },
    {
        "question": "Qu'est-ce que l'entreprise ElectroClick peut planifier grâce aux données sur les tendances de vente de son système d'information ?",
        "Reponses": ["La production des produits populaires", "La fermeture de magasins", "L'augmentation des prix", "La réduction des effectifs"],
        "BonneReponse": "La production des produits populaires",
        "Explication": "ElectroClick peut planifier la production des produits populaires grâce aux données sur les tendances de vente collectées dans son système d'information."
    },
    {
        "question": "Quel terme désigne les faits ou détails organisés et traités pour obtenir des informations significatives ?",
        "Reponses": ["Données", "Informations", "Connaissances", "Décisions"],
        "BonneReponse": "Informations",
        "Explication": "Les informations sont les faits ou détails organisés et traités pour obtenir des informations significatives."
    },
    {
        "question": "Qu'est-ce que l'entreprise Saveurs & Saisons peut déduire des évaluations élevées des plats végétariens et de leur demande croissante le soir ?",
        "Reponses": ["Étendre l'offre végétarienne pendant les heures de dîner", "Réduire l'offre végétarienne", "Fermer le restaurant le soir", "Augmenter le prix des plats végétariens"],
        "BonneReponse": "Étendre l'offre végétarienne pendant les heures de dîner",
        "Explication": "Le restaurant peut déduire d'étendre son offre végétarienne pendant les heures de dîner pour répondre à la demande croissante."
    },
    {
        "question": "Quelle méthode de recueil d'informations implique l'observation des utilisateurs sans qu'ils en soient conscients ?",
        "Reponses": ["Espionnage", "Entretiens", "Questionnaires", "Observation directe"],
        "BonneReponse": "Espionnage",
        "Explication": "L'espionnage implique l'observation des utilisateurs sans qu'ils en soient conscients pour recueillir des informations."
    },
    {
        "question": "Quelle méthode de recueil d'informations utilise des formulaires standardisés pour obtenir des réponses ?",
        "Reponses": ["Questionnaires", "Entretiens", "Observation directe", "Espionnage"],
        "BonneReponse": "Questionnaires",
        "Explication": "Les questionnaires utilisent des formulaires standardisés pour obtenir des réponses."
    },
    {
        "question": "Quelle méthode de recueil d'informations permet de collecter des données sur les comportements et les interactions des utilisateurs avec le système ?",
        "Reponses": ["Observation directe", "Entretiens", "Questionnaires", "Espionnage"],
        "BonneReponse": "Observation directe",
        "Explication": "L'observation directe permet de collecter des données sur les comportements et les interactions des utilisateurs avec le système."
    },
    {
        "question": "Quelle méthode de recueil d'informations est souvent utilisée pour obtenir des données sur les préférences et les opinions des utilisateurs ?",
        "Reponses": ["Entretiens", "Observation directe", "Questionnaires", "Espionnage"],
        "BonneReponse": "Entretiens",
        "Explication": "Les entretiens sont souvent utilisés pour obtenir des données sur les préférences et les opinions des utilisateurs."
    },
    {
        "question": "Quel terme désigne les faits ou détails organisés et interprétés pour prendre des décisions ?",
        "Reponses": ["Informations", "Données", "Connaissances", "Décisions"],
        "BonneReponse": "Informations",
        "Explication": "Les informations sont les faits ou détails organisés et interprétés pour prendre des décisions."
    },
    {
        "question": "Qu'est-ce que le système d'information de Saveurs & Saisons collecte principalement pour améliorer les services du restaurant ?",
        "Reponses": ["Commentaires des clients sur les plats", "Photos des clients", "Informations financières du restaurant", "Liste des employés"],
        "BonneReponse": "Commentaires des clients sur les plats",
        "Explication": "Le système d'information collecte principalement des commentaires des clients sur les plats pour améliorer les services du restaurant."
    },
    {
        "question": "Quel est l'objectif principal de l'alignement stratégique des systèmes d'information ?",
        "Reponses": ["Aligner les SI sur les objectifs et besoins stratégiques de l'entreprise", "Réduire les effectifs", "Augmenter les prix des produits", "Diversifier les services offerts"],
        "BonneReponse": "Aligner les SI sur les objectifs et besoins stratégiques de l'entreprise",
        "Explication": "L'alignement stratégique des systèmes d'information vise à aligner les SI sur les objectifs et les besoins stratégiques de l'entreprise."
    }
]

export default questions;

