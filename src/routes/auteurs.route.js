// ----------------------------------------------
// Importation du module de routage d'Express
// ----------------------------------------------

const router = require('express').Router();

// ----------------------------------------------
// Importation des fonctions du contrôleur de catégorie
// ----------------------------------------------

const {
    getAllAuteurs,
    getAuteurById,
    updateAuteur,
    createAuteur,
    deleteAuteur
} = require('../controllers/auteur.controller');

// ----------------------------------------------
//Annotation pour la documentation
// ----------------------------------------------
/**
 * @swagger
 * /auteurs:
 *   get:
 *     tags:
 *       - Auteur
 *     summary: Récupérer toutes les catégories.
 *     responses:
 *       200:
 *         description: Succès de la requête avec les catégories récupérées.
 */

// ----------------------------------------------
// Définition de la route pour obtenir toutes les catégories
// ----------------------------------------------

router.get('/', getAllAuteurs);

/**
 * @swagger
 * /auteurs/{id}:
 *   get:
 *     tags:
 *       - Auteur
 *     summary: Récupérer une catégorie par ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la catégorie à récupérer.
 *     responses:
 *       200:
 *         description: Succès de la requête avec la catégorie récupérée.
 *       404:
 *         description: La catégorie avec l'ID spécifié n'a pas été trouvée.
 */
// ----------------------------------------------
// Définition de la route pour obtenir une auteur
// ----------------------------------------------
router.get('/:id', getAuteurById);

/**
 * @swagger
 * /auteurs:
 *   post:
 *     tags:
 *       - Auteur
 *     summary: Créer une nouvelle catégorie.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Auteur'
 *     responses:
 *       200:
 *         description: Succès de la requête avec la catégorie créée.
 *       400:
 *         description: Requête incorrecte, vérifiez les données fournies.
 */
// ----------------------------------------------
// Définition de la route pourcréer une catégorie
// ----------------------------------------------
router.post('/', createAuteur);

/**
 * @swagger
 * /auteurs/{id}:
 *   put:
 *     tags:
 *       - Auteur
 *     summary: Mettre à jour une catégorie.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la catégorie à mettre à jour.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Auteur'
 *     responses:
 *       200:
 *         description: Succès de la requête avec la catégorie mise à jour.
 *       400:
 *         description: Requête incorrecte, vérifiez les données fournies.
 *       404:
 *         description: La catégorie avec l'ID spécifié n'a pas été trouvée.
 */
// ----------------------------------------------
// Définition de la route pour mettre à jour une auteur
// ----------------------------------------------
router.put('/:id', updateAuteur);

/**
 * @swagger
 * /auteurs/{id}:
 *   delete:
 *     tags:
 *       - Auteur
 *     summary: Supprimer une catégorie.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la catégorie à supprimer.
 *     responses:
 *       200:
 *         description: Succès de la requête avec la catégorie supprimée.
 *       404:
 *         description: La catégorie avec l'ID spécifié n'a pas été trouvée.
 */
// ----------------------------------------------
// Définition de la route pour supprimer une catégorie
// ----------------------------------------------
router.delete('/:id', deleteAuteur);


// ----------------------------------------------
// Exportation du module de routage
// ----------------------------------------------

module.exports=router;