const express = require("express");
const router = express.Router();
const fs = require ('fs');

//Laboratorio / ejercicio en clase de los videojuegos
const html_header = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Hello Bulma!</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.4/css/bulma.min.css">
  </head>
  <body>
  <section class="section">
    <div class="container">
      <h1 class="title">
        Videojuegos
      </h1>
      <p class="subtitle">
        My first website with <strong>Bulma</strong>!
      </p>
`;

const html_footer = `
      </div>
    </section>
  <!--script src="js/comportamientos.js"></script-->
  </body>
</html>  
`;

//Tenemos que tener cuidado con los links con los que referenciamos cada boton
//para poder regresar a la pagina que se desea.
const html_form = `
<!--We have to be careful with the link -->
<form action="/videojuegos/Lab11" method="POST">
  <div class="field">
    <label for="nombre" class="label">Nombre</label>
    <div class="control">
      <input id="nombre" name="nombre" class="input" type="text" placeholder="e.g Minecraft">
    </div>
  </div>

  <div class="field">
    <label for="imagen" class="label">Imagen</label>
    <div class="control">
      <input id="imagen" name="imagen" class="input" type="text" placeholder="e.g. https://store-images.s-microsoft.com/image/apps.58378.13850085746326678.826cc014-d610-46af-bdb3-c5c96be4d22c.64287a91-c69e-4723-bb61-03fecd348c2a?q=90&w=480&h=270">
    </div>
  </div>

  <input class="button is-primary" type="submit" value="Guardar">
</form>
`;

const html_git = `
</div>
    </div>
        </section>
        <form action="/videojuegos/git" method="POST">
          <section class="section">
            <div class="container">
              <div class="columns">
                <div class="column">
                  <h1 class="title">Comandos de git</h1>
                  <ul>
                    <li>git add: Sirve para agregar cambios a la transacción.</li>
                    <li>
                      git commit -m "mensaje en imperativo": Sirve para comprometer 
                      la transacción, es decir, guardar los cambios.
                    </li>
                    <li>git checkout <strong>[nombre_rama]</strong>: Sirve para cambiarse de rama.</li>
                    <li>
                      git checkout -b [nombre_rama]: Sirve para crear una nueva rama y 
                      cambiarse a esa nueva rama.
                    </li>
                    <li>
                      git push: Sirve para sincronizar los cambios desde mi repositorio 
                      hacia el repositorio remoto.
                    </li>
                    <li>
                      git pull: Sirve para sincronizar los cambios del repositorio remoto 
                      hacia mi repositorio.
                    </li>
                  </ul>
                </div>
              </div>
            </form>
            <a href = "/videojuegos"><button class="button is-primary">Regresar al menu principal</button></a>
`

const html_lab11 = `
    <form action = "/videojuegos/RespuestasLab11" method = "POST">
        <h1> Descripcion de lo aprendido en el lab11</h1>
        <p> En este laboratorio se trabajo con el uso de Express, aqui me di cuenta que era mucho mas 
        facil implementar los metodos de GET y POST que en el metodo del LAB10, tambien pude aprender
        que .use hace que se quede guardado lo ultimo usado por lo que se debe implementar hasta
        el ultimo, tambien aprendi a como crear diferentes objetos. </p>
        <a href="/videojuegos"><button class = "button is-primary">Regresar al menu principal</button></a>
    </form>`
//Creamos el objeto de la clase videojuegos
const videojuegos = [
  {
    nombre: "Minecraft",
    imagen: "https://store-images.s-microsoft.com/image/apps.58378.13850085746326678.826cc014-d610-46af-bdb3-c5c96be4d22c.64287a91-c69e-4723-bb61-03fecd348c2a?q=90&w=480&h=270"
  },
  {
    nombre: "Gears of war",
    imagen: "https://upload.wikimedia.org/wikipedia/en/thumb/8/82/Gears_of_war_cover_art.jpg/250px-Gears_of_war_cover_art.jpg"
  },
];

//Primera ruta para los videojuegos
//Este es un middlewre
router.get('/videojuegos/Lab11',(request,response,next) => {
  response.send(html_header + html_form + html_footer);
});

//tambie es un middleware
router.post('/videojuegos/Lab11', (request,response,next) => {
  //request.body contains all the data sent from the form when the post method is done
  //when a user fills up the form it is sent through the push method
  videojuegos.push(request.body);
  fs.writeFileSync('PostAnswer.txt', JSON.stringify(request.body));
  response.redirect('/videojuegos');
});

//Segunda ruta
//este es un middleware
router.get('/videojuegos/git',(request,response,next) => {
  response.send(html_git + html_footer);

});

router.post('/videojuegos/git', (request,response,next) => {
  //request.body contains all the data sent from the form when the post method is done
  //when a user fills up the form it is sent through the push method
  response.redirect('/videojuegos');
});

//Tercera Ruta
router.get('/videojuegos/RespuestasLab11',(request, response, next) => {
    response.send(html_header+html_lab11+html_footer);
});

router.post('/videojuegos/RespuestasLab11', (request, response, next)  => {
    response.redirect('/videojuegos');

});

router.get('/videojuegos',(request, response) => {
  console.log('Otro MiddleWare!');
  let html_index = `
              <a href="/videojuegos/Lab11"><button class="button is-primary">Nuevo videojuego</button></a>
              <div class="columns">`;

        for (let juego of videojuegos) {
            html_index += `
                <div class="column">
                    ${juego.nombre}
                    <figure class="image">
                        <img class="is-rounded" src="${juego.imagen}" />
                    </figure>
                </div>`;
        }
        
        html_index += `    
              </div>
            </div>
          </section>
          <section class="section">
            <div class="container">
              <div class="columns">
                <div class="column">
                  <h1 class="title">Comandos de git</h1>
                  <ul>
                    <li>git add: Sirve para agregar cambios a la transacción.</li>
                    <li>
                      git commit -m "mensaje en imperativo": Sirve para comprometer 
                      la transacción, es decir, guardar los cambios.
                    </li>
                    <li>git checkout <strong>[nombre_rama]</strong>: Sirve para cambiarse de rama.</li>
                    <li>
                      git checkout -b [nombre_rama]: Sirve para crear una nueva rama y 
                      cambiarse a esa nueva rama.
                    </li>
                    <li>
                      git push: Sirve para sincronizar los cambios desde mi repositorio 
                      hacia el repositorio remoto.
                    </li>
                    <li>
                      git pull: Sirve para sincronizar los cambios del repositorio remoto 
                      hacia mi repositorio.
                    </li>
                  </ul>
                </div>
              </div>
              <a href="/videojuegos/git"><button class="button is-primary">Comandos GITHUB</button></a>
              <div class="columns">
          `;
        html_index += `
  <div class="columns mt-4">
    <div class="column">
      <h1 class="title">Respuestas Laboratorio 11</h1>
      <a href="/videojuegos/RespuestasLab11">
        <button class="button is-primary">Respuestas</button>
      </a>
    </div>
    <div class="column">
      <h1 class="title">Tienda de Snoopy</h1>
      <a href="/Lab10">
        <button class="button is-primary">Vamos a la tienda de Snoopy</button>
      </a>
    </div>
  </div>
</div>
</div>
</section>
`;
  //Manda la respuesta
  response.send(html_header+html_index+html_footer);
});

module.exports = router;