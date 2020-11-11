/// local storage ////
// stock de restaurant 

let productoArray = [];
let contador = 0;

// con esta funcion guardamos los datos ingresados 
function guardarDatos(productoName,cantidadProducto,precioProducto){

      // toma los datos de producto y los guarda en existentes
      let existentes = JSON.parse(localStorage.getItem("producto"));

    // creo un array de producto 
    const producto ={
        // numeroArticulo: contador++,
        nombreProducto: productoName,
        cantidad: cantidadProducto,
        precio: precioProducto
    }
   
   
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
    // normalizo todos los nombres para que se ingresen en minusculas 
    let productoName = productoItem.value.toLowerCase();
    let cantidadProducto = cantidadItem.value;
    let precioProducto = precioItem.value;

    // paso por parametros las variables a guardar en el localstorage
    guardarDatos(productoName,cantidadProducto,precioProducto);
}

// btn_guardar.addEventListener("click",tomarDatos);
btn_guardar.addEventListener("click",revisionStock);

// esta funcion es un filtro para no generar productos repetidos en el inventario 
function revisionStock(){

    // corroboro que los campos de carga esten completos 
    if((productoItem.value==='') || (cantidadItem.value==='') || (precioItem.value==='')){

        return alert("Debe ingresar los campos solicitados");
    }

    let revision = JSON.parse(localStorage.getItem("producto"));
    
    // comparo si ya existe el producto o no en el inventario almacenado 
    let contador=0;

    for (const i in revision) {
        if(productoItem.value===revision[i].nombreProducto){
            alert("El producto que esta deseando ingresar ya se encuentra en el inventario");
            contador++;
        }
    }

    console.log(contador);
    // si el contador se mantiene en 0 es porque no hay ningun producto repetido 
    if(contador===0){
        console.log("puede ingresar este producto");
        tomarDatos();
    }
  
  
    /////////////// probando si toma el metodo every para buscar coincidencias en el array - sin resultado
    // function repasoInventario(esta){
    //     return esta === "manteca";
    // }

    // const inventario = (valor) => valor === "manteca";

    // console.log(revision.nombreProducto.every(inventario));   
}

