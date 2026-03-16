module.exports = (request, response, next) => {
    let continuar = true;
    const privilegios = request.session.privilegios || [];
    for (let privilegio of privilegios) {
        if (privilegio.privilegio == 'editar roles y privilegios') {
            continuar = false;
            return next();
        }
    }
    if (continuar) {
        request.session.error = "No tienes privilegios para este recurso, el incidente ha sido reportado.";
        return response.redirect('/users/login');
    }
}