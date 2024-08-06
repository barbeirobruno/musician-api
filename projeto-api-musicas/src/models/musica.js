const db = require('../config/db');

class Musica {
  static async criar(nome, dataComposicao, link) {
    try {
      const query = 'INSERT INTO musicas (nome, data_composicao, link) VALUES (?, ?, ?)';
      const result = await db.query(query, [nome, dataComposicao, link]);
      return result.insertId;
    } catch (error) {
      throw new Error('Failed to create music');
    }
  }

  static async buscarPorId(id) {
    try {
      const query = 'SELECT * FROM musicas WHERE id = ?';
      const result = await db.query(query, [id]);
      return result[0];
    } catch (error) {
      throw new Error('Failed to fetch music by id');
    }
  }

  static async atualizar(id, nome, dataComposicao, link) {
    try {
      const query = 'UPDATE musicas SET nome = ?, data_composicao = ?, link = ? WHERE id = ?';
      const result = await db.query(query, [nome, dataComposicao, link, id]);
      return result.affectedRows > 0;
    } catch (error) {
      throw new Error('Failed to update music');
    }
  }
}
