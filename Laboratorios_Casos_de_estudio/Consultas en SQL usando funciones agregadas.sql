/*Ejercicio 1*/

/* Ejercicio 1 */
/* El ingreso total recibido por cada actor, sin importar en cuantas películas haya participado.*/

/*SELECT Nombre, SUM(Sueldo) 
FROM Elenco AS El
GROUP BY Nombre
ORDER BY SUM(Sueldo) DESC*/

/*Ejercicio 2
 El monto total destinado a películas por cada Estudio Cinematográfico, durante la década de los 80's. */
/*SELECT nomestudio, SUM(presupuesto) AS "Monto total"
FROM Películaproyectos
WHERE año BETWEEN 1980 AND 1990
GROUP BY nomestudio
ORDER BY SUM(presupuesto) DESC*/

/*Ejercicio 3
 Nombre y sueldo promedio de los actores (sólo hombres) que reciben en promedio un pago superior a 5 millones de dolares por película.*/
 /*
SELECT nombre, AVG(sueldo) AS 'Promedio de Suelos'
FROM Actores AS Ac, Elenco AS El
WHERE El.nombre = Ac.nombre
AND Ac.sexo = "Male"
GROUP BY Ac.nombre
HAVING AVG(sueldo) > 5000000
ORDER BY AVG(sueldo) DESC */

/* GROUP BY Para datos repetidos */
/*Ejercicio 4
Título y año de producción de las películas con menor presupuesto. (Por ejemplo, la película de Titanic se ha producido en varias veces entre la lista de películas estaría la producción de Titanic y el año que fue filmada con menor presupuesto). */

/*SELECT titulo, año, MIN(presupuesto) as'Presupuesto min de peliculas'
FROM Pelicula AS Pl
GROUP BY titulo
ORDER BY MIN(presupuesto) ASC */




/*Ejercicio 5
 Mostrar el sueldo de la actriz mejor pagada.*/
 /*SELECT MAX(sueldo) AS 'Max pagada'
 FROM Elenco AS El, Actor Ac 
 WHERE El.nombre = Ac.nombre AND ac.sexo = "female" */