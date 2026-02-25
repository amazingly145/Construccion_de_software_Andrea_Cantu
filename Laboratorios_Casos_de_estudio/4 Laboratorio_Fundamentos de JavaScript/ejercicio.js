console.log ("Laboratorio 4: Fundamentos de JavaScript");
console.info("Este es el Labortorio 4");
console.warn("Esto es una advertencia");

//Funciones generales que se usan en todos los ejercicios
function recorrer_Arreglo(arreglo){
    for(var i = 0; i < arreglo.length; i++){
    console.log(arreglo[i]);
    }
}


/*Ejercicio 1:
Entrada: numero pedido con un prompt
Salida: Una tabla con los numeros del 1 al numero dado con sus cuadrados y cubos
Utiliza document.write para producir la salida*/

function organizar_tabla(e1){
    let numeros = new Array();
    for(let i = 1; i <= e1; i++){
        numeros.push(i);
    }
    return numeros;
}

function cuadrados(numeros, meta){
    for(let i = 1; i <= meta; i++){
        numeros.push(i * i);
    }
    return numeros;
}

function cubos(numeros, meta){
    for(let i = 1; i <= meta; i++){
        numeros.push(i * i * i);
    }
    return numeros;
}

console.log("Ejercicio 1.A: de 1 a N");
const e1 = prompt("Escribe un numero entero positivo");
console.log("Escogiste el numero: " + e1);
const arreglo_e1 = organizar_tabla(e1);
console.log(recorrer_Arreglo(arreglo_e1));

console.log("Ejercicio 1.B: cuadrados de 1 a N");
console.log(recorrer_Arreglo(cuadrados(arreglo_e1, e1)));
console.log("Ejercicio 1.C: los cubos de 1 a N");
console.log(recorrer_Arreglo(cubos(arreglo_e1, e1)));

/*Ejercicio 2
Entrada: Usando un prompt se pide el resultado de la suma de 2 números generados de manera aleatoria. 
Salida: La página debe indicar si el resultado fue correcto o incorrecto, 
y el tiempo que tardó el usuario en escribir la respuesta.
*/

function random_sum (total){
    let a = Math.random();
    let b = Math.random();
    if (a + b == total) {
        console.log("El resultado es correcto")
        return true;
    } else {
        console.log("El resultado es incorrecto")
        return false;
    }
}

console.log("Ejercicio 2: Suma de dos números aleatorios");
const e2 = prompt("Escribe el resultado de la suma de dos números aleatorios");
console.log(random_sum(e2));

/*Ejercicio 3
Parámetros: Un arreglo de números.
Salida: La cantidad de números negativos en el arreglo, 
la cantidad de 0's, y la cantidad de valores mayores a 0 en el arreglo */

function contador (arreglo){
    let respuesta = new Array();
    let contador_neg = 0;
    let contador_ceros = 0;
    let contador_pos = 0;
    for ( let i = 0; i < arreglo.length; i++ ){
        if (arreglo[i] > 0){
            contador_pos ++;
        } else if (arreglo[i] < 0){
            contador_neg ++;
        } else if (arreglo[i] == 0){
            contador_ceros++;
        }
    }
    respuesta.push(contador_neg);
    respuesta.push(contador_ceros);
    respuesta.push(contador_pos);

    return respuesta;
}

var arreglo_e2 = [20, 300, -10, 4,
            0, 565, -90, -100,
            896, -300, 50, 0];

console.log("Ejercicio 3: Arreglo de números");
const temp_e2 = contador (arreglo_e2);
console.log("El total de números negativos son: " + temp_e2[0]);
console.log("La cantidad total de ceros es: " + temp_e2[1]);
console.log("La cantidad de números positivos mayores a cero son: " + temp_e2[2]);

/* Ejercicio 4
Parámetros: Un arreglo de números
Salida: Un arreglo con los promedios de cada uno de los renglones de una matriz*/

function promedio (arreglo){
    var promedio = 0;
    var contador = 0;
    let respuesta = new Array();
    for (let i = 0; i < arreglo.length; i++){
        promedio = 0;
        contador = 0;
        for(let j = 0; j < arreglo[i].length; j++){
            promedio += arreglo[i][j]
            contador ++;
        }
        promedio = promedio / contador;
        respuesta.push(promedio);
    }
    return respuesta;
}

console.log("Ejercicio 4: promedio de cada renglón de una matriz");
var arreglo_e4 = [[4, 5, 6, 7],
                 [120, 4, 300, 8],
                 [20, 50, 45]];
console.log("A continuacion, se muestra el promedio de cada renglón de una matriz");
recorrer_Arreglo(promedio(arreglo_e4));

/*Ejercicio 5
Entrada: Un número
Salida: Un número con sus dígitos en orden inverso */
function inverso (num) {
    let answer = new Array();
    for(let i = num.length; i >= 0; i--){
        answer.push(num[i]);
    }
    return answer;
}
console.log("Ejercicio 5: Inverso de un número/dígito");
let e5 = prompt("Escribe un número de dos o más dígitos");
console.log("El numero en inverso es el siguiente");
console.log("Impresión como arreglo");
recorrer_Arreglo(inverso(e5));
console.log("Impresión como string/entero");
console.log(inverso(e5).join(""));

/*Ejercicio 6
Aplicación de ejercicio: sistema de tareas
*/

// Sistema de tareas
const tarea = {
    //atributos 
    nombre : [],
    materia : [],
    calificacion : [],
    tareas : [],
    //metodos
    agregar_tarea: function(variable) {
        this.nombre.push(variable);
    },
    calificar : function(nota){
        this.calificacion.push(Number(nota));
    },
    asignar_materia : function (materias){
        this.materia.push(materias);
    },
    verificar_calificacion : function (){
        for (let i = 0; i < this.calificacion.length; i++){
            if (this.calificacion[i] == 100){
                console.log("¡Felicidades! Vas muy bienn" );
            } else if (this.calificacion[i] < 100 && this.calificacion[i] > 69){
                console.log("¡Muy bien, lo estas logrando");
            } else if (this.calificacion[i] <= 69){
                console.log("¡Cuidado! Necesitamos mejorar")
            }
        }
    },
    promedio : function () {
        let promedio = 0;
        let contador = 0;
        if (this.calificacion.length === 0) {
        console.log("No hay calificaciones registradas");
        return 0;
        }

        for (let i = 0; i < this.calificacion.length; i++){
            promedio += this.calificacion[i];
            contador ++;
        }
        
        promedio = promedio / contador;
        return promedio;
    },
    asignar_tarea : function () {
        this.tareas.push(this.nombre);
        this.tareas.push(this.materia);
        this.tareas.push(this.calificacion);
    }
}

console.log("Ejercicio 6: Sistema de Tareas");
console.log("Vamos a revisar cómo vas en tu Semestre");

var e6;
let num_tareas = prompt ("Escribe cuantas tareas has hecho: ")
tarea.agregar_tarea (num_tareas);
console.log("Ahora vamos a revisar si vas bien o no, ¿Cuántas tareas has hecho?" + num_tareas);
while(num_tareas > 0){
    e6 = prompt("Nombre de tarea: ");
    e6 = tarea.agregar_tarea;
    e6 = prompt("Calificación:");
    tarea.calificar(e6);
    e6 = prompt("Materia: " );
    tarea.asignar_materia(e6);
    num_tareas--;
}

console.log("Ahora vamos a revisar tu promedio");
console.log("Por ahora llevas un promedio de: " + tarea.promedio());
console.log("En termino de calificaciones");
tarea.verificar_calificacion();

