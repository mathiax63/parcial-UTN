const bosques = confirm("¿Quiere presentarse para ayudar a los bosques?");
const mar = confirm("¿Quiere presentarse como voluntario para ayudar en los mares y oceanos?")
if (bosques){
    let cajaBase = document.getElementById('codigo-base');
    let cajabosques = document.getElementById('codigo-bosque');
 

    cajaBase.style.display = 'none';
    cajabosques.style.display="block"
}

if(mar){
    let cajaBase = document.getElementById('codigo-base');
    let cajabosques = document.getElementById('codigo-bosque');
    let cajaMar = document.getElementById("codigo-mar")
    

    cajaBase.style.display = 'none';
    cajabosques.style.display="none"
    cajaMar.style.display = "block" 
}
if(mar && bosques){
    let cajaBase = document.getElementById('codigo-base');
    let cajabosques = document.getElementById('codigo-bosque');
    let cajaMar = document.getElementById("codigo-mar")

    cajaBase.style.display = 'none';
    cajabosques.style.display="block"
    cajaMar.style.display = "block" 
}


let nombre1 = document.getElementById("nombre")
let nombre1Mar = document.getElementById("nombreMar")
let apellido = document.getElementById("apellido")
let apellidoMar = document.getElementById("apellidoMar")
 let email = document.getElementById("email") 
 let emailMar = document.getElementById("emailMar") 
 



function validarCredenciales(){
    nombre1.addEventListener("input", validarAlUsuario)
    apellido.addEventListener("input", validarApellido)
    email.addEventListener("input", validarSuEmail)
    nombre1Mar.addEventListener("input", validarAlUsuarioMar)
    apellidoMar.addEventListener("input", validarApellidoMar)
    emailMar.addEventListener("input", validarSuEmailMar)




    validarAlUsuario()
    validarApellido()
    validarSuEmail()
    validarAlUsuarioMar()
    validarApellidoMar()
    validarSuEmailMar()
}

function validarAlUsuario(){
    if(nombre1.value == "") {
        nombre1.style.backgroundColor = "#ff8080"
        nombre1.setCustomValidity("Ingrese su nombre")

    }else{
        nombre1.style.backgroundColor = "#adebad"
        nombre1.setCustomValidity("")
    }

}

function validarSuEmail(){
    if(email.value == "") {
        email.style.backgroundColor = "#ff8080"
        email.setCustomValidity("Ingrese su email para poder contactarlo")

    }else{
        email.style.backgroundColor = "#adebad"
        email.setCustomValidity("")
    }

}
function validarApellido(){
if(apellido.value == ""){
    apellido.style.backgroundColor = "#ff8080"
    apellido.setCustomValidity("Ingrese su apellido")
}else{
    apellido.style.backgroundColor = "#adebad"
    apellido.setCustomValidity("")
}

}
function validarAlUsuarioMar(){
    if(nombre1Mar.value == "") {
        nombre1Mar.style.backgroundColor = "#ff8080"
        nombre1Mar.setCustomValidity("Ingrese su nombre")

    }else{
        nombre1Mar.style.backgroundColor = "#adebad"
        nombre1Mar.setCustomValidity("")
    }

}
function validarApellidoMar(){
    if(apellidoMar.value == ""){
        apellidoMar.style.backgroundColor = "#ff8080"
        apellidoMar.setCustomValidity("Ingrese su apellido")
    }else{
        apellidoMar.style.backgroundColor = "#adebad"
        apellidoMar.setCustomValidity("")
    }
    
    }
function validarSuEmailMar(){
    if(emailMar.value == "") {
        emailMar.style.backgroundColor = "#ff8080"
        emailMar.setCustomValidity("Ingrese su email para poder contactarlo")

    }else{
        emailMar.style.backgroundColor = "#adebad"
        emailMar.setCustomValidity("")
    }

}






window.addEventListener("load", validarCredenciales)