const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const rutasVideojuegos = require ('./routes/videojuegos.routes');
const rutasVideojuegos2 = require ('./routes/videojuegos_2.routes');
app.use(rutasVideojuegos);
app.use( rutasVideojuegos2);

app.use((request,response,next) => {
  response.status(404).send("El videojuego no existe");
});

app.listen(3000);