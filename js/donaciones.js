let donacionesActuales = 12000 
let deseaDonar = confirm("¿Desea donar a la ONG?")

if(deseaDonar){
    let siDona = document.getElementById('donado');
    let noDono = document.getElementById("noDono")
let cantidad = prompt("Cuanto desea donar")


if(cantidad !== null && cantidad !== "" ){
    let gracias = alert("Gracias por su donacion")
let aviso = alert("En las proximas semanas recibirá Emails del avance logrado gracias a su donacion")
}

/*if(typeof cantidad !== Number){
    siDona.style.display = "none";
noDono.style.display = "block";
}*/
let cantidadNumerica = parseInt(cantidad)

const cantidadActual = donacionesActuales  + cantidadNumerica;
let cantidadDeDonaciones= document.getElementById("cantidadDentroDeDiv").innerHTML ="Gracias por su donacion actualmente las donaciones totales son de "+cantidadActual +"$ sumando la suya, GlobLife agradece de su donacion que ayudara a la adquicicion de materiales y expertos que ayudaran a limpiar los oceanos, mares y ayudara a la reforestacion y reconstrucion de oceanos,mares y bosques"

siDona.style.display = "block";
noDono.style.display = "none";



if(cantidad === null){
   siDona.style.display = "none";
noDono.style.display = "block";
}

if(cantidad ===""){
    siDona.style.display = "none";
 noDono.style.display = "block";
 }
 

}

