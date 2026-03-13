//Obtenemos la base de datos
const db = require ('../util/database');
module.exports = class Videojuego {

    //Constructor de la clase. Sirve para crear un nuevo objeto, 
    // y en él se definen las propiedades del modelo
    constructor(mi_nombre, mi_imagen) {
        this.nombre = mi_nombre;
        this.imagen = mi_imagen;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute('INSERT INTO videojuegos(nombre,imagen) VALUES(?,?)',
            [this.nombre, this.imagen]);
    }

    //Obtenemos los datos de la base de datos
    static fetchAll() {
        return db.execute('SELECT * FROM videojuegos');
    }

    static fetchOne(id) {
        return db.execute('SELECT * FROM videojuegos');
    }

    static fetchOne(id) {
        if(id) {
            return this.fetchOne(id);
        } else {
            return this.fetchAll();
        }
    }

}