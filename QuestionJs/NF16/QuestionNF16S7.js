const flashcardsNF16S7 = {
    "flashcards": [
        {
            "question": "Qu'est-ce qu'une base de données persistante ?",
            "answer": "Une base de données persistante est stockée sur des disques durs pour être utilisable sur une longue période."
        },
        {
            "question": "Quels sont les principaux dispositifs de stockage ?",
            "answer": "Les dispositifs incluent les mémoires volatiles comme la mémoire centrale et les mémoires non volatiles comme les disques durs et SSD."
        },
        {
            "question": "Quelle est la différence entre une mémoire volatile et non volatile ?",
            "answer": "La mémoire volatile perd ses données à l'extinction de l'ordinateur, tandis que la mémoire non volatile conserve les données."
        },
        {
            "question": "Qu'est-ce qu'un enregistrement dans une base de données ?",
            "answer": "Un enregistrement est une unité de manipulation contenant des champs correspondant à des attributs."
        },
        {
            "question": "Quelle est la structure générale d'un disque dur ?",
            "answer": "Un disque dur est composé de plateaux magnétiques, de pistes, de secteurs et de blocs."
        },
        {
            "question": "Qu'est-ce qu'un bloc dans le contexte du stockage ?",
            "answer": "Un bloc est l'unité de transfert entre le disque et la mémoire centrale, contenant un ou plusieurs enregistrements."
        },
        {
            "question": "Quels sont les différents formats d'enregistrements ?",
            "answer": "Les enregistrements peuvent être de longueur fixe ou variable selon les besoins."
        },
        {
            "question": "Qu'est-ce qu'une organisation de fichier ?",
            "answer": "C'est la manière dont les données sont disposées dans des fichiers, blocs et articles pour optimiser les opérations d'accès."
        },
        {
            "question": "Quels sont les types d'organisation de fichier ?",
            "answer": "Ils incluent l'organisation séquentielle, directe, et séquentielle indexée."
        },
        {
            "question": "Qu'est-ce qu'une organisation séquentielle non triée ?",
            "answer": "Les articles sont placés dans l'ordre d'insertion sans structure additionnelle, ce qui permet des insertions rapides."
        },
        {
            "question": "Quels sont les avantages d'une organisation séquentielle triée ?",
            "answer": "Elle permet des recherches efficaces via des algorithmes comme la recherche dichotomique."
        },
        {
            "question": "Qu'est-ce qu'une organisation directe ?",
            "answer": "C'est une organisation qui utilise une fonction de hachage pour localiser rapidement les articles."
        },
        {
            "question": "Qu'est-ce qu'une fonction de hachage ?",
            "answer": "C'est une fonction mathématique qui transforme une clé en une adresse de bloc."
        },
        {
            "question": "Quels sont les inconvénients du hachage statique ?",
            "answer": "Il peut provoquer un gaspillage d'espace disque ou des collisions si la capacité est mal ajustée."
        },
        {
            "question": "Qu'est-ce qu'un hachage dynamique ?",
            "answer": "Un hachage dynamique permet d'ajuster la taille du fichier en fonction de la croissance des données."
        },
        {
            "question": "Qu'est-ce qu'une organisation séquentielle indexée ?",
            "answer": "Elle combine un fichier principal trié et un index qui facilite l'accès aux données."
        },
        {
            "question": "Quels sont les avantages d'une organisation séquentielle indexée ?",
            "answer": "Elle améliore la recherche grâce à l'index et permet des opérations dynamiques."
        },
        {
            "question": "Quels sont les défis de la gestion des fichiers avec index ?",
            "answer": "Les mises à jour du fichier peuvent nécessiter des mises à jour de l'index, ce qui peut être coûteux."
        },
        {
            "question": "Quels sont les critères pour choisir une organisation de fichier ?",
            "answer": "Ils incluent la fréquence des insertions, des suppressions et des accès aléatoires ou séquentiels."
        },
        {
            "question": "Qu'est-ce qu'une clé primaire dans une organisation de fichier ?",
            "answer": "C'est un attribut ou un ensemble d'attributs qui identifient de manière unique un article."
        },
        {
            "question": "Qu'est-ce qu'une organisation secondaire ?",
            "answer": "Elle repose sur des structures additionnelles comme des index pour améliorer les opérations de recherche."
        },
        {
            "question": "Quels sont les différents types de stockage d'enregistrements ?",
            "answer": "Ils incluent les stockages étendus et non-étendus, selon que les articles peuvent ou non être répartis sur plusieurs blocs."
        },
        {
            "question": "Qu'est-ce que la gestion de l'espace libre dans un fichier ?",
            "answer": "Elle consiste à utiliser l'espace restant dans un bloc pour stocker des parties d'articles ou des pointeurs."
        },
        {
            "question": "Qu'est-ce qu'une allocation contiguë ?",
            "answer": "C'est une allocation où tous les blocs d'un fichier sont placés consécutivement sur le disque."
        },
        {
            "question": "Qu'est-ce qu'une allocation chaînée ?",
            "answer": "C'est une allocation où chaque bloc contient un pointeur vers le bloc suivant du fichier."
        },
        {
            "question": "Qu'est-ce qu'une allocation indexée ?",
            "answer": "Elle utilise des blocs d'index qui contiennent des pointeurs vers les blocs de données."
        },
        {
            "question": "Qu'est-ce qu'un facteur de blocage (bfr) ?",
            "answer": "C'est le nombre d'articles pouvant être stockés dans un bloc."
        },
        {
            "question": "Quels sont les avantages d'une allocation contiguë ?",
            "answer": "Elle permet des lectures rapides mais rend les insertions et suppressions complexes."
        },
        {
            "question": "Qu'est-ce qu'un fichier de données ?",
            "answer": "C'est une structure contenant des enregistrements qui sont manipulés par des SGBD."
        },
        {
            "question": "Quels sont les facteurs influençant le choix d'un stockage ?",
            "answer": "Ils incluent la taille des données, la fréquence d'accès et la nature des opérations."
        }
    ]
};

export default flashcardsNF16S7;
