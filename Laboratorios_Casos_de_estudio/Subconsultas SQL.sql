 /*Ejercicios 2*/
 /*1.- Actrices de “Las brujas de Salem”.*/
 /*SELECT Nombre
 FROM Elenco E, Actor A
 WHERE E.Nombre = A.Nombre
 AND A.Sexo = 'F' AND E.Titulo = 'Las brujas de Salem'*/
 
/*SELECT Nombre
FROM Elenco
WHERE Titulo = 'Las brrujas de Salem'
AND Nombre IN (SELECT Nombre
              FROM Actor
              WHERE Sexo = 'F')*/
/*2.- Nombres de los actores que aparecen en películas producidas por MGM en 1995.*/

/*SELECT Nombre FROM Elenco E
JOIN pelicula Pl ON Pl.titulo = E.titulo AND E.anio = Pl.anio
WHERE anio = 1995 AND nomestudio = 'MGM' */

/*SELECT Nombre FROM Elenco E
WHERE anio = 1995
AND Titulo IN (SELECT Titulo
               FROM Pelicula P
               WHERE nomestudo = 'MGM')*/
               
 /*3.- Películas que duran más que “Lo que el viento se llevó” (de 1939).*/

/*SELECT titulo
FROM Pelicula
WHERE duracion > (SELECT duracion
                  FROM pelicula
                  WHERE titulo = 'Lo que el viento se llevó'
                  AND anio = 1939)*/
/*4.- Productores que han hecho más películas que George Lucas.*/
/*SELECT Pr.nombre, COUNT (Pr.id_productor)
FROM Productor Pr
JOIN Pelicula Pl IN Pl.idproductor = Pr.idproductor
HAVING COUNT(idproductor) > COUNT(SELECT COUNT(idproductor)
         FROM productor PR
         JOIN Pelicula Pl ON
         Pr.id_productore = Pl.id.productor
         WHERE Pr.nombre = 'George Lucas') */
/*5.- Nombres de los productores de las películas en las que ha aparecido Sharon Stone.*/

SELECT nombre
FROM Productores Pr, Pelicula Pl
WHERE Pr.id_prductor = Pl.id_productor AND Pl.titulo IN (SELECT E.titulo
                                                         FROM elenco E
                                                         WHERE E.nombre = 'Sharon Stone');
SELECT pr.nombre
FROM productor pr
INNER JOIN pelicula pl ON pr.idproductor=P.idproductor
INNER JOIN elenco e ON pl.titulo=e.titulo AND pl.anio=e.anio
WHERE e.nombre = 'Sharon Stone';