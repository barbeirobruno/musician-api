const Musica = require('../models/musica');

class MusicasController {
  static async criar(req, res) {
    const { nome, dataComposicao, link } = req.body;
    const musica = await Musica.criar(nome, dataComposicao, link);
    res.status(201).json(musica);
  }

  static async atualizar(req, res) {
    const { nome, dataComposicao, link } = req.body;
    const musica = await Musica.atualizar(nome, dataComposicao, link);
    res.status(200).json(musica);
  }
  static async buscarPorId(req, res) {
    const { nome, dataComposicao, link } = req.body;
    const musica = await Musica.buscarPorId(nome, dataComposicao, link);
    res.status(200).json(musica);
  }
}

module.exports = MusicasController;