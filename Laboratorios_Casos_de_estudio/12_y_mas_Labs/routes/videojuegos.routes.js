const express = require("express");
const router = express.Router();
const isAuth = require('../util/is-auth');
const fs = require ('fs');

const videojuegosController = require('../controllers/videojuego.controller');


//Primera ruta para los videojuegos
//Este es un middlewre
//Getters
router.get('/new', isAuth, videojuegosController.get_new);
router.get('/nuevo', isAuth, videojuegosController.get_new);
router.get('/add', isAuth, videojuegosController.get_new);
router.get('/git', isAuth, videojuegosController.get_git);
router.get("/RespuestasLab11", isAuth, videojuegosController.get_RespuestasLab11);
router.get("/Lab13_preguntas", isAuth, videojuegosController.get_Lab13);
router.get('/Lab17', isAuth, videojuegosController.get_Lab17);
//Esta ruta debe de ir hasta el final
router.get('/:videojuego_id', isAuth, videojuegosController.get_list);

//Metodos de Post
router.post('/new', isAuth, videojuegosController.post_new);
router.post('/nuevo', isAuth, videojuegosController.post_new);
router.post('/add', isAuth, videojuegosController.get_new);
router.use(isAuth, videojuegosController.get_list);

module.exports = router;