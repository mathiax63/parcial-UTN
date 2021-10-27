const donacionesActuales = 123530 
const deseaDonar = confirm("¿Desea donar a la ONG?")

if(deseaDonar){
    let siDona = document.getElementById('donado');
    let noDono = document.getElementById("noDono")
let cantidad = prompt("Cuanto desea donar")
let cantidadNumerica = parseInt(cantidad)

document.write( donacionesActuales  + cantidadNumerica);
  
siDona.style.display = "block"
noDono.style.display = "none"



}