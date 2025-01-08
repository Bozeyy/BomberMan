const flashcardsNF16S2 = {
    "flashcards": [
        {
            "question": "Qu'est-ce que le modèle relationnel ?",
            "answer": "Le modèle relationnel est une représentation des données sous forme de tables, appelées relations, introduit par E.F. Codd en 1970."
        },
        {
            "question": "Quels sont les objectifs du modèle relationnel ?",
            "answer": "Les objectifs incluent l'indépendance des données vis-à-vis des programmes applicatifs et la résolution des problèmes de cohérence et de redondance."
        },
        {
            "question": "Qu'est-ce qu'une relation dans une base de données relationnelle ?",
            "answer": "Une relation est une table composée de tuples (lignes) et d'attributs (colonnes), décrivant des données structurées."
        },
        {
            "question": "Quelle est la différence entre une définition en extension et en intension d'une relation ?",
            "answer": "La définition en extension décrit les tuples présents, tandis que la définition en intension décrit le schéma de la relation, incluant ses attributs et leurs domaines."
        },
        {
            "question": "Qu'est-ce qu'une contrainte de domaine ?",
            "answer": "Une contrainte de domaine limite les valeurs autorisées pour un attribut, comme un salaire minimum ou des types de données."
        },
        {
            "question": "Qu'est-ce qu'une contrainte de clé ?",
            "answer": "Une contrainte de clé garantit que chaque tuple dans une relation est unique, identifié par un ensemble minimal d'attributs appelé clé primaire."
        },
        {
            "question": "Qu'est-ce qu'une contrainte d'intégrité référentielle ?",
            "answer": "Elle assure que les valeurs d'une clé étrangère font référence à des valeurs valides dans une autre relation."
        },
        {
            "question": "Quels sont les opérateurs principaux de l'algèbre relationnelle ?",
            "answer": "Ils incluent la restriction (sélection), la projection, le produit cartésien, la jointure, la division, et les opérations ensemblistes comme l'union et l'intersection."
        },
        {
            "question": "Qu'est-ce qu'une restriction en algèbre relationnelle ?",
            "answer": "La restriction (ou sélection) extrait les tuples d'une relation qui satisfont une condition donnée."
        },
        {
            "question": "Qu'est-ce qu'une projection en algèbre relationnelle ?",
            "answer": "La projection extrait certains attributs d'une relation, éliminant les doublons."
        },
        {
            "question": "Qu'est-ce que le produit cartésien en algèbre relationnelle ?",
            "answer": "C'est l'opération qui combine chaque tuple d'une relation avec chaque tuple d'une autre relation, produisant toutes les combinaisons possibles."
        },
        {
            "question": "Qu'est-ce qu'une jointure en algèbre relationnelle ?",
            "answer": "Une jointure combine deux relations en associant leurs tuples sur une condition commune."
        },
        {
            "question": "Qu'est-ce qu'une division en algèbre relationnelle ?",
            "answer": "La division trouve les tuples d'une relation qui sont associés à tous les tuples d'une autre relation."
        },
        {
            "question": "Qu'est-ce qu'une union ensembliste ?",
            "answer": "Une union combine les tuples de deux relations ayant des schémas compatibles, éliminant les doublons."
        },
        {
            "question": "Qu'est-ce qu'une intersection ensembliste ?",
            "answer": "Une intersection trouve les tuples communs entre deux relations ayant des schémas compatibles."
        },
        {
            "question": "Qu'est-ce qu'une différence ensembliste ?",
            "answer": "La différence retourne les tuples présents dans une relation mais pas dans l'autre."
        },
        {
            "question": "Qu'est-ce qu'une jointure naturelle ?",
            "answer": "Une jointure naturelle combine deux relations en éliminant les doublons sur les attributs communs."
        },
        {
            "question": "Qu'est-ce qu'une semi-jointure ?",
            "answer": "Une semi-jointure est une jointure qui retourne uniquement les attributs d'une seule relation."
        },
        {
            "question": "Qu'est-ce qu'une jointure externe ?",
            "answer": "Une jointure externe inclut les tuples non appariés en ajoutant des valeurs NULL."
        },
        {
            "question": "Comment exprime-t-on une restriction en notation algèbrique ?",
            "answer": "On utilise la notation \u03c3condition(relation), par exemple \u03c3ville='Paris'(ETUDIANT)."
        },
        {
            "question": "Comment exprime-t-on une projection en notation algèbrique ?",
            "answer": "On utilise la notation \u03a0attributs(relation), par exemple \u03a0nom,prénom(ETUDIANT)."
        },
        {
            "question": "Comment exprime-t-on une jointure en notation algèbrique ?",
            "answer": "On utilise la notation R \u25b7\u2a1dcondition S, par exemple ETUDIANT \u25b7\u2a1dETUDIANT.nSS=REUSSITE.nSS REUSSITE."
        },
        {
            "question": "Comment sont définies les clés dans une base relationnelle ?",
            "answer": "Les clés sont définies comme un ensemble minimal d'attributs permettant d'identifier un tuple de manière unique."
        },
        {
            "question": "Qu'est-ce qu'une clé candidate ?",
            "answer": "Une clé candidate est un ensemble d'attributs pouvant servir de clé primaire."
        },
        {
            "question": "Qu'est-ce qu'une clé primaire ?",
            "answer": "Une clé primaire est une clé candidate choisie pour identifier de manière unique les tuples d'une relation."
        },
        {
            "question": "Comment garantir l'intégrité référentielle ?",
            "answer": "En s'assurant que les clés étrangères référencent des valeurs valides dans une autre relation."
        },
        {
            "question": "Qu'est-ce qu'une contrainte d'intégrité sémantique ?",
            "answer": "Elle garantit la cohérence logique des données, par exemple salaire-sup > salaire-emp."
        },
        {
            "question": "Comment définit-on une relation en intension ?",
            "answer": "Une relation en intension est définie par son schéma, comprenant ses attributs et leurs domaines."
        },
        {
            "question": "Comment définit-on une relation en extension ?",
            "answer": "Une relation en extension est définie par l'ensemble des tuples qu'elle contient."
        },
        {
            "question": "Comment fonctionne une requête d'union en SQL ?",
            "answer": "Elle combine les résultats de deux requêtes SELECT, par exemple SELECT * FROM R1 UNION SELECT * FROM R2." 
        }
    ]
};

export default flashcardsNF16S2;
