/// local storage ////
// stock de restaurant 


let productoArray = [];


// con esta funcion guardamos los datos ingresados 
function guardarDatos(productoName,cantidadProducto,precioProducto){

    const producto ={
        nombreProducto: productoName,
        cantidad: cantidadProducto,
        precio: precioProducto
    }

    // le pusheo el objeto al array 
    productoArray.push(producto);

    // convierto el objeto en un string con el metodo JSON y lo inserto en el localStorage
    localStorage.setItem('producto',JSON.stringify(productoArray));

    // luego de ingresar el producto se limpia el formulario 
    limpiarForm();
}

// borra un producto 
function borrarProducto(){
    localStorage.removeItem('producto');
}


// limpiar form de ingreso
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