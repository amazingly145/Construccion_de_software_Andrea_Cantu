console.log("hola desde node!");

//Creas un archivo de texto en la carpeta
const filesystem = require('fs');

filesystem.writeFileSync("hola.txt", "Hola desde node");

setTimeout(() => {
    console.log("jojo te hackie");
},1500);

const html = ```<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Título</title>
</head>
<body>
    <!-- Contenido -->
</body>
</html>```

const arreglo = [5000,60,90,100,10,20,10000,0,120,2000,340,1000,50];
//cuando pasan 5000 milisegundos se imprime el 5000
//cuando pasa 20 miliseegundos se imprime el 20

/*const imprimir = (valor) => {
    console.log(valor);
}*/

for(let item of arreglo){
    setTimeout(() => {
        console.log(item); //se imprime el item
    }, item);
}

//Segunda manera
/*for(let item of arreglo){
    setTimeout(() => {
        imprimir(item); //se imprime el item
    }, item);
}*/

//Programar un servidor web
//Servidor web que recibe una petición y regresa una respuesta
const http = require('http');
//Cualquier peticion que llegue regresa un html
const server = http.createServer((request, response) => {
    console.log(request);
    console.log(request.url);
    //console.log(response);
    response.end();
    response.setHeader("Content-Type", "text/html");
    response.write("");

});

server.listen(3000);

