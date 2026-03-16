module.exports = (request,response,next) => {
    const privilegios = request.session.privilegios || [];
    let continuar = true;
    for(let privilegio of privilegios){
        if(privilegio.privilegio == 'Visualizar videojuegos'){
            console.log("persona aceptada");
            continuar = false;
            return next();
        }
    }
    if(continuar) {
        console.log("No puedes entrar a la aplicacion")
        request.session.error = "No tienes privilegios para ver este recurso";
        return response.redirect('/users/login');
    }
}