//Creamos la forma html para la nueva pagina
const html_form = `
    <form action="/Laboratorio10" method="POST">
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
</form>`;

const filesystem = require ("fs");
const http = require('http');
const server = http.createServer((request,response) => {
    console.log(request.url);
    const html = filesystem.readFileSync( "index.html", "utf-8");
    if (request.url == "/"){
        response.setHeader("Content-Type", "text/html");
        response.write(html);
        response.end();
    //Obtenemos para el laboratorio 8
    } else if (request.url == "/Laboratorio10" && request.method == "GET"){
        console.log("Ruta/Laboratorio10");
        response.setHeader("Content-Type","text/html");
        response.write(html_form);
        response.end();
    //La respuesta al Laboratorio 8
    } else if (request.url == "/Laboratorio10" && request.method == "POST"){
        const datos_completos = [];
        request.on("data",(data) => {
            console.log(data);
            datos_completos.push(data);
        });
        request.on("end", () => 
           {const string_datos_completos = Buffer.concat(datos_completos).toString();
            console.log(string_datos_completos)
            filesystem.writeFileSync("respuestaLab10", string_datos_completos);
            response.setHeader("Content-Type", "text/html");
            response.write("<h3>Datos guardados correctamente</h3>");
            response.end();});
    //Obtenemos la hoja de estilo
    } else if (request.url == "/style.css"){
        const css = filesystem.readFileSync("style.css", "utf-8");
        response.setHeader("Content-Type", "text/css");
        response.write(css);
        response.end();
    //Obtenemos el script
    } else if (request.url == "/script.js") {
        const js = filesystem.readFileSync("script.js", "utf-8");
        response.setHeader("Content-Type", "text/javascript");
        response.write(js);
        response.end();
    //Si no se encuentra error 404
    } else {
        response.setHeader("Content-Type", "text/html");
        response.write("Error 404");
        response.end();
    }
})

server.listen(3000);