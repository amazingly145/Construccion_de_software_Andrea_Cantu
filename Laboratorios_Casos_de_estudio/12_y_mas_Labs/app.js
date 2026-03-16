const session = require('express-session');
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const csrf = require('csurf');
const cookieParser = require('cookie-parser');
app.use(cookieParser());

//Laboratorio 14: cookies, uso de las librerias
app.use(session({
    secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

//Vistas
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
//Carpeta estática
app.use(express.static(path.join(__dirname, "public")));

//Proteccion de las rutas
const csrfProtection = csrf();
app.use(csrfProtection);

//middleware para csrfProtection
app.use((request, response, next) => {
    response.locals.csrfToken = request.csrfToken(),
    response.locals.username = request.session.username,
    response.locals.isLoggedIn = request.session.isLoggedIn,
    next();
})
//Rutas
const rutasVideojuegos = require('./routes/videojuegos.routes');
const tiendaSnoopy = require('./routes/videojuegos_2.routes');
const rutasUsuarios = require('./routes/users.routes');

app.use((request, response, next) => {
    console.log("Petición recibida: " + request.url);
    next(); // Esto permite que la petición continúe
});
//Las dos rutas de los dos archivos
//Primero va la tienda de Snoopy
//porque rutas videojuegos tiene exports.use que agarra lo ultimo
app.use('/videojuegos/Lab', tiendaSnoopy);
app.use('/users', rutasUsuarios);
app.use('/videojuegos', rutasVideojuegos);

//Error 404
app.use((request, response, next) => {
    response.status(404).send("El videojuego no existe");
});
//Laboratrorio 17
//Agregamos la variable del error con error.stack
//Error 500
app.use((error,request, response, next) => {
    response.status(500).send(`Error interno del servidor: ${error.stack}`);
});

app.listen(3000);