let questions = [
    {
        "question": "Quelle est l'une des composantes essentielles de l'architecture du système cognitif humain, analogue à un ordinateur ?",
        "Reponses": ["Processeur", "Clavier", "Écran", "Souris"],
        "BonneReponse": "Processeur",
        "Explication": "Le processeur est une composante essentielle du système cognitif humain, similaire à celui d'un ordinateur."
    },
    {
        "question": "Qui sont les auteurs du modèle du Processeur Humain de 1983 ?",
        "Reponses": ["Card, Moran, Newell", "Gard, Roman, Neumann", "Clark, Morgan, Newton", "Carson, Martin, Newman"],
        "BonneReponse": "Card, Moran, Newell",
        "Explication": "Le modèle du Processeur Humain a été développé par Card, Moran et Newell en 1983."
    },
    {
        "question": "Quelle est la durée approximative de stockage de l'information dans la mémoire sensorielle visuelle selon le modèle du processeur humain ?",
        "Reponses": ["200 ms", "1500 ms", "100 ms", "70 ms"],
        "BonneReponse": "200 ms",
        "Explication": "L'information visuelle est stockée environ 200 ms dans la mémoire sensorielle visuelle."
    },
    {
        "question": "Quel est le champ de fréquence du son audible par l'oreille humaine selon le modèle du processeur humain ?",
        "Reponses": ["20 à 16000 cycles/s", "1 à 100 Hz", "500 à 2000 Hz", "1000 à 10000 Hz"],
        "BonneReponse": "20 à 16000 cycles/s",
        "Explication": "Le champ de fréquence audible par l'oreille humaine va de 20 à 16000 cycles par seconde."
    },
    {
        "question": "Qu'est-ce que le modèle du processeur humain associe au sous-système moteur humain ?",
        "Reponses": ["Actions", "Perception", "Calcul", "Mémoire"],
        "BonneReponse": "Actions",
        "Explication": "Le sous-système moteur est associé aux actions dans le modèle du processeur humain."
    },
    {
        "question": "Quelle est l'une des caractéristiques du système perceptif humain selon le modèle du processeur humain ?",
        "Reponses": ["Très visible, peu accessible", "Peu visible, très accessible", "Très visible, très accessible", "Peu visible, peu accessible"],
        "BonneReponse": "Très visible, peu accessible",
        "Explication": "Le système perceptif humain est souvent très visible mais parfois peu accessible selon le modèle du processeur humain."
    },
    {
        "question": "Quelle est l'une des caractéristiques de la couleur rouge selon le modèle du processeur humain ?",
        "Reponses": ["Très visible, chaud", "Peu visible, froid", "Très visible, froid", "Peu visible, chaud"],
        "BonneReponse": "Très visible, chaud",
        "Explication": "La couleur rouge est très visible et perçue comme chaude selon le modèle du processeur humain."
    },
    {
        "question": "Quel est le principal goulot d'étranglement de notre système de traitement de l'information selon le modèle du processeur humain ?",
        "Reponses": ["Mémoire à court terme", "Mémoire à long terme", "Mémoire de travail", "Mémoire sensorielle"],
        "BonneReponse": "Mémoire à court terme",
        "Explication": "La mémoire à court terme est le principal goulot d'étranglement de notre système de traitement de l'information."
    },
    {
        "question": "Quel terme désigne la mémoire permanente avec capacité illimitée selon le modèle du processeur humain ?",
        "Reponses": ["Mémoire à long terme", "Mémoire de travail", "Mémoire sensorielle", "Mémoire épisodique"],
        "BonneReponse": "Mémoire à long terme",
        "Explication": "La mémoire à long terme est la mémoire permanente avec une capacité de stockage illimitée selon le modèle du processeur humain."
    },
    {
        "question": "Quelle est la principale fonction du sous-système cognitif humain selon le modèle du processeur humain ?",
        "Reponses": ["Résolution des problèmes", "Exécution des actions", "Réception des stimuli", "Stockage des connaissances"],
        "BonneReponse": "Résolution des problèmes",
        "Explication": "Le sous-système cognitif est principalement responsable de la résolution des problèmes dans le modèle du processeur humain."
    },
    {
        "question": "Quelle est la capacité de stockage de la mémoire de travail selon le modèle du processeur humain ?",
        "Reponses": ["7 ± 2 chunks", "5 ± 2 chunks", "10 ± 2 chunks", "3 ± 2 chunks"],
        "BonneReponse": "7 ± 2 chunks",
        "Explication": "La mémoire de travail a une capacité de stockage d'environ 7 ± 2 chunks selon le modèle du processeur humain."
    },
    {
        "question": "Quelle est la durée de stockage de l'information dans la mémoire de travail selon le modèle du processeur humain ?",
        "Reponses": ["7 à 73 secondes", "1 à 10 secondes", "5 à 15 secondes", "10 à 30 secondes"],
        "BonneReponse": "7 à 73 secondes",
        "Explication": "L'information est stockée entre 7 et 73 secondes dans la mémoire de travail selon le modèle du processeur humain."
    },
    {
        "question": "Qu'est-ce que l'homme est souvent supérieur à la machine selon Woodson et Conover (1978) ?",
        "Reponses": ["Improvisation et jugement", "Calculs complexes", "Répétition des actions", "Surveillance et contrôle"],
        "BonneReponse": "Improvisation et jugement",
        "Explication": "L'homme est souvent supérieur à la machine en termes d'improvisation et de jugement selon Woodson et Conover (1978)."
    },
    {
        "question": "Quel aspect rend souvent la machine supérieure à l'homme selon Woodson et Conover (1978) ?",
        "Reponses": ["Calculs complexes", "Surveillance et contrôle", "Répétition des actions", "Improvisation et jugement"],
        "BonneReponse": "Calculs complexes",
        "Explication": "Les calculs complexes sont souvent mieux effectués par la machine que par l'homme selon Woodson et Conover (1978)."
    },
    {
        "question": "Quel est l'objectif principal du concepteur selon le modèle d'activité de Norman (1986) ?",
        "Reponses": ["Faciliter le développement d'un modèle mental de l'utilisateur", "Optimiser la capacité de calcul de la machine", "Assurer la surveillance et le contrôle", "Améliorer la mémoire de travail"],
        "BonneReponse": "Faciliter le développement d'un modèle mental de l'utilisateur",
        "Explication": "L'objectif principal du concepteur est de faciliter le développement d'un modèle mental de l'utilisateur selon le modèle d'activité de Norman (1986)."
    },
    {
        "question": "Qu'est-ce que l'observation directe dans le contexte de la recherche d'information utilisateur ?",
        "Reponses": ["Méthode d'observation et enregistrement des utilisateurs", "Sondage des utilisateurs", "Analyse des données des utilisateurs", "Suivi des utilisateurs par GPS"],
        "BonneReponse": "Méthode d'observation et enregistrement des utilisateurs",
        "Explication": "L'observation directe consiste à observer et enregistrer les utilisateurs pour collecter des informations."
    }
]

export default questions;