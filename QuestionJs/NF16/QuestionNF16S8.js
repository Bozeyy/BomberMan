const flashcardsNF16S8 = {
    "flashcards": [
        {
            "question": "Qu'est-ce qu'une organisation indexée ?",
            "answer": "Une organisation indexée associe un fichier principal (ou de données) à un ou plusieurs fichiers d'index pour faciliter l'accès aux données."
        },
        {
            "question": "Qu'est-ce qu'un index dans une base de données ?",
            "answer": "Un index est un fichier trié, beaucoup plus petit que le fichier principal, contenant des valeurs d'un champ et des pointeurs vers les données correspondantes."
        },
        {
            "question": "Quels sont les avantages d'un index ?",
            "answer": "Il améliore l'efficacité des accès selon le champ d'indexation, réduisant le coût des recherches."
        },
        {
            "question": "Quels sont les inconvénients d'un index ?",
            "answer": "La mise à jour du fichier de données peut nécessiter des mises à jour fréquentes de l'index, augmentant les coûts de maintenance."
        },
        {
            "question": "Qu'est-ce qu'un index primaire ?",
            "answer": "Un index primaire repose sur un fichier ordonné, contenant des valeurs du champ clé et des pointeurs vers les blocs."
        },
        {
            "question": "Qu'est-ce qu'un index secondaire ?",
            "answer": "Un index secondaire est basé sur un champ qui n'ordonne pas le fichier principal et peut être dense ou non dense."
        },
        {
            "question": "Quelle est la différence entre un index dense et un index non dense ?",
            "answer": "Un index dense contient une entrée par enregistrement, tandis qu'un index non dense contient une entrée par bloc, avec la valeur maximale ou minimale du bloc."
        },
        {
            "question": "Qu'est-ce qu'un index de groupement (clustering index) ?",
            "answer": "C'est un index utilisé pour des fichiers triés selon un champ non clé, associant une valeur à un ensemble d'adresses."
        },
        {
            "question": "Quels sont les types d'index secondaires ?",
            "answer": "Les index secondaires peuvent être basés sur un champ clé ou un champ non clé."
        },
        {
            "question": "Comment fonctionne un index secondaire basé sur un champ clé ?",
            "answer": "Il associe chaque valeur du champ clé à un pointeur vers l'enregistrement correspondant dans le fichier principal."
        },
        {
            "question": "Comment fonctionne un index secondaire basé sur un champ non clé ?",
            "answer": "Il associe une valeur du champ d'indexation à une liste de pointeurs ou à un bloc de pointeurs vers les données correspondantes."
        },
        {
            "question": "Qu'est-ce qu'un index multi-niveaux ?",
            "answer": "C'est une hiérarchie d'index où un index au niveau supérieur pointe vers des index au niveau inférieur, permettant un accès plus rapide."
        },
        {
            "question": "Quels sont les avantages des index multi-niveaux ?",
            "answer": "Ils réduisent le coût des recherches en diminuant le nombre d'accès au disque, grâce à leur structure hiérarchique."
        },
        {
            "question": "Qu'est-ce qu'un arbre-B ?",
            "answer": "Un arbre-B est une structure équilibrée utilisée pour indexer des données, où chaque nœud interne contient entre p et 2p valeurs triées."
        },
        {
            "question": "Qu'est-ce qu'un arbre-B+ ?",
            "answer": "C'est une variante de l'arbre-B où les pointeurs de données sont situés uniquement dans les feuilles, qui sont chaînées pour un accès séquentiel rapide."
        },
        {
            "question": "Quels sont les avantages des arbres-B+ par rapport aux arbres-B ?",
            "answer": "Les arbres-B+ offrent des lectures séquentielles rapides et une meilleure gestion des mises à jour."
        },
        {
            "question": "Quels sont les inconvénients des arbres-B/B+ ?",
            "answer": "Ils nécessitent une gestion complexe pour les suppressions et peuvent entraîner une taille importante de l'index."
        },
        {
            "question": "Comment calcule-t-on le coût d'une recherche dans un index multi-niveaux ?",
            "answer": "Le coût est équivalent à la hauteur de l'arbre plus un accès au fichier principal (h + 1)."
        },
        {
            "question": "Qu'est-ce qu'un index partiel ?",
            "answer": "Un index partiel référence uniquement une partie des enregistrements du fichier, comme défini par une condition."
        },
        {
            "question": "Qu'est-ce qu'un index bitmap ?",
            "answer": "C'est un type d'index où les pointeurs sont représentés sous forme de chaînes de bits pour optimiser le stockage."
        },
        {
            "question": "Qu'est-ce qu'un index secondaire augmenté ?",
            "answer": "C'est un index secondaire où certains attributs des articles du fichier sont inclus directement dans l'index."
        },
        {
            "question": "Quels sont les critères pour choisir un type d'index ?",
            "answer": "Les critères incluent la fréquence des mises à jour, les types de requêtes, et les besoins en stockage."
        },
        {
            "question": "Qu'est-ce que la densité d'un index ?",
            "answer": "C'est le ratio entre le nombre de valeurs dans l'index et le nombre d'articles dans le fichier principal."
        },
        {
            "question": "Quels sont les avantages des organisations séquentielles indexées ?",
            "answer": "Elles offrent des recherches efficaces tout en permettant un accès séquentiel."
        },
        {
            "question": "Comment fonctionne une organisation séquentielle indexée régulière ?",
            "answer": "Elle utilise un index non dense sur un fichier trié, souvent organisé sous forme d'arbre-B+."
        },
        {
            "question": "Quels sont les défis de la mise à jour d'un fichier indexé ?",
            "answer": "Les mises à jour peuvent nécessiter des réorganisations coûteuses et des ajustements de l'index."
        },
        {
            "question": "Qu'est-ce qu'un fichier VSAM ?",
            "answer": "Un fichier VSAM (Virtual Storage Access Method) est une organisation séquentielle indexée utilisée dans les systèmes IBM."
        },
        {
            "question": "Qu'est-ce que le taux de chargement d'un index ?",
            "answer": "C'est le taux de remplissage maximal des pages du fichier, influençant les performances des insertions et suppressions."
        },
        {
            "question": "Quels sont les modes d'accès offerts par un index primaire ?",
            "answer": "Les accès incluent des recherches exactes, des plages de valeurs, et un accès séquentiel sans utiliser l'index."
        },
        {
            "question": "Qu'est-ce qu'une organisation séquentielle indexée dynamique ?",
            "answer": "C'est une organisation où les index et fichiers s'adaptent automatiquement aux changements de taille et de contenu." 
        }
    ]
};

export default flashcardsNF16S8;
