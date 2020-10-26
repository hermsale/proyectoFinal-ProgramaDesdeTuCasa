/// local storage ////
// stock de restaurant 


let productoArray = [];


// con esta funcion guardamos los datos ingresados 
function guardarDatos(productoName,cantidadProducto,precioProducto){

    // creo un array de producto 
    const producto ={
        nombreProducto: productoName,
        cantidad: cantidadProducto,
        precio: precioProducto
    }


    // toma los datos de producto y los guarda en existentes
    let existentes = JSON.parse(localStorage.getItem("producto"));

    // si existente tiene datos le pushea lo que hay en producto 
    if(existentes!==null){
        existentes.push(producto);
        // guarda en el localStorage en la key producto lo que hay en existente 
        localStorage.setItem('producto',JSON.stringify(existentes));
    }else{
        // si existente esta vacio, se le pushea lo que hay en producto al array 
        productoArray.push(producto);
        // se guarda en el localStorage en la key producto lo que hay en el array 
        localStorage.setItem('producto',JSON.stringify(productoArray));
    }
 
    
    // luego de ingresar el producto se limpia el formulario 
    limpiarForm();

}

// borra un producto 
function borrarProducto(){
    localStorage.removeItem('producto');
}


// limpiar formulario de ingreso
function limpiarForm(){
    productoItem.value = "";
    cantidadItem.value = "";
    precioItem.value = "";
}

let btn_guardar = document.querySelector("#btn_guardar");

let productoItem = document.querySelector("#productoItem");
let cantidadItem = document.querySelector("#cantidadItem");
let precioItem = document.querySelector("#precioItem");


function tomarDatos(){
    let productoName = productoItem.value;
    let cantidadProducto = cantidadItem.value;
    let precioProducto = precioItem.value;

    // paso por parametros las variables a guardar en el localstorage
    guardarDatos(productoName,cantidadProducto,precioProducto);
}

btn_guardar.addEventListener("click",tomarDatos);

  
