// ----------------------------------------------
// Importation de la connexion à la bdd
// ----------------------------------------------
const dataBase = require('../db/db-connect');

// ----------------------------------------------
// Création d'un constructeur pour la création et la mise à jour des enregistrements
// ----------------------------------------------
const ArticleConstructor = function (article) {
    this.id_article = article.id_article;
    this.titre = article.titre;
    this.contenu = article.contenu;
    this.id_auteur = article.id_auteur;
};

// ----------------------------------------------
// Récupérer tous les articles
// ----------------------------------------------
const getAllArticles = (result_bdd_request) => {
    dataBase.query("SELECT p.*, c.nom_auteur " +
        "FROM articles AS p " +
        "INNER JOIN auteurs AS c ON p.id_auteur = c.id_auteur", (error, response) => {
        if (error) {
            result_bdd_request(error);
        } else {
            result_bdd_request(null, response);
        }
    });
};

// ----------------------------------------------
// Récupérer un article par son ID
// ----------------------------------------------
const getArticleId = (ID, result_bdd_request) => {
    const query = "SELECT p.*, c.nom_auteur " +
        "FROM articles AS p " +
        "INNER JOIN auteurs AS c ON p.id_auteur = c.id_auteur " +
        "WHERE p.id_article = ?";
    dataBase.query(query, [ID], (error, response) => {
        if (error) {
            result_bdd_request(error);
        } else if (response.length) {
            result_bdd_request(null, response);
        } else {
            result_bdd_request({ kind: "id_not_found" });
        }
    });
};

// ----------------------------------------------
// Créer un nouvel article en base de données
// ----------------------------------------------
const createArticle = (nouveauArticle, result_bdd_request) => {
    const { titre, contenu, id_auteur } = nouveauArticle;
    const query = "INSERT INTO articles (titre, contenu, id_auteur) VALUES (?, ?, ?)";
    const values = [titre, contenu, id_auteur];
    dataBase.query(query, values, (error, response) => {
        if (error) {
            result_bdd_request(error);
        } else {
            result_bdd_request(null, response.insertId);
        }
    });
};

// ----------------------------------------------
// Mettre à jour un article par son ID
// ----------------------------------------------
const updateArticleId = (articleId, updatedData, result_bdd_request) => {
    const query = `UPDATE articles SET ? WHERE id_article = ?`;

    dataBase.query(query, [updatedData, articleId], (error, response) => {
        if (error) {
            result_bdd_request(error);
        } else if (response.affectedRows === 0) {
            result_bdd_request({ kind: "id_not_found" });
        } else {
            result_bdd_request(null, response);
        }
    });
};

// ----------------------------------------------
// Supprimer un article par son ID
// ----------------------------------------------
const deleteArticleId = (selectedID, result_bdd_request) => {
    dataBase.query("DELETE FROM articles WHERE id_article = ?", [selectedID], (error, response) => {
        if (error) {
            result_bdd_request(error);
        } else if (response.affectedRows === 0) {
            result_bdd_request({ kind: "id_not_found" });
        } else {
            result_bdd_request(null, response);
        }
    });
};

module.exports = {
    ArticleConstructor,
    getAllArticles,
    getArticleId,
    createArticle,
    updateArticleId,
    deleteArticleId,
};
