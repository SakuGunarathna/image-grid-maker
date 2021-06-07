const express = require('express');
const routes = require('../api/routes/v1');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');

/**
 * Express instance
 * @public
 */
const app = express();

app.use(bodyParser.json());
app.use(helmet());
app.use(cors());

app.use('/v1', routes);

module.exports = app;
