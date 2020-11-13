////////////////////////////////////////////////////////////////////////////////////////////////////////////
// BIENVENIDO A PROBA ASIA
///////////////////////////////////////////////////////////////////////////////////////////////////////////

let usuarioArray = [];


window.addEventListener("load",()=>{
    let existentes = JSON.parse(localStorage.getItem("usuario"));

    if(existentes===null){

        primeraCarga();
        primerUsuario = 1;
    }

});

let nombre = document.querySelector("#nombre");
let contraseña = document.querySelector("#contraseña");
let btn_acceder = document.querySelector("#btn_acceder");



function primeraCarga(){
        alert("Bienvenido por primera vez!");
        alert("En esta primera carga, deberás crear tu usuario");
        alert("Lo que coloques a continuación será tu usuario y contraseña de aqui en más");
        
}

btn_acceder.addEventListener("click",tomarDatos);



function tomarDatos(){

    let usuarioNombre = nombre.value;
    let usuarioPassword = contraseña.value;
    
    // console.log(usuarioNombre + usuarioPassword);
    guardarUsuario(usuarioNombre,usuarioPassword);
}

function guardarUsuario(usuarioNombre,usuarioPassword){
    let existentes =  JSON.parse(localStorage.getItem("usuario"));
    
    const usuario ={
        nombreUsuario: usuarioNombre,
        contraseñaUsuario: usuarioPassword
    }

    // if(existentes!==null){
    //     existentes.push(producto);
    //     // guarda en el localStorage en la key producto lo que hay en existente 
    //     localStorage.setItem('producto',JSON.stringify(existentes));
    // }else{
    //     // si existente esta vacio, se le pushea lo que hay en producto al array 
    //     productoArray.push(producto);
    //     // se guarda en el localStorage en la key producto lo que hay en el array 
    //     localStorage.setItem('producto',JSON.stringify(productoArray));
    // }

    if(existentes===null){
        usuarioArray.push(usuario);
        localStorage.setItem('usuario',JSON.stringify(usuarioArray));
    }
    

    if((usuarioNombre)===(existentes[0].nombreUsuario)&&(usuarioPassword)===(existentes[0].contraseñaUsuario)){
        window.location = "loading.html";
        limpiarForm();
    }else{
        alert("Ingreso incorrecto. Si se olvido sus datos de ingreso, comuniquese con el administrador para un blanqueo de cuenta");
    }
  

}


// limpiar formulario de ingreso
function limpiarForm(){
    nombre.value = "";
    contraseña.value = "";

}
