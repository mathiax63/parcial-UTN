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


let apellido = document.getElementById("apellido")

let email = document.getElementById("email")


let nombre1 = document.getElementById("nombre")
let ubicacion = document.getElementById("lugar").value
  
let validador = new RegExp(ubicacion[lugar])

if(validador.test(codigo.value)){
    nombre1.setCustomValidity("")
}else{
    nombre1.setCustomValidity()
}