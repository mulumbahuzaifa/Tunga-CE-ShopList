const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');
const itemRouter = require('./routes/items');
const userRouter = require('./routes/user');
const middleware = require('./utils/middleware')
const bodyParser = require('body-parser');
const {connectToDatabase, db} = require('./config/database');
const logger = require('./utils/logger')
const morgan = require('morgan');

// connectToDatabase();

app.use(cors())
app.use(express.static('dist'))
app.use(express.json())
app.use(bodyParser.json());

app.use('/api/auth', userRouter);
app.use('/api', itemRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app