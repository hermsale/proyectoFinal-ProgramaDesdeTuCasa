
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


// borra todo
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
        span_precioProducto.innerHTML += `<br><span class="itemProducto" >${productosCargados[index].precio}</span> <button id="btn_borrarItem" class="eliminarItem" onclick="buscador(${index})"> eliminar </button>`;            
    }                                               // le paso el parametro de la posicion de index a la funcion 


}   

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // eliminar item 

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// esta funcion buscador, busca el elemento a eliminar, dependiendo el boton de eliminar que se pulse 
// recibe el parametro de la ubicacion que se pulso (index)
function buscador(index){

    // compruebo el indice que se pulso en la lista 
    // console.log(index);

    // traigo el objeto json 
    let buscar = JSON.parse(localStorage.getItem("producto"));

    // guardo en nombreBusqueda el valor que se aloja en la posicion de buscar[index] 
    let nombreBusqueda = buscar[index].nombreProducto;

  
        // localStorage.removeItem('producto');
 
        for (const i in buscar) {
           
            // si encuentra el producto entra en el if 
            if(buscar[i].nombreProducto.indexOf(nombreBusqueda)===0){

                // encuentra la posicion en donde se encuentra el producto a borrar 
                console.log("lo encontre "+i);
    
                // quita el valor del array en la posicion i 
                buscar.splice(i,1);
                
                // vuelve a cagar el array nuevo 
                localStorage.setItem('producto',JSON.stringify(buscar));

                // si se encuentra en la posicion 0 significa que despues no hay nada mas por ende, borra la key producto 
                if(i==='0'){
                    localStorage.removeItem('producto');
                }
                
                // refresca la pagina para ver los cambios
                location.reload();
    
            }
        }
    }
