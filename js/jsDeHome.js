let nombre = prompt("Por favor indiquenos su nombre");
let edad = prompt("Por favor indiquenos su edad");
let pais = prompt("Por favor indiquenos su pais")

if(nombre === null){
  nombre = 'Visitante';
  
}
if(edad === null){
    edad = "15 a 70"
}
if(pais === null){
    pais = "ya que contamos con sucursales por todo el mundo"
}
if(nombre === ""){
  nombre = 'Visitante'
}
if(edad === ""){
  edad = "15 a 70"
}

if(pais === ""){
  pais = "ya que contamos con sucursales por todo el mundo"
}


const saludo = "<h3>Hola, " + nombre + " "+"bienvenido"+" a "+ "GlobLife" +"</h3>";

