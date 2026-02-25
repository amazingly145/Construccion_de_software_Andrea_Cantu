//Ejercicio 1
/*Una función que reciba un arreglo de números y devuelva su promedio.*/
function arreglo_promedio (arreglo){
    let promedio = 0;
    for (let i = 0; i < arreglo.length; i++){
        promedio += arreglo[i];
    }
    return promedio/arreglo.length;
}

const arreglo = [4, 5, 6, 7, 120, 4, 300, 8, 20, 50, 45];
console.log("Laboratorio 8: Introducción a Backend");
console.log("Ejercicio 1: promedio de un arreglo");
console.log("Siendo el arreglo: [4, 5, 6, 7, 120, 4, 300, 8, 20, 50, 45]");

console.log("El promedio del arreglo es: " + arreglo_promedio(arreglo));

//Ejercicio 2
/* Una función que reciba un string y escriba el string en un archivo de texto. Apóyate del módulo fs. */
const filesystem = require("fs");

filesystem.writeFileSync("salida.txt","Hola desde Node");

//Ejercicio 3
/* Escoge algún problema que hayas implementado en otro lenguaje de programación, 
y dale una solución en js que se ejecute sobre node. */
/*Find Max Consecutive Ones: LeetCode Problem*/

let array_ones_answer = [1,1,0,1,1,1];
function findMaxConsecutiveOnes (array_ones){
    let contador = 0;
    let maximo = 0;
    let found;
    for(let i = 0; i < array_ones.length; i++){
        if(array_ones[i] == 1){
            contador++;
            if(contador>maximo){
                maximo = contador;
            }
        } else {
            contador = 0;
        }
    }
    return maximo;
}
console.log("Ejercicio 3: Unos consecutivos de array");
console.log("Contador de uno: " + findMaxConsecutiveOnes (array_ones_answer));

//Ejercicio 4
const http = require('http');
const server = http.createServer((request,response) => {
    console.log(request.url);
    const html = filesystem.readFileSync( "index.html", "utf-8");
    response.setHeader('Content-Type', 'text/html');
    response.write(html);
    response.end();
})

server.listen(3000);

