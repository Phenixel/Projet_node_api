// ----------------------------------------------
// Fonction pour récupérer tous les articles
// ----------------------------------------------

const ArticleModel = require('../models/article.model');

getAllArticles = (request, response) => {
    ArticleModel.getAllArticles((error, data) => {
        if (error)
            response.status(500).send({
                message:
                    error.message || "Une erreur est survenue en essayant de récupérer la table article."
            });
        else {
            response.send(data);
        }
    });
};

// ----------------------------------------------
// Fonction pour récupérer un article par son ID
// ----------------------------------------------

getArticleId = (request, response) => {
    ArticleModel.getArticleId(request.params.id, (error, data) => {
        if (error) {
            if (error.kind === "index_not_found") {
                response.status(404).send({
                    message: `L'id ${request.params.id} de la table article n'a pas été trouvé.`
                });
            } else {
                response.status(500).send({
                    message: `Une erreur est survenue lors de la récupération du article avec l'id ${request.params.id}.`
                });
            }
        } else {
            response.send(data);
        }
    });
};

// ----------------------------------------------
// Fonction pour créer un nouveau article
// ----------------------------------------------

const createArticle = (req, res) => {
    const nouveauArticle = {
        titre: req.body.titre,
        contenu: req.body.contenu,
        id_auteur: req.body.id_auteur
    };

    ArticleModel.createArticle(nouveauArticle, (error, articleId) => {
        if (error) {
            res.status(500).send({
                message: error.message || "Une erreur est survenue lors de la création du article."
            });
        } else {
            res.send({ id: articleId, ...nouveauArticle });
        }
    });
};

// ----------------------------------------------
// Fonction pour mettre à jour un article par son ID
// ----------------------------------------------

updateArticleId = (req, res) => {
    const articleId = req.params.id;
    const nouveauArticle = {
        titre: req.body.titre,
        contenu: req.body.contenu,
        id_auteur: req.body.id_auteur
    };

    ArticleModel.updateArticleId(articleId, nouveauArticle, (error, rowsAffected) => {
        if (error) {
            res.status(500).send({
                message: error.message || "Une erreur est survenue lors de la mise à jour du article."
            });
        } else {
            if (rowsAffected > 0) {
                res.send({ id: articleId, ...nouveauArticle });
            } else {
                res.status(404).send({
                    message: "Article non trouvé."
                });
            }
        }
    });
};

// ----------------------------------------------
// Fonction pour supprimer un article par son ID
// ----------------------------------------------

const deleteArticleId = (req, res) => {
    const articleId = req.params.id;

    ArticleModel.deleteArticleId(articleId, (error, rowsAffected) => {
        if (error) {
            res.status(500).send({
                message: error.message || "Une erreur est survenue lors de la suppression du article."
            });
        } else {
            if (rowsAffected >= 0) {
                res.send({ message: "Article supprimé avec succès" });
            } else {
                res.status(404).send({
                    message: "Article non trouvé "
                });
            }
        }
    });
};

// ----------------------------------------------
// Exportation des fonctions du contrôleur de articles
// ----------------------------------------------

module.exports = {
    getAllArticles, // Fonction pour obtenir tous les articles
    getArticleId,  // Fonction pour obtenir un article par son identifiant
    createArticle,  // Fonction pour créer un article
    updateArticleId, // Fonction pour mettre à jour un article par son id
    deleteArticleId,  // Fonction pour supprimer un article par son id
}
