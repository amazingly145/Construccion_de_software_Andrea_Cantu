//variables.js
//ejemplo JavaScript
// consola (log, info, warn, error, assert)
console.log("hola gamers!");
console.info("Esto es unformación");
console.warn("Esto es una advertencia");
console.error("Esto es un error");

//Compara valores
console.assert(1 == true);

//Compara valor y tipo de dato
console.assert(1 === true);

//-------------- variables, constantes -------------

// Forma antigua de declarar variables, no se recomienda
var videojuego_1 = "Minecraft";

// Forma moderna de declarar variables:
let videojuego_2 = "Halo";

//Constantes:
const precio = 55;













// Alcance de las variables
{
    var minecraft = "5 estrellas";
    let halo = "4 estrellas";

}

//la variable mnecraft sigue viviendo del ámbito en que fue declarada
console.log(minecraft);

//la línea lanza un error porque la variable halo, murió al terminar el ámbito en el que fue declarada
//console.log(halo);
//comentamos la liinea para que no salga el error

//javascript se ejecuta en la consola del navegador en html
//con javascript no puedo tener acceso al sistema de archivos de una computadora
//el ambito se limita a lo que tienes en el navegador 
//solo puedo tener acceso al navegador por medio de javascript

//--------------------------------alert, prompt, confirm
//alert
alert("Hola gamers!");
//prompt
const favorito = prompt("¿Cuál es tu videojuego favorito?");
console.log("Tu juego fvorito es: " + favorito); //se actualiza automaticamente

//console
const ganas_jugar=confirm("¿Tienes ganas de jugar?"); //devuelve un  true o false 

//debido a que regresa true o false no es necesario poner una condicional
if(ganas_jugar){
    console.log("¡A jugar!");
} else {
    console.log("A comer")
}

// funciones tradicionales
function is_precio() {
    return precio;
}

console.log(is_precio());

//funiones anonimas
/*function () {
    return true;
}*/

// funciones modernas
() => {} //siempre son anonimas 

//variiables pueden almacenar: funciones, booleanos, enteros y strings

const vidas = () => {
    console.log("Te quedan 3 vidas");
}

//solo se puede imprimir asi cuandoo la variable es una funcion
vidas();

const saludar = () => {console.log("hola")};
saludar();

//-------------------------------------arreglos
//los arreglos se declaran como constantes
//puedo modificar el arreglo pero no puedo cambair la localidad de memoria
//apuntador de solo lectura, una vez que le asignas el valor no se puede cambiar, no puedo cambiar el arregloS
const videojuegos = ["Minecraft"];
const jugadores = new Array();

//const arreglo = ["Elemento"];
videojuegos.push("Doom");

//null es una variable ccon valor nulo
//indefinido no tiene tipo de datos
//los arrays so hash tables 


//const arreglo = new Array() 


//arreglo.push("Otro elemento");


//arreglo[10] = "Uno más";


//arreglos asociativos
videojuegos["nintendo"] = "Mario Bros";

//i solo existe en el ciclo for
for(let i = 0; i <arreglo.length(); i++){
    console.log(videojuegos[i]);
}

//i existe fuera del ciclo for 
for(var i = 0; i <arreglo.length(); i++){
    console.log(videojuegos[i]);
}
console.log(i);

for(let juego in videojuegos){
    console.log(juego);
}
//recorrido tradicional del arreglo


//for (let i = 0; i < arreglo.length; i++) {


//    console.log(arreglo[i]);


//}


//recorridos alternativos del arreglo


//for(let posicion in arreglo) {


//    console.log(posicion);


//}
//---------------------Objetos
//Un objeto es una colección de atriibutos y valores
const objeto = {};
const videojuego = {
    nombre : "Minecraft",
    genero : "sandbox",
    plataforma : ["nintendo", "pc", "mobile"],
}

//en el proyecto usar un guia de estilo de javscript
// modificar html