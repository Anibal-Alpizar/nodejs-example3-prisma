const express = require('express');

const router = express.Router();

// controller con las accione de las rutas
const videojuegoController = require('../controllers/videojuego.controller.js');
const ordenes = require('../controllers/orden.controller.js');  

// rutas
router.get('/', videojuegoController.get);
router.get("/:id", videojuegoController.getById) 

router.get('/', ordenes.get);
router.get("/:id", ordenes.getById)

module.exports = router