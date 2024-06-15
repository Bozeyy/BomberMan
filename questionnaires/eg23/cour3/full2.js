let questions = [
    {
        "question": "Quel est l'intérêt principal d'un Modèle d'Interface ?",
        "Reponses": ["Réfléchir à la logique de déroulement du dialogue sans contraintes", "Communiquer directement avec l'utilisateur", "Améliorer la performance de l'application", "Gérer les contraintes matérielles"],
        "BonneReponse": "Réfléchir à la logique de déroulement du dialogue sans contraintes",
        "Explication": "Un Modèle d'Interface permet aux concepteurs de réfléchir sur la logique de déroulement du dialogue entre l'utilisateur et l'application sans les contraintes matérielles et logicielles."
    },
    {
        "question": "Pourquoi un Modèle d'Interface est-il limité pour communiquer avec l'utilisateur ?",
        "Reponses": ["Trop technique", "Pas assez technique", "Trop visuel", "Pas assez visuel"],
        "BonneReponse": "Trop technique",
        "Explication": "Un Modèle d'Interface est trop technique pour être utilisé directement dans la communication avec l'utilisateur."
    },
    {
        "question": "Que peut-on ajouter à un Modèle d'Interface pour faciliter l'interaction avec l'utilisateur ?",
        "Reponses": ["Une maquette", "Un diagramme de flux", "Un manuel d'utilisation", "Un script de test"],
        "BonneReponse": "Une maquette",
        "Explication": "Développer une maquette en plus du Modèle d'Interface permet de faciliter l'interaction avec l'utilisateur."
    },
    {
        "question": "Quel type d'information ne figure pas dans un Modèle d'Interface ?",
        "Reponses": ["Type d'interface utilisé", "Type d'entrée et sortie envisagé", "Messages échangés", "Détails des traitements"],
        "BonneReponse": "Type d'interface utilisé",
        "Explication": "Un Modèle d'Interface n'indique pas forcément le type d'interface utilisé."
    },
    {
        "question": "Qu'est-ce qu'un diagramme d'activités UML permet de modéliser ?",
        "Reponses": ["Cheminement de flots de contrôle et de données", "Types d'interfaces utilisateurs", "Réponses utilisateurs", "Données matérielles"],
        "BonneReponse": "Cheminement de flots de contrôle et de données",
        "Explication": "Un diagramme d'activités UML permet de modéliser le cheminement de flots de contrôle et de flots de données."
    },
    {
        "question": "Qu'est-ce qu'une transition dans un diagramme d'activités UML ?",
        "Reponses": ["Passage d'une activité à une autre", "Entrée de données", "Sortie de données", "Création d'une interface"],
        "BonneReponse": "Passage d'une activité à une autre",
        "Explication": "Une transition matérialise le passage d'une activité vers une autre dans un diagramme d'activités UML."
    },
    {
        "question": "Quelle est la fonction d'un nœud d'activité ?",
        "Reponses": ["Représenter les étapes lors du flot d'une activité", "Indiquer le type de traitement", "Créer des interfaces utilisateurs", "Gérer les erreurs"],
        "BonneReponse": "Représenter les étapes lors du flot d'une activité",
        "Explication": "Un nœud d'activité représente les étapes lors du flot d'une activité."
    },
    {
        "question": "Quels sont les types de nœuds d'activités ?",
        "Reponses": ["Nœuds d'exécutions, nœuds objets, nœuds de contrôle", "Nœuds de départ, nœuds d'action, nœuds de décision", "Nœuds de début, nœuds de fin, nœuds intermédiaires", "Nœuds de décision, nœuds de fusion, nœuds de bifurcation"],
        "BonneReponse": "Nœuds d'exécutions, nœuds objets, nœuds de contrôle",
        "Explication": "Il existe trois familles de nœuds d'activités : les nœuds d'exécutions, les nœuds objets, et les nœuds de contrôle."
    },
    {
        "question": "Quelle transition déclenche le début immédiat d'une autre activité ?",
        "Reponses": ["Transition automatique", "Transition manuelle", "Transition séquentielle", "Transition conditionnelle"],
        "BonneReponse": "Transition automatique",
        "Explication": "Les transitions sont automatiques entre activités et déclenchent le début immédiat d'une autre activité."
    },
    {
        "question": "Qu'est-ce qu'un nœud de bifurcation ?",
        "Reponses": ["Un nœud qui déclenche simultanément plusieurs transitions", "Un nœud qui fusionne plusieurs transitions", "Un nœud qui représente une décision", "Un nœud qui marque la fin d'une activité"],
        "BonneReponse": "Un nœud qui déclenche simultanément plusieurs transitions",
        "Explication": "Un nœud de bifurcation déclenche simultanément plusieurs transitions."
    },
    {
        "question": "Quel nœud d'activité représente un événement temporel ?",
        "Reponses": ["Nœud d'action", "Nœud d'objet", "Nœud de contrôle", "Nœud de temps"],
        "BonneReponse": "Nœud d'action",
        "Explication": "Le nœud d'action peut représenter un événement temporel."
    },
    {
        "question": "Qu'est-ce qu'une partition dans un diagramme d'activités ?",
        "Reponses": ["Un segment qui divise le diagramme en parties fonctionnelles", "Un élément de contrôle", "Un type de transition", "Un type de nœud d'action"],
        "BonneReponse": "Un segment qui divise le diagramme en parties fonctionnelles",
        "Explication": "Une partition divise le diagramme d'activités en segments fonctionnels."
    },
    {
        "question": "Comment une interaction IHM est-elle modélisée dans un diagramme d'activités ?",
        "Reponses": ["Sous la forme d'un objet du diagramme", "Sous la forme d'une transition", "Sous la forme d'une partition", "Sous la forme d'un nœud de contrôle"],
        "BonneReponse": "Sous la forme d'un objet du diagramme",
        "Explication": "Un objet visuel de l'interface est modélisé sous la forme d'un objet du diagramme."
    },
    {
        "question": "Quelle est la relation entre une fenêtre mère et une fenêtre fille ?",
        "Reponses": ["La fenêtre fille est toujours confinée dans la région client de la fenêtre mère", "La fenêtre mère est confinée dans la fenêtre fille", "Les deux fenêtres sont indépendantes", "Les fenêtres peuvent se chevaucher"],
        "BonneReponse": "La fenêtre fille est toujours confinée dans la région client de la fenêtre mère",
        "Explication": "Une relation parentale implique que la fenêtre fille est toujours confinée dans la région client de la fenêtre mère."
    },
    {
        "question": "Quels types de fenêtres peuvent exister dans une application ?",
        "Reponses": ["Boîte de dialogue, Fenêtre Primaire, Fenêtre Secondaire, Boîte à messages", "Fenêtre Initiale, Fenêtre Finale, Fenêtre de Contrôle, Fenêtre d'Action", "Fenêtre de Bifurcation, Fenêtre de Fusion, Fenêtre de Décision, Fenêtre d'Objet", "Boîte de Contrôle, Boîte de Décision, Boîte d'Objet, Boîte de Fusion"],
        "BonneReponse": "Boîte de dialogue, Fenêtre Primaire, Fenêtre Secondaire, Boîte à messages",
        "Explication": "Les types de fenêtres incluent Boîte de dialogue, Fenêtre Primaire, Fenêtre Secondaire, et Boîte à messages."
    },
    {
        "question": "Quels avantages présentent les relations parentales entre fenêtres ?",
        "Reponses": ["Hiérarchie identifiable, partage de la barre d'actions, icône lisible", "Fenêtres indépendantes, moins de code, plus de liberté", "Meilleure performance, moins de bugs, plus de modularité", "Meilleure sécurité, meilleure gestion des erreurs, moins de conflits"],
        "BonneReponse": "Hiérarchie identifiable, partage de la barre d'actions, icône lisible",
        "Explication": "Les relations parentales permettent une hiérarchie identifiable, le partage de la barre d'actions, et une icône plus lisible."
    },
    {
        "question": "Quels sont les inconvénients des relations parentales entre fenêtres ?",
        "Reponses": ["Champ de visibilité limité, manipulations parasites", "Complexité accrue, plus de bugs", "Moins de modularité, plus de conflits", "Performance réduite, moins de sécurité"],
        "BonneReponse": "Champ de visibilité limité, manipulations parasites",
        "Explication": "Les inconvénients incluent un champ de visibilité limité et des manipulations parasites."
    },
    {
        "question": "Quelle relation entre fenêtres est initiée par un événement concernant un objet de la fenêtre initiale ?",
        "Reponses": ["Relation fonctionnelle", "Relation parentale", "Relation séquentielle", "Relation conditionnelle"],
        "BonneReponse": "Relation fonctionnelle",
        "Explication": "Une relation fonctionnelle est initiée par un événement concernant un objet de la fenêtre initiale."
    },
    {
        "question": "Qu'est-ce qu'une boîte de message dans une relation fonctionnelle entre fenêtres ?",
        "Reponses": ["Une feuille de l'arborescence ne pouvant pas générer d'autres fenêtres", "Une fenêtre primaire", "Une fenêtre secondaire", "Une fenêtre de décision"],
        "BonneReponse": "Une feuille de l'arborescence ne pouvant pas générer d'autres fenêtres",
        "Explication": "Une boîte de message est toujours une feuille de l'arborescence et ne peut pas générer d'autres fenêtres."
    },
    {
        "question": "Quelle est la propriété d'une fenêtre propriétaire dans une relation parentale ?",
        "Reponses": ["Elle détourne tous les événements concernant la fenêtre fille pour les traiter", "Elle est confinée dans la fenêtre fille", "Elle est indépendante de la fenêtre fille", "Elle partage tous les événements avec la fenêtre fille"],
        "BonneReponse": "Elle détourne tous les événements concernant la fenêtre fille pour les traiter",
        "Explication": "Une fenêtre propriétaire détourne tous les événements concernant la fenêtre fille pour les traiter."
    },
    {
        "question": "Quel type de nœud d'activité représente une émission d'un signal ?",
        "Reponses": ["Nœud d'action", "Nœud de contrôle", "Nœud objet", "Nœud de décision"],
        "BonneReponse": "Nœud d'action",
        "Explication": "Un nœud d'action peut représenter une émission d'un signal."
    },
    {
        "question": "Quel est un exemple de nœud d'objet dans un diagramme d'activités ?",
        "Reponses": ["Commande [validé]", "Emission d'un signal", "Passage d'une activité", "Transition automatique"],
        "BonneReponse": "Commande [validé]",
        "Explication": "Un exemple de nœud d'objet est une commande avec l'état [validé]."
    },
    {
        "question": "Quel élément est essentiel pour juger l'agencement et la cohérence des couleurs d'une fenêtre ?",
        "Reponses": ["Dessiner les fenêtres", "Décrire les transitions", "Lister les nœuds d'action", "Analyser les partitions"],
        "BonneReponse": "Dessiner les fenêtres",
        "Explication": "Dessiner les fenêtres est essentiel pour juger l'agencement et la cohérence des couleurs."
    },
    {
        "question": "Comment les fenêtres filles sont-elles affectées lorsqu'une fenêtre mère est déplacée ?",
        "Reponses": ["Toute sa descendance est déplacée avec elle en gardant les mêmes places relatives", "Les fenêtres filles deviennent indépendantes", "Les fenêtres filles se déplacent dans des directions aléatoires", "Les fenêtres filles restent fixes"],
        "BonneReponse": "Toute sa descendance est déplacée avec elle en gardant les mêmes places relatives",
        "Explication": "Si une fenêtre mère est déplacée, toute sa descendance est déplacée avec elle, en gardant les mêmes places relatives."
    },
    {
        "question": "Quel nœud d'activité est utilisé pour détecter l'arrivée d'un train dans un passage à niveau ?",
        "Reponses": ["Nœud d'action", "Nœud de contrôle", "Nœud d'objet", "Nœud de décision"],
        "BonneReponse": "Nœud d'action",
        "Explication": "Le nœud d'action est utilisé pour détecter l'arrivée d'un train."
    },
    {
        "question": "Quel nœud d'activité est responsable de l'abaissement de la barrière dans un passage à niveau ?",
        "Reponses": ["Nœud d'action", "Nœud de contrôle", "Nœud d'objet", "Nœud de décision"],
        "BonneReponse": "Nœud d'action",
        "Explication": "Le nœud d'action est responsable de l'abaissement de la barrière."
    },
    {
        "question": "Quel est le rôle des flèches haut et bas dans la boîte de dialogue SaisieNotes ?",
        "Reponses": ["Permettre de circuler dans la liste", "Changer la couleur de fond", "Augmenter et diminuer la note", "Modifier les paramètres de la boîte de dialogue"],
        "BonneReponse": "Permettre de circuler dans la liste",
        "Explication": "Les flèches haut et bas permettent de circuler dans la liste des étudiants."
    },
    {
        "question": "Quelle propriété n'est pas associée à une fenêtre secondaire dans une relation fonctionnelle ?",
        "Reponses": ["Elle est toujours confinée dans la fenêtre primaire", "Elle est issue d'un événement concernant la fenêtre primaire", "Elle peut avoir des fenêtres filles", "Elle est initiatrice de la fenêtre fille"],
        "BonneReponse": "Elle est toujours confinée dans la fenêtre primaire",
        "Explication": "Une fenêtre secondaire dans une relation fonctionnelle n'est pas nécessairement confinée dans la fenêtre primaire."
    },
    {
        "question": "Dans une interface utilisateur, comment les objets visuels sont-ils modélisés dans un diagramme UML ?",
        "Reponses": ["Sous forme d'objets du diagramme", "Sous forme de transitions", "Sous forme de partitions", "Sous forme de nœuds de contrôle"],
        "BonneReponse": "Sous forme d'objets du diagramme",
        "Explication": "Les objets visuels de l'interface utilisateur sont modélisés sous forme d'objets du diagramme."
    },
    {
        "question": "Quel élément d'un diagramme d'activités UML permet de modéliser une action spécifique d'un utilisateur ?",
        "Reponses": ["Nœud d'action", "Nœud de contrôle", "Nœud d'objet", "Transition"],
        "BonneReponse": "Nœud d'action",
        "Explication": "Un nœud d'action permet de modéliser une action spécifique d'un utilisateur."
    }
];

export default questions;