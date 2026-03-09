exports.get_login = (request,response,next) => {
    response.render('login');
};

exports.post_login = (request,response,next) => {
    request.session.username = request.body.username;
    response.redirect("/videojuegos");

};

exports.get_logout = (request,response,next) => {
    request.session.destroy(() => {
        response.redirect('/users/login');
    });
};

exports.get_signup = (request,response,next) => {
    response.render('signup');
}

exports.post_signup = (request,response,next) => {
    request.session.name = request.body.name;
    response.redirect('/users/login');
}
