const dataBase = require('../db/db-connect');

// ----------------------------------------------
// Constructeur de l'objet Auteur
// ----------------------------------------------
const AuteurConstructor = function (auteur){
    this.id_auteur = auteur.id_auteur;
    this.nom_auteur = auteur.nom_auteur;
};

// ----------------------------------------------
// Récupération de tous les auteurs
// ----------------------------------------------
const getAllAuteurs = (result_bdd_request) => {
    dataBase.query("SELECT * FROM auteurs", (error, response) => {
        if (error) {
            result_bdd_request(error);
        } else {
            result_bdd_request(null, response);
        }
    });
};

// ----------------------------------------------
// Récupération d'un auteur par ID
// ----------------------------------------------
const getAuteurById = (id, result_bdd_request) => {
    dataBase.query("SELECT * FROM auteurs WHERE id_auteur = ?", [id], (error, response) => {
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
// Mise à jour d'un auteur
// ----------------------------------------------
// const updateAuteur = (id, auteur, result_bdd_request) => {
//     const { nom_auteur } = auteur;
//     const query = "UPDATE auteurs SET nom_auteur = ? WHERE id_auteur = ?";
//     dataBase.query(query, [nom_auteur, id], (error, response) => {
//         if (error) {
//             result_bdd_request(error);
//         } else {
//             result_bdd_request(null, response.affectedRows);
//         }
//     });
// };

updateAuteur = (id, auteur, result_bdd_request) => {
    const { nom_auteur } = auteur;
    const query = "UPDATE auteurs SET nom_auteur = ? WHERE id_auteur = ?";
    dataBase.query(query, [nom_auteur, id], (error, response) => {
        if (error) {
            result_bdd_request(error);// Renvoyer une erreur en cas d'erreur lors de la requête
        } else {
            result_bdd_request(null, response.affectedRows);// Renvoyer le résultat de la requête
        }
    });
};

// ----------------------------------------------
// Création d'un nouvel auteur
// ----------------------------------------------
const createAuteur = (nouveauAuteur, result_bdd_request) => {
    const { nom_auteur } = nouveauAuteur;
    const query = "INSERT INTO auteurs (nom_auteur) VALUES (?)";
    dataBase.query(query, [nom_auteur], (error, response) => {
        if (error) {
            result_bdd_request(error);
        } else {
            result_bdd_request(null, response.insertId);
        }
    });
};

// ----------------------------------------------
// Suppression d'un auteur
// ----------------------------------------------
const deleteAuteur = (id, result_bdd_request) => {
    dataBase.query("DELETE FROM auteurs WHERE id_auteur = ?", [id], (error, response) => {
        if (error) {
            result_bdd_request(error);
        } else if (response.affectedRows === 0) {
            result_bdd_request({ kind: "id_not_found" });
        } else {
            result_bdd_request(null, response.affectedRows);
        }
    });
};

module.exports = {
    AuteurConstructor,
    getAllAuteurs,
    getAuteurById,
    updateAuteur,
    createAuteur,
    deleteAuteur
};
