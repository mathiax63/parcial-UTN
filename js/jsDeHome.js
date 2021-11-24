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
window.addEventListener("load", function () {
let datos = []

datos[0] = "¿Sabía que los bosques cubren casi 1/3 de la tierra a nivel mundial? Lo que equivale a 4 060 millones de hectáreas?"
datos[1] = "Más de la mitad (54 por ciento) de los bosques del mundo se encuentran en solo cinco países: la Federación de Rusia, Brasil, Canadá, los Estados Unidos de América y China"
datos[2] = "¿Cómo llega la basura al océano? Es vertida, bombeada, derramada, filtrada e incluso lavada con nuestra ropa. Cada año, exponemos las vías fluviales del mundo a una creciente variedad de contaminantes: desechos plásticos, químicos, petróleo crudo y más"
datos[3] = " La basura del océano puede romperse en pedazos más pequeños, conocido como microplástico, por la exposición al sol y la acción de las olas, y después puede encontrar su camino a la cadena alimenticia. Cuando finalmente se degrada (lo que lleva 400 años para la mayoría de los plásticos), el proceso libera químicos que contaminan aún más el mar"
datos[4] ="Se estima que desde 1990 se han perdido 420 millones de hectáreas de bosque en todo el mundo lost worldwide a causa de la deforestación, pero la tasa de pérdida de bosques ha disminuido considerablemente. En el quinquenio más reciente (2015-2020), la tasa anual de deforestación se estima en 10 millones de hectáreas; lo cual supone una reducción si se compara con los 12 millones de hectáreas en 2010-2015"
datos[5] = "Se estima que hay 726 millones de hectáreas de bosque en áreas protegidas en todo el mundo. La superficie forestal en áreas protegidas a nivel mundial ha aumentado en 191 millones de hectáreas desde 1990"
datos[6] = "Cuando se arrojan al mar en grandes cantidades, los nutrientes agrícolas como el nitrógeno pueden estimular un crecimiento explosivo de las algas. Cuando las algas se descomponen, el oxígeno de las aguas circundantes se consume, creando una vasta zona desoxigenada que puede resultar en la muerte masiva de peces y otra vida marina"
datos[7] = "Más plástico en el océano viene de China e Indonesia que de cualquier otro lugar - juntos, representan un tercio de la contaminación de plástico. De hecho, el 80 por ciento de la contaminación plástica proviene de sólo 20 países, incluidos los Estados Unidos"
datos[8] = " Afortunadamente, no es demasiado tarde para limpiar nuestras acciones. Comparte la verdad sobre la contaminación del océano y ayuda a marcar la diferencia"
 
let datosP = document.getElementById("p1")


datosP.innerHTML = datos[0];



let inicioP = 0
function datosCuriosos(){
  inicioP++


  if(inicioP>8){
    inicioP=0
  }
  
  datosP.innerHTML = datos[inicioP]  
  datosP.innerHTML = datos[inicioP] 

}

setInterval(datosCuriosos,4000)




let imagenes = []

imagenes[0]  = "img/images (2).jpg"
imagenes[1]  = "img/descarga.jpg"
imagenes[2]  = "img/images (3).jpg"
imagenes[3]  = "img/medio-ambiente-696x476.jpg"


let imagenDelHom = document.getElementById("imagenDelHomAbajo")

imagenDelHom.src = imagenes[0]


let inicio = 0
function imagenesDeInicio(){
  
  inicio++
  if(inicio>3){
    inicio=0
  }
  
  imagenDelHom.src = imagenes [inicio] 
  imagenDelHom.src = imagenes [inicio]  
  imagenDelHom.src = imagenes [inicio] 

 
}
 setInterval(imagenesDeInicio,3000)

})