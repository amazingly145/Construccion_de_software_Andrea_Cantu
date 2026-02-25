//Funciones
function calcular_precio(product){
    if(product == "tree"){
        const cantidad = document.getElementById("cantidad_arbol").value;
        producto_arbol.compra = cantidad*producto_arbol.precio;
        const total = cantidad * producto_arbol.precio;
        document.getElementById("precio_arbol").innerHTML = `$${total}`;
        document.getElementById("productPrice_arbol").innerHTML = `$${producto_arbol.precio}`;
        document.getElementById("nombre_arbol").innerHTML = `${producto_arbol.nombre}`
        document.getElementById("cantidad_arbol_ticket").innerHTML=`${cantidad}`;
        console.log(total);
        document.getElementById("taxes_arbol").innerHTML=`$${calcular_taxes(total)}`;
        producto_arbol.total = calcular_taxes(total);
        
    }

    else if(product == "plane"){
        const cantidad = document.getElementById("cantidad_avion").value;
        producto_avion.compra = cantidad*producto_avion.precio;
        const total = cantidad * producto_avion.precio;
        document.getElementById("precio_avion").innerHTML = `$${total}`;
        document.getElementById("productPrice_avion").innerHTML = `$${producto_avion.precio}`;
        document.getElementById("nombre_avion").innerHTML = `${producto_avion.nombre}`
        document.getElementById("cantidad_avion_ticket").innerHTML=`${cantidad}`;
        console.log(total);
        document.getElementById("taxes_avion").innerHTML=`$${calcular_taxes(total)}`;
        producto_avion.total = calcular_taxes(total);
    }

    else if(product == "house"){
        const cantidad = document.getElementById("cantidad_casa").value;
        producto_casa.compra = cantidad*producto_casa.precio;
        const total = cantidad * producto_casa.precio;
        document.getElementById("precio_casa").innerHTML = `$${total}`;
        document.getElementById("productPrice_casa").innerHTML = `$${producto_casa.precio}`;
        document.getElementById("nombre_casa").innerHTML = `${producto_casa.nombre}`
        document.getElementById("cantidad_casa_ticket").innerHTML=`${cantidad}`;
        console.log(total);
        document.getElementById("taxes_casa").innerHTML=`$${calcular_taxes(total)}`;
        producto_casa.total = calcular_taxes(total);
    }
}

function calcular_taxes(total){
    precio_final = total * .10;
    precio_final = total + precio_final;
    return precio_final;
}

function PagoTotal(){
    let sum;
    sum = producto_arbol.total + producto_avion.total + producto_casa.total;
    document.getElementById("Pago_Final").innerHTML=(`<p class="center-align text">Final price of: $${sum}</p>`)
    return sum;

}

//--------------Objetos
//Producto arbol
const producto_arbol = {
    nombre: "Arbol de construccion - Edicion especial",
    url: "https://www.mercadolibre.com.mx/miniso-bloques-de-construccion-snoopy-casa-del-arbol-287-pie/up/MLMU441033231",
    descripcion: `Incluye a Snoopy, Charlie y Woodstock`,
    distribuidora: ["MiniSo"],
    precio: 200,
    compra: 0,
    total:0,
}

const arbol = document.getElementById("arbol");

//We save the original image before doing any changes
const originalHTML = arbol.innerHTML;
console.log(arbol);
arbol.onmousemove=()=>{
    console.log("mouse sobre el arbol");
    arbol.innerHTML = `<div class=" imagen_atras"><p class="imagen_atras center-align text"> <b>Nombre: </b> ${producto_arbol.nombre}</p>
        <p class="center-align text"><b>Descripcion: </b> ${producto_arbol.descripcion}</p>
        <p class="center-align text"><b>Distribuidora: </b>${producto_arbol.distribuidora[0]}<p>
        <div class="center-align">
        <a href="${producto_arbol.url}" target="_blank" class="center-align yellow btn waves-effect waves-light">
        ¡Buy on Mercado Libre!</a> </div></div>
        `;
    }

arbol.onmouseleave=()=>{
    arbol.innerHTML = originalHTML;
}

//ticket arbol
const ticket_arbol = document.getElementById("ticket_arbol");
//producto casa
const producto_casa = {
    nombre: "Snoopy's house",
    url: "https://www.lego.com/es-mx/product/peanuts-snoopys-doghouse-21368",
    descripcion: `Incluye a Snoopy, Woodstock y la casa`,
    distribuidora: ["Lego"],
    precio: 2500,
    compra: 0,
    total: 0,
}

const casa = document.getElementById("casa");
//We save the original image before doing any changes
const originalHTML_casa = casa.innerHTML;
console.log(casa);
casa.onmousemove=()=>{
    console.log("mouse sobre el arbol");
    casa.innerHTML = `<div class=" imagen_atras"><p class="imagen_atras center-align text"> <b>Nombre: </b> ${producto_casa.nombre}</p>
        <p class="center-align text"><b>Descripcion: </b> ${producto_casa.descripcion}</p>
        <p class="center-align text"><b>Distribuidora: </b>${producto_casa.distribuidora[0]}<p>
        <div class="center-align">
        <a href="${producto_casa.url}" target="_blank" class="center-align yellow btn waves-effect waves-light">
        ¡Buy on Lego Store!</a> </div></div>
        `;
    }

casa.onmouseleave=()=>{
    casa.innerHTML = originalHTML_casa;
}

//Producto avion
const producto_avion = {
    nombre: "Snoopy's airplane",
    url: "https://www.mercadolibre.com.mx/miniso-bloques-de-construccion-snoopy-avion-275-piezas/up/MLMU441012091",
    descripcion: `Incluye a Snoopy, Woodstock y la casa`,
    distribuidora: ["Mini So"],
    precio: 500,
    compra: 0,
    total: 0,
}

const avion = document.getElementById("avion");
//We save the original image before doing any changes
const originalHTML_avion = avion.innerHTML;
console.log(avion);
avion.onmousemove=()=>{
    console.log("mouse sobre el arbol");
    avion.innerHTML = `<div class=" imagen_atras"><p class="imagen_atras center-align text"> <b>Nombre: </b> ${producto_avion.nombre}</p>
        <p class="center-align text"><b>Descripcion: </b> ${producto_avion.descripcion}</p>
        <p class="center-align text"><b>Distribuidora: </b>${producto_avion.distribuidora[0]}<p>
        <div class="center-align">
        <a href="${producto_avion.url}" target="_blank" class="center-align yellow btn waves-effect waves-light">
        ¡Buy on Mercado Libre!</a> </div></div>
        `;
    }

avion.onmouseleave=()=>{
    avion.innerHTML = originalHTML_avion;
}



