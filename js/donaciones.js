const donacionesActuales = 123530 
const deseaDonar = confirm("¿Desea donar a la ONG?")

if(deseaDonar){
    let siDona = document.getElementById('donado');
    let noDono = document.getElementById("noDono")
let cantidad = prompt("Cuanto desea donar")
let cantidadNumerica = parseInt(cantidad)

const cantidadActual = donacionesActuales  + cantidadNumerica;
let cantidadDeDonaciones= document.getElementById("cantidadDentroDeDiv").innerHTML ="si esta aqui es porque desea ayudar de manera monetario, actualmente las donaciones totales son de "+cantidadActual +"$, la ONG aradece de su donacion que ayudara a limpiar los oceanos y mares y ayudara a la reforestacion"

siDona.style.display = "block";
noDono.style.display = "none";



}