const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));

const rutasVideojuegos = require ('./routes/videojuegos.routes');
const rutastiendaSnoopy = require ('./routes/videojuegos_2.routes');
app.use(rutasVideojuegos);
app.use(rutastiendaSnoopy);

app.use((request,response,next) => {
  response.status(404).send("El videojuego no existe");
});

app.listen(3000);