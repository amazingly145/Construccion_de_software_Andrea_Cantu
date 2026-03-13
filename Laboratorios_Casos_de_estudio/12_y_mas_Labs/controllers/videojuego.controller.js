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
    console.log("Laboratorio 13")
};

exports.post_new = (request, response, next) => {
    const videojuego = new Videojuego(request.body.nombre, request.body.imagen);
    videojuego.save().then(() => {
        return response.redirect ('/videojuegos');
    }).catch ((error) => {
        console.log(error);
        next(error);
    })
};

exports.get_list = (request, response, next) => {
    console.log(request.params.videojuego_id);
    Videojuego.fetchAll(request.params.videojuego_id).then(([rows,fieldData]) => {
        console.log(request.session.username);
        console.log(rows);
        return response.render('list', {
            username: request.session.usename || '',
            videojuegos: rows,
        });
    }).catch((error) => {
        console.log(error);
        next(error);
    });
};

exports.get_Lab17 = (request,response,next) => {
    console.log("Laboratorio 17");
    response.render("RespuestasLab17");
};