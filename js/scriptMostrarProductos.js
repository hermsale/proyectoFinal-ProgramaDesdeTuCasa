
////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MOSTRAR PRODUCTO 
///////////////////////////////////////////////////////////////////////////////////////////////////////////

let btn_mostrarProducto = document.querySelector("#btn_mostrarProducto");
let span_mostrarProducto = document.querySelector("#span_mostrarProducto");
let span_mostrarCantidad = document.querySelector("#span_cantidadProducto");
let span_precioProducto = document.querySelector("#span_precioProducto");

btn_mostrarProducto.addEventListener("click",mostrarProductos);

function mostrarProductos(){

    // console.log("entre");
    let productosCargados = JSON.parse(localStorage.getItem("producto"));

    // muestro todos los nombres de los productos cargados 
    for (const index in productosCargados){
        span_mostrarProducto.innerHTML += `<li>${productosCargados[index].nombreProducto}</li>`;
        span_mostrarCantidad.innerHTML += `<li>${productosCargados[index].cantidad}</li>`;
        span_precioProducto.innerHTML += `<li>${productosCargados[index].precio}</li>`;            
    }


}   