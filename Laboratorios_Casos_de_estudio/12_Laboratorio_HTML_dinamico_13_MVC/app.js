const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

//Vistas
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
//Carpeta estática
app.use(express.static(path.join(__dirname, "public")));

//Rutas
const rutasVideojuegos = require('./routes/videojuegos.routes');
const tiendaSnoopy = require('./routes/videojuegos_2.routes');

app.use((request, response, next) => {
    console.log("Petición recibida: " + request.url);
    next(); // Esto permite que la petición continúe
});
//Las dos rutas de los dos archivos
//Primero va la tienda de Snoopy
//porque rutas videojuegos tiene exports.use que agarra lo ultimo
app.use('/videojuegos/Lab', tiendaSnoopy);
app.use('/videojuegos', rutasVideojuegos);


//Error 404
app.use((request, response, next) => {
    response.status(404).send("El videojuego no existe");
});

app.listen(3000);