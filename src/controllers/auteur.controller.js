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
    const id_auteur = req.params.id;
    const nouveauAuteur = {
        nom_auteur: req.body.nom_auteur
    };

    auteurModel.updateAuteur(id_auteur, nouveauAuteur, (error, rowsAffected) => {
        if (error) {
            // En cas d'erreur lors de la récupération des auteurs, renvoyer une réponse d'erreur avec un message approprié
            res.status(500).send({
                message: error.message || "Une erreur est survenue lors de la mise à jour de l'auteur"
            });
        } else {
            if (rowsAffected > 0) {
                // Si la mise à jour est réussie et des lignes ont été affectées, renvoyer les informations mises à jour de l'auteur
                res.send({ id: id_auteur, ...nouveauAuteur });
            } else {
                // Si l'auteur n'est pas trouvé, renvoyer une réponse d'erreur avec un message approprié
                res.status(404).send({
                    message: "Auteur non trouvé"
                });
            }
        }
    });
};

//
// const updateAuteur = (req, res) => {
//     const auteurId = req.params.id;
//     const nouveauAuteur = {
//         nom_auteur: req.body.nom_auteur
//     };
//
//     auteurModel.updateAuteur(auteurId, nouveauAuteur, (error, rowsAffected) => {
//         if (error) {
//             res.status(500).send({
//                 message: error.message || "Une erreur est survenue lors de la mise à jour de l'autheur"
//             });
//         } else {
//             if (rowsAffected > 0) {
//                 res.send({ id: auteurId, ...nouveauAuteur });
//             } else {
//                 res.status(404).send({
//                     message: "Autheur non trouvé"
//                 });
//             }
//         }
//     });
// };
// ----------------------------------------------
// Fonction pour créer une nouvelle catégorie
// ----------------------------------------------


const createAuteur = (req, res) => {
    const nouveauAuteur = {
        nom_auteur: req.body.nom_auteur
    };
    auteurModel.createAuteur(nouveauAuteur, (error, auteurId) => {
        if (error) {
            res.status(500).send({
                message: error.message || "Une erreur est survenue lors de la création de l'auteur"
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
                message: error.message || "Une erreur est survenue lors de la suppression de l'auteur"
            });
        } else {
            if (rowsAffected > 0) {
                res.send({ message: "Auteur supprimé avec succès" });
            } else {
                res.status(404).send({
                    message: "Auteur non trouvé"
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
    updateAuteur, // Fonction pour créer un auteur
    createAuteur, // Fonction pour mettre à jour un auteur par son identifiant
    deleteAuteur // Fonction pour supprimer un auteur par son id
};
