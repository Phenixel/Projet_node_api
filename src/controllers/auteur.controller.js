// ----------------------------------------------
// Instance et appele du model pour chaque fonction
// ----------------------------------------------
const auteurModel = require('../models/auteur.model');


// ----------------------------------------------
// Fonction pour récupérer toutes les catégories
// ----------------------------------------------
const getAllAuteurs = (req, res) => {
    auteurModel.getAllAuteurs((error, data) => {
        if (error) {
            res.status(500).send({
                message: error.message || "Une erreur est survenue en essayant de récupérer les autheurs"
            });
        } else {
            res.send(data);
        }
    });
};
// ----------------------------------------------
// Fonction pour récupérer une catégorie par ID
// ----------------------------------------------

const getAuteurById = (req, res) => {
    const auteurId = req.params.id;

    auteurModel.getAuteurById(auteurId, (error, auteur) => {
        if (error) {
            res.status(500).send({
                message: error.message || "Une erreur est survenue en essayant de récupérer l'autheur"
            });
        } else {
            if (auteur) {
                res.send(auteur);
            } else {
                res.status(404).send({
                    message: "autheur non trouvé"
                });
            }
        }
    });
};
// ----------------------------------------------
// Fonction pour mettre à jour une catégorie
// ----------------------------------------------


const updateAuteur = (req, res) => {
    const auteurId = req.params.id;
    const nouveauAuteur = {
        nom_categ: req.body.nom_categ
    };

    auteurModel.updateAuteur(auteurId, nouveauAuteur, (error, rowsAffected) => {
        if (error) {
            res.status(500).send({
                message: error.message || "Une erreur est survenue lors de la mise à jour de l'autheur"
            });
        } else {
            if (rowsAffected > 0) {
                res.send({ id: auteurId, ...nouveauAuteur });
            } else {
                res.status(404).send({
                    message: "Autheur non trouvé"
                });
            }
        }
    });
};
// ----------------------------------------------
// Fonction pour créer une nouvelle catégorie
// ----------------------------------------------


const createAuteur = (req, res) => {
    const nouveauAuteur = {
        nom_categ: req.body.nom_categ
    };
    auteurModel.createAuteur(nouveauAuteur, (error, auteurId) => {
        if (error) {
            res.status(500).send({
                message: error.message || "Une erreur est survenue lors de la création de l'autheur"
            });
        } else {
            res.send({ id: auteurId, ...nouveauAuteur });
        }
    });
};
// ----------------------------------------------
// Fonction pour supprimer une catégorie
// ----------------------------------------------

const deleteAuteur = (req, res) => {
    const auteurId = req.params.id;

    auteurModel.deleteAuteur(auteurId, (error, rowsAffected) => {
        if (error) {
            res.status(500).send({
                message: error.message || "Une erreur est survenue lors de la suppression de l'autheur"
            });
        } else {
            if (rowsAffected > 0) {
                res.send({ message: "Autheur supprimé avec succès" });
            } else {
                res.status(404).send({
                    message: "Autheur non trouvé"
                });
            }
        }
    });
};
// ----------------------------------------------
// Exportation des fonctions du contrôleur de auteur
// ----------------------------------------------

module.exports = {
    getAllAuteurs,  // Fonction pour obtenir tous les auteurs
    getAuteurById, // Fonction pour obtenir un auteur par son identifiant
    updateAuteur, // Fonction pour créer un auteurs
    createAuteur, // Fonction pour mettre à jour un categoris par son identifiant
    deleteAuteur // Fonction pour supprimer un auteur par son id
};
