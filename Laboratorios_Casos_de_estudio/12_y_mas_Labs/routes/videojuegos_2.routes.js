const express = require ("express");
const router = express.Router();
const fs = require ('fs');
const path = require ('path');
const videojuegosController = require('../controllers/videojuego.controller');


//CuartaRuta
router.get('/Lab10', videojuegosController.get_Lab10);

//Quinta ruta o middleware
router.get('/Lab6', videojuegosController.get_Lab6);

module.exports = router;