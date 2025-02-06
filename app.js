// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = []


function validarEntrada(dato){
    let esInvalido = true
    while (esInvalido){
        if (dato==""){
            alert("Por favor ingrese un nombre");
            break;
        } else {
            esInvalido=false;
        }
    }
    return esInvalido;
}

function capturarNombre(){
    nombre = document.getElementById("amigo").value;
    return nombre;
}

function agregarAmigo(){
    amigo=capturarNombre();
    if (!validarEntrada(amigo)) {
        listaAmigos.push(amigo);
        console.log(listaAmigos);
    }
}
