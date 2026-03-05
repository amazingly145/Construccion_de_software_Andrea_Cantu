const express = require("express");
const router = express.Router();
const path = require('path');
const fs = require ('fs');

//Creamos el objeto de la clase videojuegos
const videojuegos = [
  {
    nombre: "Minecraft",
    imagen: "https://store-images.s-microsoft.com/image/apps.58378.13850085746326678.826cc014-d610-46af-bdb3-c5c96be4d22c.64287a91-c69e-4723-bb61-03fecd348c2a?q=90&w=480&h=270"
  },
  {
    nombre: "Gears of war",
    imagen: "https://upload.wikimedia.org/wikipedia/en/thumb/8/82/Gears_of_war_cover_art.jpg/250px-Gears_of_war_cover_art.jpg"
  },
];

//Primera ruta para los videojuegos
//Este es un middlewre
router.get('/Lab11',(request,response,next) => {
  response.render('new');
});

//tambie es un middleware
router.post('/videojuegos/Lab11', (request,response,next) => {
  //request.body contains all the data sent from the form when the post method is done
  //when a user fills up the form it is sent through the push method
  videojuegos.push(request.body);
  fs.writeFileSync('PostAnswer.txt', JSON.stringify(request.body));
  response.redirect('/videojuegos');
});

//Segunda ruta
//este es un middleware
router.get('/git',(request,response,next) => {
  response.render('git');

});

router.post('/videojuegos/git', (request,response,next) => {
  //request.body contains all the data sent from the form when the post method is done
  //when a user fills up the form it is sent through the push method
  response.redirect('/videojuegos');
});

//Tercera Ruta
router.get('/RespuestasLab11',(request, response, next) => {
    response.render('Respuestaslab11');
});

router.post('/videojuegos/RespuestasLab11', (request, response, next)  => {
    response.redirect('/videojuegos');

});

router.get('/', (request, response) => {
  response.render('list', { videojuegos: videojuegos });
});

module.exports = router;