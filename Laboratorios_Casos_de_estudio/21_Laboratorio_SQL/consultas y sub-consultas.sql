/*Laboratrio 21*/
/*1. La suma de las cantidades e importe total de todas las entregas realizadas durante el 97.*/
/*SELECT SUM(Cantidad) AS "Total de unidades",
SUM(Cantidad*(precio+Impuesto)) AS 'Importe Total'
FROM Materiales AS M INNER JOIN Entregan E
ON M.Clave = E.clave
WHERE Fecha Between '01/01/1997' AND '31/12/1997';*/

/*2. Para cada proveedor, obtener la razón social del proveedor, número de entregas e importe total de las entregas realizadas.*/
/*SELECT P.RazonSocial, SUM(E.cantidad * (M.Precio + M.Impuesto)) AS TotalCosto, COUNT(E.Clave) AS TotalEntregas
FROM Materiales M, Proveedores P, Entregan E
WHERE P.rfc = E.rfc
  AND E.clave = M.clave
GROUP BY P.RazonSocial;*/

/*3. Por cada material obtener la clave y descripción del material, la cantidad total entregada, la mínima cantidad entregada, la máxima cantidad entregada, el importe total de las entregas de aquellos materiales en los que la cantidad promedio entregada sea mayor a 400.*/

/*SELECT M.clave, M.descripcion, SUM(E.cantidad) AS total_entregado, MIN(E.cantidad) AS min_entregado, MAX(E.cantidad) AS max_entregado, SUM(E.cantidad * (M.Precio + M.Impuesto)) AS importe_total
FROM Materiales M, Entregan E
WHERE M.Clave = E.Clave
GROUP BY M.clave, M.descripcion
HAVING AVG(E.cantidad) > 400;*/

/*4. Para cada proveedor, indicar su razón social y mostrar la cantidad promedio de cada material entregado, detallando la clave y descripción del material, excluyendo aquellos proveedores para los que la cantidad promedio sea menor a 500.*/

/*SELECT P.rfc, P.razonsocial, M.clave, M.descripcion, AVG(E.cantidad) AS promedio_cantidad
FROM Proveedores P, Entregan E, Materiales M
WHERE P.rfc = E.rfc 
AND E.clave = M.clave
GROUP BY P.rfc, P.razonsocial, M.clave, M.descripcion
HAVING AVG(E.cantidad) >= 500;*/


/*5. Mostrar en una solo consulta los mismos datos que en la consulta anterior pero para dos grupos de proveedores: aquellos para los que la cantidad promedio entregada es menor a 370 y aquellos para los que la cantidad promedio entregada sea mayor a 450.*/

/*SELECT P.rfc, P.razonsocial, M.clave, M.descripcion, AVG(E.cantidad) AS promedio_cantidad
FROM Proveedores P, Entregan E, Materiales M
WHERE P.rfc = E.rfc 
AND E.clave = M.clave
GROUP BY P.rfc, P.razonsocial, M.clave, M.descripcion
HAVING AVG(E.cantidad) < 370 OR AVG(E.cantidad) > 450;*/

/*6. Clave y descripción de los materiales que nunca han sido entregados.*/
/*SELECT Clave, Descripcion FROM materiales
WHERE Clave NOT IN
(SELECT Clave FROM Entregan);*/

/*7.Razón social de los proveedores que han realizado entregas tanto al proyecto 'Vamos México' como al proyecto 'Querétaro Limpio'.*/

/*SELECT P.razonsocial
FROM Proveedores P
WHERE P.rfc IN (
    SELECT E.rfc
    FROM Entregan E, Proyectos Pr
    WHERE E.numero = Pr.numero
    AND Pr.denominacion = 'Vamos México'
)
AND P.rfc IN (
    SELECT E.rfc
    FROM Entregan E, Proyectos Pr
    WHERE E.numero = Pr.numero
    AND Pr.denominacion = 'Querétaro Limpio'
);*/

/*SELECT P.razonsocial
FROM Proveedores P
JOIN Entregan E ON P.rfc = E.rfc
JOIN Proyectos Pr ON E.numero = Pr.numero
WHERE Pr.denominacion IN ('Vamos México', 'Querétaro Limpio')
GROUP BY P.rfc, P.razonsocial
HAVING COUNT(DISTINCT Pr.denominacion) = 2;*/


/*8. Descripción de los materiales que nunca han sido entregados al proyecto 'CIT Yucatán'.*/

/*SELECT M.descripcion
FROM Materiales M
WHERE M.clave NOT IN (
    SELECT E.clave
    FROM Entregan E
    JOIN Proyectos Pr ON Pr.numero = E.numero
    WHERE Pr.denominacion = 'CIT Yucatán'
);*/


/*9. Razón social y promedio de cantidad entregada de los proveedores cuyo promedio de cantidad entregada es mayor al promedio de la cantidad entregada por el proveedor con el RFC 'VAGO780901'.*/

/*SELECT P.razonsocial, AVG(E.cantidad) AS promedio
FROM Proveedores P, Entregan E
WHERE P.rfc = E.rfc
GROUP BY P.rfc, P.razonsocial
HAVING AVG(E.cantidad) > (
    SELECT AVG(E2.cantidad)
    FROM Entregan E2
    WHERE E2.rfc = 'VAGO780901'
);*/

/*10. Mostrar en una solo consulta los mismos datos que en la consulta anterior pero para dos grupos de proveedores: aquellos para los que la cantidad promedio entregada es menor a 370 y aquellos para los que la cantidad promedio entregada sea mayor a 450.*/

/*SELECT P.razonsocial, AVG(E.cantidad) AS promedio
FROM Proveedores P, Entregan E
WHERE P.rfc = E.rfc
GROUP BY P.rfc, P.razonsocial
HAVING AVG(E.cantidad) < 370
   OR AVG(E.cantidad) > 450; */