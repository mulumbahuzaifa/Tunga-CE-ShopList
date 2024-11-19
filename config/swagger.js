const swaggerJSDoc = require('swagger-jsdoc');

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Shopping List API',
      description: 'API for managing shopping lists',
      version: '1.0.0'
    },
    host: 'localhost:3000',
    basePath: '/'
  },
  apis: ['./routes/*.js']
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

module.exports = swaggerSpec;