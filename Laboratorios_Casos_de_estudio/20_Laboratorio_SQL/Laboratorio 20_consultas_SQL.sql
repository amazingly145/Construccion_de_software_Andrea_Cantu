/* Laboratorio 20 */
/* Abre una sesión de Analizador de Consultas y ejecuta cada una de las sentencias SQL. En el reporte incluye la sentencia, una muestra de la salida (dos o tres renglones) y el número de renglones que SQL Server reporta al final de la consulta.*/

/*1. Consulta de una tabla completa*/
/*SELECT * FROM materiales;*/

/*2. Selección */
/*SELECT * FROM materiales
WHERE clave = 1000;*/

/*3. Proyección 
SELECT clave, rfc, fecha FROM entregan;


SELECT * FROM materiales, entregan
WHERE materiales.clave = entregan.clave;*/

/*4. Reunión Natural
SELECT * FROM materiales,entregan
WHERE materiales.clave = entregan.clave;*/

/*5. Reunión con criterio específico
SELECT * FROM entregan, proyectos
WHERE entregan.numero <= proyectos.numero;*/

/*6. Unión se ilustra con selección
(SELECT * FROM entregan WHERE clave = 1450)
UNION
(SELECT * FROM entregan WHERE clave = 1300);

SELECT * FROM entregan WHERE clave = 1450 OR clave = 1300;*/

/*7. Intersección (se ilustra junto con selección y proyección)*/
/*(SELECT clave FROM entregan WHERE numero = 5001)
INTERSECT
(SELECT clave FROM entregan WHERE numero = 5018)*/

/*SELECT e1.clave 
FROM entregan e1
INNER JOIN entregan e2 ON e1.clave = e2.clave
WHERE e1.numero = 5001 AND e2.numero = 5018;*/

/* 8.Diferencia (se ilustra con selección ) */
/*(SELECT * FROM entregan)
MINUS
(SELECT * FROM entregan WHERE clave = 1000)*/

/*9. Producto cartesiano
SELECT * FROM materiales, entregan;*/

/*10. Construcción de consultas a partir de una especificación 
SELECT m.descripcion FROM materiales m, entregan e
WHERE m.clave = e.clave 
AND fecha > '1999-12-31' 
AND fecha < '2001-01-01';*/

/* 11.	Uso del calificador distinct*/
/*SELECT DISTINCT m.descripcion FROM materiales m, entregan e
WHERE m.clave = e.clave 
AND fecha > '1999-12-31' 
AND fecha < '2001-01-01';*/

/*12. Ordenamiento */
/*SELECT p.numero, p.denominacion, e.fecha, e.cantidad
FROM proyectos p, entregan e
WHERE p.numero = e.numero
ORDER BY p.numero ASC, e.fecha DESC;*/

/*13. Operadores de cadena */
/*SELECT * FROM materiales where Descripcion LIKE 'Si%'*/

/*SELECT CONCAT(descripcion + ', ' + precio) as precio_desc FROM materiales;*/

/*SELECT Numero FROM Entregan WHERE Numero LIKE '___6';*/

/*SELECT Clave,RFC,Numero,Fecha,Cantidad
FROM Entregan
WHERE Numero Between 5000 and 5010;*/

/*SELECT RFC,Cantidad, Fecha,Numero
FROM Entregan
WHERE Numero Between 5000 and 5010 AND
Exists ( SELECT RFC
FROM Proveedores
WHERE RazonSocial LIKE 'La%' and Entregan .RFC = Proveedores.RFC );*/

/*SELECT RFC,Cantidad, Fecha,Numero
FROM Entregan
WHERE Numero BETWEEN 5000 AND 5010 
AND RFC IN (SELECT RFC FROM Proveedores WHERE RazonSocial LIKE 'La%');*/

/*ALTER TABLE materiales ADD PorcentajeImpuesto NUMERIC(6,2);*/

/*SELECT 
    e.numero,
    e.clave,
    m.descripcion,
    e.cantidad,
    m.precio,
    m.PorcentajeImpuesto,
    e.cantidad * m.precio AS subtotal,
    e.cantidad * m.precio * (m.PorcentajeImpuesto / 100) AS importe_impuesto,
    e.cantidad * m.precio * (1 + m.PorcentajeImpuesto / 100) AS importe_total
FROM entregan e, materiales m
WHERE e.clave = m.clave;*/

/*SELECT m.clave, m.descripcion FROM materiales m, entregan e, proyectos p
WHERE m.clave =e.clave AND e.numero=p.numero AND p.denominacion = "Mexico sin ti no estamos completos"*/

/*SELECT m.clave, m.descripcion FROM materiales m
JOIN entregan e ON e.clave = m.clave
JOIN proveedores p ON p.rfc = e.rfc
WHERE p.razonsocial = "Acme tools" */

/*SELECT e.RFC, AVG(e.cantidad) AS promedio
FROM entregan e
WHERE e.fecha BETWEEN '2000-01-01' AND '2000-12-31'
GROUP BY e.RFC
HAVING AVG(e.cantidad) >= 300; */

/*SELECT e.clave, m.descripcion, SUM(e.cantidad) AS total_entregado
FROM entregan e, materiales m
WHERE e.clave = m.clave
AND e.fecha BETWEEN '2000-01-01' AND '2000-12-31'
GROUP BY e.clave, m.descripcion;*/

/*CREATE VIEW total_por_material AS
SELECT e.clave, SUM(e.cantidad) AS total_entregado
FROM entregan e
WHERE e.fecha BETWEEN '2001-01-01' AND '2001-12-31'
GROUP BY e.clave;*/

/*SELECT m.descripcion FROM materiales m
WHERE m.descripcion LIKE 'ub%'*/

/*SELECT p.denominacion, SUM(e.cantidad * m.precio) AS total_a_pagar
FROM proyectos p, entregan e, materiales m
WHERE p.numero = e.numero
AND e.clave = m.clave
GROUP BY p.numero, p.denominacion;*/

/*CREATE VIEW proveedores_televisa AS
SELECT p.denominacion, pr.RFC, pr.RazonSocial
FROM proyectos p, entregan e, proveedores pr
WHERE p.numero = e.numero
AND e.RFC = pr.RFC
AND p.denominacion = 'Televisa en acción';

CREATE VIEW proveedores_coahuila AS
SELECT pr.RFC
FROM proyectos p, entregan e, proveedores pr
WHERE p.numero = e.numero
AND e.RFC = pr.RFC
AND p.denominacion = 'Educando en Coahuila';

SELECT denominacion, RFC, RazonSocial
FROM proveedores_televisa
WHERE RFC NOT IN (SELECT RFC FROM proveedores_coahuila);*/

/*SELECT DISTINCT p.denominacion, pr.RFC, pr.RazonSocial
FROM proyectos p, entregan e, proveedores pr
WHERE p.numero = e.numero
AND e.RFC = pr.RFC
AND p.denominacion = 'Televisa en acción'
AND pr.RFC NOT IN (
    SELECT e2.RFC
    FROM proyectos p2, entregan e2
    WHERE p2.numero = e2.numero
    AND p2.denominacion = 'Educando en Coahuila'
);*/

/*SELECT DISTINCT m.clave, m.descripcion, m.precio
FROM proyectos p, entregan e, materiales m, proveedores pr
WHERE p.numero = e.numero
AND e.clave = m.clave
AND e.RFC = pr.RFC
AND p.denominacion = 'Televisa en acción'
AND pr.RFC IN (
    SELECT e2.RFC
    FROM proyectos p2, entregan e2
    WHERE p2.numero = e2.numero
    AND p2.denominacion = 'Educando en Coahuila'
);*/

SELECT pr.RazonSocial
FROM proveedores pr, entregan e
WHERE pr.RFC = e.RFC
GROUP BY pr.RFC, pr.RazonSocial
HAVING COUNT(DISTINCT e.clave) = (SELECT COUNT(*) FROM materiales);