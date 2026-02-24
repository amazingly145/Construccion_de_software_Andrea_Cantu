const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

//Middleware
//registrar nuevo middleware
//nnext es una funcion que avanzas al siguiente middlware registrado
//responde.send para enviar la respuesta
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use("/new", (request,response,next) => {
    console.log("MiddleWare!"),
    console.send("Aqui vamos a registrar videojuegos")

})

app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.send('¡Hola mundo!'); //Manda la respuesta
});

app.listen(3000);