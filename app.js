// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo(){
    let amigo = document.getElementById('amigo').value;
    console.log(amigos)
    if (amigo == ''){
        alert("Por favor, inserte un nombre.");}
    else {
        amigos.push(amigo);
        console.log(amigos)
        limpiarCampo();
        actualizarListaDeAmigos(); }
}

function limpiarCampo() {
    document.querySelector('#amigo').value = '';
}
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function crearElemento(elemento, texto) {
    let elementoHTML = document.createElement(elemento); 
    elementoHTML.textContent = texto;  
    return elementoHTML;  
  }
  
function actualizarListaDeAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML="";
    for (let i=0; i<amigos.length;i++) {
       let li = crearElemento('li',amigos[i]);
       lista.appendChild(li);
    }
}
function sortearAmigo(){
    let amigoSorteado=  Math.floor(Math.random()*amigos.length);
    if (amigos.length<2){
        alert("Tiene que ingresar al menos 2 nombres para realizar el sorteo");}
    else{
        let resultado = document.createElement('li');
        resultado.textContent = `Tu Amigo Secreto es: ${amigos[amigoSorteado]}`;

        let listaResultado = document.getElementById('resultado');
        listaResultado.innerHTML = '';
        listaResultado.appendChild(resultado);  
    }
}
actualizarListaDeAmigos();