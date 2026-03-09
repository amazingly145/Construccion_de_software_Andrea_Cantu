const Videojuego = require('../models/videojuego.model');

const path = require('path');
exports.get_new = (request,response,next) => {
    response.render("new", {
        username: request.session.username,
    });
};

exports.get_git = (request,response,next) => {
    console.log("git");
    response.render("git");
};

exports.get_RespuestasLab11 = (request, response, next) => {
    response.render("Respuestaslab11");
};

//videojuegos_2.routes
exports.get_Lab10 = (request,response,next) => {
    console.log("Attempting to Snoopy");
    response.sendFile(path.join(__dirname, '..', 'old_labs', 'index.html'))
};

exports.get_Lab6 = (request, response, next) =>{
    console.log("Attempting to serve index.html");
    const filePath = path.join(__dirname,'..','old_labs','lab6.html');
    response.sendFile(filePath);
};

exports.get_Lab13 = (request, response, next) => {
    response.render("Lab13_preguntas");
}
exports.post_new = (request, response, next) => {
    const videojuego = new Videojuego(request.body.nombre, request.body.imagen);
    videojuego.save();
    //Laboratorio 14: cookies
    //response.setHeader('Set-Cookie', `ultimo_juego=${videojuego.nombre}; Secure`);
    response.redirect('/videojuegos')
};

exports.get_list = (request, response, next) => {
    //Laboratorio 14: cookies
    //console.log(request.get('Cookie')); //Obtener los valores de una cookie
    response.render('list', {
        username: request.session.username,
        videojuegos: Videojuego.fetchAll(),
    });
}