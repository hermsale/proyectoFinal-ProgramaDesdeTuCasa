
////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MOSTRAR PRODUCTO 
///////////////////////////////////////////////////////////////////////////////////////////////////////////

window.addEventListener("load",()=>{
        mostrarProductos();
});

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
        span_mostrarProducto.innerHTML += `<br><span class="itemProducto">${productosCargados[index].nombreProducto}</span>`;
        span_mostrarCantidad.innerHTML += `<br><span class="itemProducto">${productosCargados[index].cantidad}</span>`;
        span_precioProducto.innerHTML += `<br><span class="itemProducto">${productosCargados[index].precio}</span> <button class="eliminarItem"> eliminar </button>`;            
    }

    // productosCargados.forEach(index => {
    //     span_mostrarProducto.innerHTML += `<br><span>${productosCargados[index].nombreProducto}</span>`;
    //     span_mostrarCantidad.innerHTML += `<br><span>${productosCargados[index].cantidad}</span>`;
    //     span_precioProducto.innerHTML += `<br><span>${productosCargados[index].precio}</span>`;            
    // });

    // console.log(productosCargados.nombreProducto);

}   

// NOTAS: Revisar metodo indexOf y splice para eliminar items
// el metodo indexOf devuelve el indice del array de donde se encuentre la coincidencia.
// //El método splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(2,1);
// de esta forma splice borraria el indice 2, 1 solo elemento

// NOTA: Funcion a desarrollar
// funcion para buscar la posicion del item a eliminar

function eliminar(){
    let eliminarItem = document.querySelector(".eliminarItem");

    eliminarItem.addEventListener("click",buscador());
   
}

function buscador(){
    // let pos;


    let buscar = JSON.parse(localStorage.getItem("producto"));
    let nombreBusqueda = "huevos";
    for (const i in buscar) {
    //    pos = console.log(buscar[i].nombreProducto.indexOf(nombreBusqueda));
    //     console.log(pos)
    //    if(pos!==0){
    //        console.log('se encuentra en '+i);
    //    }
       
        if(buscar[i].nombreProducto.indexOf(nombreBusqueda)===0){
            console.log("lo encontre "+i);
        }
    }

    
     
}