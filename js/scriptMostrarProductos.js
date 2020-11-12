
////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MOSTRAR PRODUCTO 
///////////////////////////////////////////////////////////////////////////////////////////////////////////

// cuando se carga la pagina muestra los productos 
window.addEventListener("load",()=>{
        mostrarProductos();
});

let btn_borrarTodo = document.querySelector("#btn_borrarTodo");
let span_mostrarProducto = document.querySelector("#span_mostrarProducto");
let span_mostrarCantidad = document.querySelector("#span_cantidadProducto");
let span_precioProducto = document.querySelector("#span_precioProducto");
let contenedor_borrar = document.querySelector("#contenedorBorrar");


btn_borrarTodo.addEventListener("click",borrarProducto);


// borra un producto 
function borrarProducto(){
    let decision = confirm("Seguro que desea borrar todo?");
        if(decision==true)localStorage.removeItem('producto');   
        location.reload();// refresca la pagina 
}



function mostrarProductos(){

    // console.log("entre");
    let productosCargados = JSON.parse(localStorage.getItem("producto"));

    // se fija si hay algo para mostrar, si no hay nada para mostrar oculta el boton y el contenedor de borrar todo 
    if(productosCargados===null){
        btn_borrarTodo.classList.toggle("borrar");
        contenedor_borrar.classList.toggle("borrar");
    }

     // muestro todos los nombres de los productos cargados 
    for (const index in productosCargados){
        span_mostrarProducto.innerHTML += `<br><span class="itemProducto">${productosCargados[index].nombreProducto}</span>`;
        span_mostrarCantidad.innerHTML += `<br><span class="itemProducto">${productosCargados[index].cantidad}</span>`;
        span_precioProducto.innerHTML += `<br><span class="itemProducto">${productosCargados[index].precio}</span> <button id="btn_borrarItem" class="eliminarItem"> eliminar </button>`;            
    }

    // productosCargados.forEach(index => {
    //     span_mostrarProducto.innerHTML += `<br><span>${productosCargados[index].nombreProducto}</span>`;
    //     span_mostrarCantidad.innerHTML += `<br><span>${productosCargados[index].cantidad}</span>`;
    //     span_precioProducto.innerHTML += `<br><span>${productosCargados[index].precio}</span>`;            
    // });

    // console.log(productosCargados.nombreProducto);

}   

///////////////////////////////////////////////////////////////////////

// NOTAS: Revisar metodo indexOf y splice para eliminar items
// el metodo indexOf devuelve el indice del array de donde se encuentre la coincidencia.
// //El método splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(2,1);
// de esta forma splice borraria el indice 2, 1 solo elemento



// NOTA: Funcion a desarrollar
// funcion para buscar la posicion del item a eliminar

// let eliminarItem = document.querySelector(".eliminarItem");
// eliminarItem.addEventListener("click",function(){
    
// }

// function eliminar(){
//     // let eliminarItem = document.querySelector(".eliminarItem");
//     eliminarItem.addEventListener("click",buscador());
// }
// arrayBI.splice(i,1);
//                 //COMO PRUEBA, subo arrayBI como "pruebaListadoProductos". Si arranca, luego intentar subirlo reemplazando la array original "listadoDeProductos";
//                 localStorage.setItem("listadoDeProductos", JSON.stringify(arrayBI));
//             }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// eliminarItem = document.querySelectorAll(".eliminarItem");

btn_borrarItem = document.querySelectorAll("#btn_borrarItem");

// btn_borrarItem.addEventListener("click",buscador);
// btn_borrarTodo.addEventListener("click",borrarProducto);

//     let productosCargados = JSON.parse(localStorage.getItem("producto"));
//     for (const index in productosCargados){
//         productosCargados[index].nombreProducto;
//     }
// })

btn_borrarItem.addEventListener("click",buscador);

// esta funcion buscador, busca el elemento a eliminar, dependiendo el boton de eliminar qeu se pulse 
function buscador(){
  
    // for(let i = 0; i<eliminarItem.lenght; i++){
    //     console.log("valores cargados "+eliminarItem[i]);
    // }    

    let buscar = JSON.parse(localStorage.getItem("producto"));
    let nombreBusqueda = "manteca";
    for (const i in buscar) {
       
        if(buscar[i].nombreProducto.indexOf(nombreBusqueda)===0){
            console.log("lo encontre "+i);

            buscar.splice(i,1);
            localStorage.setItem('producto',JSON.stringify(buscar));
            location.reload();
          
        }
    }
}