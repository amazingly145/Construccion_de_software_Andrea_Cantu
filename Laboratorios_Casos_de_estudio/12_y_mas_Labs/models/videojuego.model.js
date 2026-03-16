//Obtenemos la base de datos
const db = require ('../util/database');
module.exports = class Videojuego {

    //Constructor de la clase. Sirve para crear un nuevo objeto, 
    // y en él se definen las propiedades del modelo
    constructor(mi_nombre, mi_imagen, mi_tipo) {
        this.nombre = mi_nombre;
        this.imagen = mi_imagen;
        this.tipo = mi_tipo;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute('INSERT INTO videojuegos(nombre,imagen,id_tipo) VALUES(?,?,?)',
            [this.nombre, this.imagen,this.tipo]);
    }

    //Obtenemos los datos de la base de datos
    static fetchAll() {
        return db.execute('SELECT v.nombre, v.imagen, t.nombre as tipo FROM videojuegos v, tipo t WHERE v.id_tipo = t.id');
    }

    static fetchOne(id) {
        return db.execute('SELECT v.nombre AS nombre, v.imagen, t.nombre as tipo FROM videojuegos v, tipo t WHERE v.id_tipo = t.id AND id = ?', [id]);
    }

    static fetchOne(id) {
        if(id) {
            return this.fetchOne(id);
        } else {
            return this.fetchAll();
        }
    }

    static getTipos(){
        return db.execute("SELECT * FROM tipo");
    }

}