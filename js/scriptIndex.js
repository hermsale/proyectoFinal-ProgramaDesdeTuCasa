////////////////////////////////////////////////////////////////////////////////////////////////////////////
// BIENVENIDO A PROBA ASIA
///////////////////////////////////////////////////////////////////////////////////////////////////////////

// cuando se carga la pagina muestra los productos 

let primeraVez = 0;
window.addEventListener("load",()=>{
    let existentes = JSON.parse(localStorage.getItem("usuario"));

    if(existentes===null){
        alert("Bienvenido por primera vez!");
        alert("En esta primera carga, deberás crear tu usuario");
        alert("Lo que coloques a continuación será tu usuario y contraseña de aqui en más");
        // existentes.push('usuario');
       primeraVez = 1;
    }
});

let nombre = document.querySelector("#nombre")



function primeraCarga(){
    // if(primeraVez==='1'){
        localStorage.setItem('usuario',"ale");
        console.log("creaste usuario");
    // }
    
}