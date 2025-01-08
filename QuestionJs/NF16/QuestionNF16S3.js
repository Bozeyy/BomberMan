const flashcardsNF16S3 = {
    "flashcards": [
        {
            "question": "Qu'est-ce que le calcul relationnel ?",
            "answer": "Le calcul relationnel est un langage d'interrogation de données formel permettant d'exprimer des requêtes à l'aide de formules bien formées."
        },
        {
            "question": "Quels sont les deux types de calcul relationnel ?",
            "answer": "Les deux types de calcul relationnel sont le calcul relationnel de tuples et le calcul relationnel de domaines."
        },
        {
            "question": "Quelle est la principale différence entre le calcul relationnel et l'algèbre relationnelle ?",
            "answer": "Le calcul relationnel spécifie uniquement le résultat souhaité, tandis que l'algèbre relationnelle décrit comment obtenir ce résultat."
        },
        {
            "question": "Qu'est-ce qu'une variable tuple dans le calcul relationnel ?",
            "answer": "Une variable tuple est associée à une relation et représente un tuple dans cette relation."
        },
        {
            "question": "Qu'est-ce qu'une variable domaine dans le calcul relationnel ?",
            "answer": "Une variable domaine est associée à un attribut d'une relation et peut prendre une valeur du domaine de cet attribut."
        },
        {
            "question": "Quels sont les connecteurs logiques utilisés dans les langages prédicatifs ?",
            "answer": "Les connecteurs logiques incluent et (\u2227), ou (\u2228), négation (\u00ac), et implication (\u2192)."
        },
        {
            "question": "Quelle est la différence entre les quantificateurs universel et existentiel ?",
            "answer": "Le quantificateur universel (\u2200) signifie \"pour tout\", tandis que le quantificateur existentiel (\u2203) signifie \"il existe\"."
        },
        {
            "question": "Qu'est-ce qu'une formule bien formée dans les langages prédicatifs ?",
            "answer": "Une formule bien formée est une combinaison de formules atomiques, connecteurs logiques et quantificateurs respectant les règles syntaxiques."
        },
        {
            "question": "Qu'est-ce qu'une formule atomique ?",
            "answer": "Une formule atomique est une expression de la forme P(t1, t2, ..., tn), où P est un prédicat et les ti sont des termes."
        },
        {
            "question": "Pourquoi dit-on que le calcul relationnel est déclaratif ?",
            "answer": "Parce qu'il spécifie le résultat souhaité sans décrire comment ce résultat est obtenu."
        },
        {
            "question": "Quelle est la structure d'une requête dans le calcul relationnel de tuples ?",
            "answer": "Une requête prend la forme {t1.A1, t2.A2, ..., tn.An | condition(t1, t2, ..., tn)}."
        },
        {
            "question": "Quels sont les types de formules atomiques dans le calcul relationnel de tuples ?",
            "answer": "Les formules atomiques incluent R(ti), t1.A \u03b8 c, et t1.A \u03b8 t2.A, où \u03b8 est un opérateur de comparaison."
        },
        {
            "question": "Comment exprimer une requête pour trouver les employés dont le salaire est supérieur à 2000 ?",
            "answer": "{t.* | EMPLOYE(t) \u2227 t.salaire > 2000}."
        },
        {
            "question": "Quelle est la différence entre les relations R(ti) et t1.A \u03b8 t2.A dans les formules atomiques ?",
            "answer": "R(ti) exprime l'appartenance d'un tuple à une relation, tandis que t1.A \u03b8 t2.A compare des valeurs d'attributs."
        },
        {
            "question": "Quelle est la structure d'une requête dans le calcul relationnel de domaines ?",
            "answer": "Une requête prend la forme {x1, x2, ..., xn | condition(x1, x2, ..., xn)}."
        },
        {
            "question": "Comment associe-t-on les variables domaine aux attributs d'une relation ?",
            "answer": "Les variables domaine sont associées à des attributs et peuvent prendre des valeurs des domaines de ces attributs."
        },
        {
            "question": "Donnez un exemple de requête pour trouver les projets localisés dans une ville donnée.",
            "answer": "{x | PROJET(x) \u2227 x.localisation = 'Ville'}."
        },
        {
            "question": "Comment exprimer une requête pour obtenir le nombre d'employés distincts par département ?",
            "answer": "{x | EMPLOYE(x) \u2227 COUNT(x.ndpt)}."
        },
        {
            "question": "Comment le calcul relationnel est-il utilisé dans les SGBD ?",
            "answer": "Il sert de base à la formulation de requêtes en permettant de décrire ce que l'on souhaite extraire d'une base de données."
        },
        {
            "question": "Donnez un exemple d'application de l'interrogation de type QBE.",
            "answer": "Dans QBE, pour afficher les employés d'un département, on entre 'Recherche' dans la colonne nom-dpt et P. _PR _N _ADR dans les colonnes prénom, nom et adresse."
        }
    ]
};

export default flashcardsNF16S3;
