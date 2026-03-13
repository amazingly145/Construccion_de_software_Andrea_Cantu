const express = require("express");
const router = express.Router();
const fs = require ('fs');

const videojuegosController = require('../controllers/videojuego.controller');


//Primera ruta para los videojuegos
//Este es un middlewre
//Getters
router.get('/new', videojuegosController.get_new);
router.get('/nuevo', videojuegosController.get_new);
router.get('/add', videojuegosController.get_new);
router.get('/git', videojuegosController.get_git);
router.get("/RespuestasLab11", videojuegosController.get_RespuestasLab11);
router.get("/Lab13_preguntas",videojuegosController.get_Lab13);
router.get('/Lab17', videojuegosController.get_Lab17);
//Esta ruta debe de ir hasta el final
router.get('/:videojuego_id', videojuegosController.get_list);

//Metodos de Post
router.post('/new',videojuegosController.post_new);
router.post('/nuevo', videojuegosController.post_new);
router.post('/add', videojuegosController.get_new);
router.use(videojuegosController.get_list);

module.exports = router;