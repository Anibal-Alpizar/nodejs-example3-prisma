const express = require('express');

const router = express.Router();

// controller con las accione de las rutas
const videojuegoController = require('../controllers/videojuego.controller.js');

// rutas
router.get('/', videojuegoController.get);
router.get("/:id", videojuegoController.getById) 

module.exports = router