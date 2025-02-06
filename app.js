// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = []
let esInvalido = true

function validarEntrada(dato){
    if (dato==""){
        alert("Por favor ingrese un nombre");
    } else {
        esInvalido=true;
    }
}

function capturarNombre(){
    nombre = document.getElementById("amigo").value;
    return nombre;
}

function agregarAmigo(){
    amigo=capturarNombre();
    console.log(amigo)
    console.log(typeof(amigo))
    /*while (esInvalido) {
        validarEntrada(amigo)
    };
    listaAmigos.push(amigo)
    console.log(listaAmigos)*/
}
