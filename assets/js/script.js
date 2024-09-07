
const button = document.querySelector("#boton");



async function getData(){
    const res = await fetch("https://mindicador.cl/api")
    const data = await res.json()
    return data;
}
    

async function TransformarMonedas(){   
const monedas = {
    dolares : "dolar",
    bitcoin : "bitcoins",
    euro: "euros",
    dolar_intercambio : "dolar intercambio",
    ivp : "ivp",
    uf : "ufs"

}

const monedaconsulta = document.querySelector("#mi-input2").value;
const cantidadTransformar = document.querySelector("input").value;
const respuestamonedas = document.querySelector("#respuesta");


try{
const monedas = await getData();
respuestamonedas.innerHTML=(`el valor de ${cantidadTransformar} ${monedaconsulta} en pesos chileno es  ${monedas[monedaconsulta].valor * cantidadTransformar}`);

}catch(error){
alert("ocurrio un error. trate de escribir el texto en minúscula y en singular")


}


}



function ejemplo(){ 

button.addEventListener('click', TransformarMonedas());


}