const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const rutasVideojuegos = require("./routes/videojuegos.routes");
app.use("/videojuegos", rutasVideojuegos);
//recibe una funcion anonima que tiene request y response

app.use((request,response,next) =>{
  response.status(404).send("El videojuego no existe");
});
app.listen(3000);

/*console.log("hola desde node!");

const filesystem = require('fs');

filesystem.writeFileSync('hola.txt', 'Hola desde node');

setTimeout(() => {
    console.log("jojo te hackié");
}, 15000);

const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000, 50];

for (let item of arreglo) {
    setTimeout(() => {
        console.log(item);
    }, item);
}*/ 


/*//request es la peticion que estamos pidiendo
//response es la respuesta
const server = http.createServer( (request, response) => {    
//    console.log(request);
    console.log(request.url);
//   console.log(response);
    if(request.url="/"){
        response.setHeader('Content-Type', 'text/html');
        response.write(html);
        response.end();
    } else if (request.url="/new"){
        response.setHeader('Content-Type', 'text/html');
        response.write("Aqui va una forma");
        console.log("Ruta /new");

    } else {
        response.setHeader('Content-Type', 'text/html');
        response.write("Error 404");
        console.log("404");
    }
});

//el puerto que queremos que esta esscuchando
server.listen(3000);*/

