// ----------------------------------------------
// Importation du module de routage d'Express
// ----------------------------------------------

const router = require('express').Router();

// ----------------------------------------------
// Importation des fonctions du contrôleur de catégorie
// ----------------------------------------------

const {
    getAllArticles,
    getArticleId,
    createArticle,
    updateArticleId,
    deleteArticleId
} = require('../controllers/article.controller');



// ----------------------------------------------
//Annotation pour la documentation
// ----------------------------------------------
/**
 * @swagger
 * /articles:
 *   get:
 *     tags:
 *       - Article
 *     summary: Récupérer tous les articles.
 *     responses:
 *       200:
 *         description: Succès de la requête avec les articles récupérés.
 */
// ----------------------------------------------
// Définition de la route pour obtenir toutes les articles
// ----------------------------------------------

router.get('/', getAllArticles);


/**
 * @swagger
 * /articles/{id}:
 *   get:
 *     tags:
 *       - Article
 *     summary: Récupérer un article par ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du article à récupérer.
 *     responses:
 *       200:
 *         description: Succès de la requête avec le article récupéré.
 *       404:
 *         description: Le article avec l'ID spécifié n'a pas été trouvé.
 */

// ----------------------------------------------
// Définition de la route pour obtenir une article
// ----------------------------------------------
router.get('/:id', getArticleId);




/**
 * @swagger
 * /articles:
 *   post:
 *     tags:
 *       - Article
 *     summary: Créer un nouveau article.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Article'
 *     responses:
 *       200:
 *         description: Succès de la requête avec le article créé.
 *       400:
 *         description: Requête incorrecte, vérifiez les données fournies.
 */

// ----------------------------------------------
// Définition de la route pour créer un article
// ----------------------------------------------
router.post('/', createArticle);

/**
 * @swagger
 * /articles/{id}:
 *   put:
 *     tags:
 *       - Article
 *     summary: Mettre à jour un article.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du article à mettre à jour.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Article'
 *     responses:
 *       200:
 *         description: Succès de la requête avec le article mis à jour.
 *       400:
 *         description: Requête incorrecte, vérifiez les données fournies.
 *       404:
 *         description: Le article avec l'ID spécifié n'a pas été trouvé.
 */
// ----------------------------------------------
// Définition de la route pour mettre à jour un article
// ----------------------------------------------
router.put('/:id',updateArticleId );


/**
 * @swagger
 * /articles/{id}:
 *   delete:
 *     tags:
 *       - Article
 *     summary: Supprimer un article.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du article à supprimer.
 *     responses:
 *       200:
 *         description: Succès de la requête avec le article supprimé.
 *       404:
 *         description: Le article avec l'ID spécifié n'a pas été trouvé.
 */

// ----------------------------------------------
// Définition de la route pour supprimer un article
// ----------------------------------------------
router.delete('/:id', deleteArticleId);


// ----------------------------------------------
// Exportation du module de routage
// ----------------------------------------------
module.exports = router;
