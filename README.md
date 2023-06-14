# API pour la gestion des articles et des auteurs

Cette API permet de gérer les articles et les auteurs dans une base de données. Elle fournit des endpoints pour effectuer des opérations telles que la récupération de tous les articles, la création d'un nouvel article, la mise à jour d'un article existant, la suppression d'un article, ainsi que des opérations similaires pour les auteurs.

## Configuration requise

Avant d'utiliser cette API, assurez-vous d'avoir les éléments suivants :

- Node.js installé (version 16.17.0)
- Une base de données MySQL ou un autre système de gestion de base de données compatible

## Installation

1. Clonez ce dépôt de code sur votre machine :

```bash
git clone git@github.com:Phenixel/Projet_node_api.git
```

2. Accédez au répertoire du projet :

````bash
cd src
````

3. Installez les dépendances nécessaires à l'aide de npm :

````bash
npm install 
````

4. Configurez la connexion à votre base de données dans le fichier db-connect.js.

5. Démarrez l'API :

````bash
npm start
````

L'API sera maintenant accessible à l'adresse http://127.0.0.1:8081/api/v1.

## Utilisation
L'API fournit les endpoints suivants :

- GET /articles : Récupère tous les articles.
- GET /articles/:id : Récupère un article par son ID.
- POST /articles : Crée un nouvel article.
- PUT /articles/:id : Met à jour un article.
- DELETE /articles/:id : Supprime un article.
- GET /auteurs : Récupère tous les auteurs.
- GET /auteurs/:id : Récupère un auteur par son ID.
- POST /auteurs : Crée un nouvel auteur.
- PUT /auteurs/:id : Met à jour un auteur.
- DELETE /auteurs/:id : Supprime un auteur.

Remplacez :id par l'ID de l'article ou de l'auteur concerné dans les URL.

## Exemples de requêtes
Récupérer tous les articles :
````bash
http://127.0.0.1:8081/api/v1/articles
````

Récupérer un article par son ID :
````bash
http://127.0.0.1:8081/api/v1/articles/1
````

Créer un nouvel article :
````bash
POST http://127.0.0.1:8081/api/v1/articles
Content-Type: application/json

{
  "nom_article": "Mon article",
  "prix": 10.99,
  "legende": "Ceci est un article",
  "image": "image.jpg",
  "nom_categ": "Ma catégorie"
}
````

Mettre à jour un article existant :
````bash
PUT http://127.0.0.1:8081/api/v1/articles
Content-Type: application/json

{
  "nom_article": "Nouveau nom"
}
````

Supprimer un article :
````bash
DELETE http://127.0.0.1:8081/api/v1/articles/1
````

## Contribuer
Les contributions à cette API sont les bienvenues. Si vous souhaitez apporter des améliorations, veuillez suivre les étapes suivantes :

1. Forker le projet
2. Créer une nouvelle branche (git checkout -b feature/nouvelle-fonctionnalité)
3. Effectuer les modifications nécessaires
4. Valider les modifications (git commit -am 'Ajouter une nouvelle fonctionnalité')
5. Pousser les modifications vers la branche (git push origin feature/nouvelle-fonctionnalité)
6. Ouvrir une pull request
