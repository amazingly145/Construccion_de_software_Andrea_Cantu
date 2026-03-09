const Videojuego = require('../models/videojuego.model');

const path = require('path');
exports.get_new = (request,response,next) => {
    response.render("new");
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
    response.redirect('/videojuegos')
};

exports.get_list = (request, response, next) => {
    response.render('list', {videojuegos: Videojuego.fetchAll()});
}