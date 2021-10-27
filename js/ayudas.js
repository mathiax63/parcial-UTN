const bosques = confirm("¿Quiere presentarse para ayuad a los bosques?");
const mar = confirm("¿Quier presentarse como voluntario para ayudar en los mares y oceanos?")
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