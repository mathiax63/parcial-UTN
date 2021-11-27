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

    }else if (nombre1.value.length >= 10){
         
            nombre1.style.backgroundColor = "#ff8080"
            nombre1.setCustomValidity("Su nombre debe tener menos de 10 caracteres")
    }
    else{
        nombre1.style.backgroundColor = "#adebad"
        nombre1.setCustomValidity("")
    }

}

function validarSuEmail(){
    let regexEmail = /^([A-Za-z0-9_\-\+\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/

    if(email.value == "") {

        email.style.backgroundColor = "#ff8080"
        email.setCustomValidity("Ingrese su email para poder contactarlo")

    }else if (email.value.length >= 25){
         
        email.style.backgroundColor = "#ff8080"
        email.setCustomValidity("Su email debe tener menos de 25 caracteres")

}else if (!email.value.match(regexEmail)){

    email.setCustomValidity("Debe ingresar un email valido")
}
    else{

        email.style.backgroundColor = "#adebad"
        email.setCustomValidity("")

    }


}
function validarApellido(){
if(apellido.value == ""){
    apellido.style.backgroundColor = "#ff8080"
    apellido.setCustomValidity("Ingrese su apellido")

}else if (apellido.value.length >= 10){

    apellido.style.backgroundColor = "#ff8080"
    apellido.setCustomValidity("Su apellido debe contar con menos de 10 caracteres")

}

else{
    apellido.style.backgroundColor = "#adebad"
    apellido.setCustomValidity("")
}

}
function validarAlUsuarioMar(){
    if(nombre1Mar.value == "") {
        nombre1Mar.style.backgroundColor = "#ff8080"
        nombre1Mar.setCustomValidity("Ingrese su nombre")

    }else if (nombre1Mar.value.length >= 10) {

        nombre1Mar.style.backgroundColor = "#ff8080"
        nombre1Mar.setCustomValidity("Su nombre debe tener menos de 10 caracteres")

    }
    
    else{
        nombre1Mar.style.backgroundColor = "#adebad"
        nombre1Mar.setCustomValidity("")
    }

}
function validarApellidoMar(){
    
    if(apellidoMar.value == ""){

        apellidoMar.style.backgroundColor = "#ff8080"
        apellidoMar.setCustomValidity("Ingrese su apellido")

    }else if (apellidoMar.value.length == 10){

        apellidoMar.style.backgroundColor = "#ff8080"
        apellidoMar.setCustomValidity("Su apellido debe contener menos de 10 caracteres")

    }

    else{

        apellidoMar.style.backgroundColor = "#adebad"
        apellidoMar.setCustomValidity("")

    }
    
    }
function validarSuEmailMar(){
    let regexEmail = /^([A-Za-z0-9_\-\+\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/

    if(emailMar.value == "") {

        emailMar.style.backgroundColor = "#ff8080"
        emailMar.setCustomValidity("Ingrese su email para poder contactarlo")

    }else if (emailMar.value.length >= 25) {

        emailMar.style.backgroundColor = "#ff8080"
        emailMar.setCustomValidity("Su email debe tener 25 caracteres o menos")

    }else if (!emailMar.value.match(regexEmail)){

        emailMar.setCustomValidity("Debe ingresar un email valido")
    
    }else{

        emailMar.style.backgroundColor = "#adebad"
        emailMar.setCustomValidity("")
    }

}






window.addEventListener("load", validarCredenciales)