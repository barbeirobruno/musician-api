const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());   // Adiciona o body-parser ao Express

module.exports = app;