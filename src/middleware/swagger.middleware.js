// ----------------------------------------------
// Importation de la lib pour générer le json swagger
// ----------------------------------------------
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// ----------------------------------------------
// Définition de l'architecture de base de la documentation
// ----------------------------------------------
const options = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "Blog NodeJs",
            version: "0.1.0",
            description: "Documentation node js",
        },
        servers: [
            {
                url: "http://localhost:8081/api/v1",
            },
        ],
        components: {
            schemas: {
                Article: {
                    type: "object",
                    properties: {
                        id_article: {
                            type: "integer",
                        },
                        titre: {
                            type: "string",
                        },
                        contenu: {
                            type: "string",
                        },
                        date_publication: {
                            type: "string",
                            format: "date-time",
                        },
                        id_auteur: {
                            type: "integer",
                        },
                    },
                },
                ArticleInput: {
                    type: "object",
                    properties: {
                        titre: {
                            type: "string",
                        },
                        contenu: {
                            type: "string",
                        },
                        date_publication: {
                            type: "string",
                            format: "date-time",
                        },
                        id_auteur: {
                            type: "integer",
                        },
                    },
                    required: ["titre", "contenu", "date_publication", "id_auteur"],
                },
                Auteur: {
                    type: "object",
                    properties: {
                        id_auteur: {
                            type: "integer",
                        },
                        nom_auteur: {
                            type: "string",
                        },
                        email: {
                            type: "string",
                        },
                    },
                },
                AuteurInput: {
                    type: "object",
                    properties: {
                        nom_auteur: {
                            type: "string",
                        },
                        email: {
                            type: "string",
                        },
                    },
                    required: ["nom_auteur", "email"],
                },
            },
        },
        tags: [
            // Ajoutez les tags ici
            {
                name: "Article",
                description: "Opérations liées aux articles",
            },
            {
                name: "Auteur", // Nom du tag pour les auteurs
                description: "Opérations liées aux auteurs",
            },
        ],
    },
    apis: ["./routes/*.js"],
};

// ----------------------------------------------
// Permet de trier dans la documentation par type de requête HTTP
// ----------------------------------------------
const specs = swaggerJsdoc(options);

const serveSwagger = swaggerUi.serve;
const setupSwagger = swaggerUi.setup(specs);

module.exports = { serveSwagger, setupSwagger };
