const donacionesActuales = 123530 
const deseaDonar = confirm("¿Desea donar a la ONG?")

if(deseaDonar){
    let siDona = document.getElementById('donado');
    let noDono = document.getElementById("noDono")
let cantidad = prompt("Cuanto desea donar")
let cantidadNumerica = parseInt(cantidad)
let gracias = alert("Gracias por su donacion")
let aviso = alert("En las proximas semanas recivira Emails del avane logrado gracias a su donacion")

const cantidadActual = donacionesActuales  + cantidadNumerica;
let cantidadDeDonaciones= document.getElementById("cantidadDentroDeDiv").innerHTML ="Gracias por su donacion actualmente las donaciones totales son de "+cantidadActual +"$ sumando la suya, GlobLife agradece de su donacion que ayudara a la adquicicion de materiales y expertos que ayudaran a limpiar los oceanos, mares y ayudara a la reforestacion y reconstrucion de oceanos,mares y bosques"


siDona.style.display = "block";
noDono.style.display = "none";



}