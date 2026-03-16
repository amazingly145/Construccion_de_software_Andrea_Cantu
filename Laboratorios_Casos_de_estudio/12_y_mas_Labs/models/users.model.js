//Los modelos hacen la comunicacion con la base de datos

const db = require ('../util/database');
const bcrypt = require ('bcrypt');

module.exports = class User {
    constructor(mi_username, mi_password, mi_nombre, mi_email){
        this.username = mi_username;
        this.password = mi_password;
        this.nombre = mi_nombre;
        this.email = mi_email;
    }
    save(){
        //aqui se hace el cifrador
        return bcrypt.hash(this.password, 12).then((password_cifrado) => {
            return db.execute("INSERT INTO users(username,password,nombre,email) VALUES (?,?,?,?)",
            [this.username, password_cifrado, this.nombre, this.email]);
        }).catch((error) => {
            console.log(error);
            next (error);
        });
    }
    static fetchOne(username){
        return db.execute("SELECT * FROM users WHERE username=?", [username]);

    }

    static getPrivilegios(username) {
        return db.execute(
            `SELECT privilegio FROM tiene t, roles r, otorga o, privilegios p
            WHERE id_usuario=? AND t.id_rol=r.id AND r.id=o.id_rol AND o.id_privilegio=p.id`,
            [username]);
    }
}