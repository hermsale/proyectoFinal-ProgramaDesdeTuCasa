////////////////////////////////////////////////////////////////////////////////////////////////////////////
// BIENVENIDO A PROBA ASIA
///////////////////////////////////////////////////////////////////////////////////////////////////////////

let usuarioArray = [];


window.addEventListener("load",()=>{
    let existentes = JSON.parse(localStorage.getItem("usuario"));

    if(existentes===null){
        primeraCarga();
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

    if(existentes!==null){
        existentes.push(usuario);
        localStorage.setItem('usuario',JSON.stringify(existentes));
    }else{
        usuarioArray.push(usuario);
        localStorage.setItem('usuario',JSON.stringify(usuarioArray));
    }

    limpiarForm()

}


// limpiar formulario de ingreso
function limpiarForm(){
    usuarioNombre.value = "";
    usuarioPassword.value = "";
}
