const express = require('express');
const router = express.Router();
const MusicasController = require('../controllers/musicas');

router.post('/', MusicasController.criar);
router.get('/:id', MusicasController.buscarPorId);
router.put('/:id', MusicasController.atualizar);
