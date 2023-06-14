// ----------------------------------------------
// Configuration du serveur
// ----------------------------------------------

const dotenv = require('dotenv');
const express = require('express');

// ----------------------------------------------
// Importation des modules de routage pour les articles, les catégories et la documentation swagger
// ----------------------------------------------

const articleRoute = require('./routes/articles.route');
const auteurRoute = require('./routes/auteurs.route');
const docRoute = require('./middleware/swagger.middleware')
const { serveSwagger, setupSwagger } = require('./middleware/swagger.middleware');



// ----------------------------------------------
// Configuration de l'environnement à partir du fichier .env
// ----------------------------------------------

dotenv.config();

// ----------------------------------------------
// Configuration du serveur pour prendre en charge les données JSON
// ----------------------------------------------

const server = express();
server.use(express.json());
server.set('json spaces', 2); // Configuration de l'indentation JSON pour rendre la sortie plus lisible
// server.use('/api/v1/docs',docRoute); // Configuration des routes pour la documentation Swagger
server.use('/api/v1/docs', serveSwagger, setupSwagger);

// Configuration des routes pour les articles et les catégories
server.use('/api/v1/articles', articleRoute);
server.use('/api/v1/auteurs', auteurRoute);


// ----------------------------------------------
// Route de base pour tester le fonctionnement du serveur
// ----------------------------------------------
server.get('/', (req, res) => {
    res.send('Hello, World!');
});

// ----------------------------------------------
// Configuration des routes supplémentaires pour les articles et les catégories
// ----------------------------------------------
server.use('/api/v1/articles/', articleRoute);
server.use('/api/v1/auteurs/', auteurRoute);
server.use('/api/v1/articles/', articleRoute);
server.use('/api/v1/auteurs/', auteurRoute);
server.use('/api/v1/articles/', articleRoute);
server.use('/api/v1/auteurs/', auteurRoute);
server.use('/api/v1/articles', articleRoute);
server.use('/api/v1/auteurs', auteurRoute);

// ----------------------------------------------
// Configuration du port d'écoute du serveur
// ----------------------------------------------


const port = Number(process.env.PORT || 8081);
server.listen(port, () => {
    console.log(`Your port is ${port}`);
});

module.exports=server; // Exportation du serveur pour une utilisation externe