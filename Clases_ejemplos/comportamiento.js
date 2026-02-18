//Visualizar el DOM(Document Object Model)
//comportamiento .js
//javascript modifica el DOM 

//console.log(document);
const halo = document.getElementById("halo");

const videojuego = {
    nombre: "Halo",
    imgen: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/976730/header.jpg?t=1740682623",
    descripcion: ```Halo es un videojuego divertido```,
    genero: ["Shooter"],
}

console.log(halo);

//declarar la funcion
halo.onclick = () => {
    console.log("Click en halo");
    halo.innerHTML = 
        ```<strong>Halo</strong>
        <p>Halo es un videojuego divertido>${videojuego.nombre}</p>
        <p>Descripcion = >${videojuego.descripcion} </p>
        <span class="tag">${videojuego.genero[0]}</span>```;
}

const mostrar_imagen = () => {
    halo.innerHTML=``` <figure class = "image"
                    img class="is-rounded" src="${(videojuego.imagen)}
                    </figure>```
    halo.onclik=mostrar_descripcion();
}

mostrar_imagen();
halo.onclick = mostrar_descripcion;
