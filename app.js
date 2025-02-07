// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = []
let listaLi = []


function validarEntrada(dato){
    let esInvalido = true
    while (esInvalido){
        if (dato=="" || dato.trim().length == 0){
            alert("Por favor ingrese un nombre");
            break;
        } else {
            esInvalido=false;
        }
    }
    return esInvalido;
}

function limpiarCampo(){
    campo = document.getElementById("amigo");
    campo.value = ""
}

function limpiarLista(){
    lista = document.getElementById("listaAmigos");
    lista.innerHTML =""
}

function agregarAListaLi(lista){
    limpiarLista()
    listaLi = document.getElementById("listaAmigos");
    for(var i=0; i<lista.length; i++){
        let li = document.createElement('li');
        li.textContent = lista[i];
        listaLi.appendChild(li);
    }
}

function capturarNombre(){
    nombre = document.getElementById("amigo").value;
    return nombre;
}

function hayAmigo(lista){
    let hayAmigo = false;

    if (lista.length!=0){
        hayAmigo = true
    }
    return hayAmigo;
}

function agregarAmigo(){
    amigo=capturarNombre();
    if (!validarEntrada(amigo)) {
        listaAmigos.push(amigo);
        agregarAListaLi(listaAmigos)
    }
    limpiarCampo();
}

function sortearNumero(lista){
    numero = Math.floor((Math.random()*lista.length)+1)
    return numero;
}

function mostrarResultado(amigo){
    resultPlaceholder = document.getElementById("resultado")
    let amigoSorteado = document.createElement('li')
    amigoSorteado.textContent="Felicitaciones! El amigo secreto es "+ amigo
    resultPlaceholder.appendChild(amigoSorteado)
}

function sortearAmigo(){
    limpiarLista();
    console.log(hayAmigo(listaAmigos))
    if (hayAmigo(listaAmigos)){
        let numeroSorteado = sortearNumero(listaAmigos);
        console.log(numeroSorteado)
        let amigoSorteado = listaAmigos[numeroSorteado-1];
        console.log(amigoSorteado);
        mostrarResultado(amigoSorteado)
    } else {
        alert("No hay amigos para sortear, por favor ingreselos.")
    }    
}