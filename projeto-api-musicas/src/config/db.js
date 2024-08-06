const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./data/musicas.db'); // Caminho para o arquivo do banco de dados

module.exports = db;
