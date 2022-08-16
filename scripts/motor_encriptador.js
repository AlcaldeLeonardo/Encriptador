var entrada = document.querySelector("#entrada");
var salida = document.querySelector("#salida");
var marco = document.querySelector("#marco");
var muestra = document.querySelector("#nohaymensaje");
var muñeco = document.querySelector("#muñeco");
var validacion = true;
var botonCopiar = document.querySelector("#botonCopiar")

function validar() {
    var texto = entrada.value;
    let letrasValidas = "abcdefghijklmnñopqrstuvwxyz¿?¡!.,()-:; ";

    for (let letra of texto) {
        if (!letrasValidas.includes(letra)) {
            alert("No ingreses Mayusculas ni acentos");
            validacion = 1;
            break;
        } else {
            validacion = 0;
        }
    }
    if (validacion == 1) {
        return true;
    } else {
        return false
    }
}

function encriptar() {
    if (validar()) return;
    var mensaje = entrada.value;
    var mensajeEncriptado = mensaje
        .replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("o", "ober")
        .replaceAll("a", "ai")
        .replaceAll("u", "ufat");
    salida.value = mensajeEncriptado;
    marco.style.display = "inline-block";
    muestra.style.display = "none";
    muñeco.style.display = "none";
    botonCopiar.style.display = "block" 
}

function desencriptar() {
    if (validar()) return;
    var mensaje = entrada.value;
    var mensajeEncriptado = mensaje
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ober", "o")
        .replaceAll("ai", "a")
        .replaceAll("ufat", "u");
        salida.value = mensajeEncriptado;
        marco.style.display = "inline-block";
        muestra.style.display = "none";
        muñeco.style.display = "none";
        botonCopiar.style.display = "block"
}

function copyToClipBoard() {
    var content = document.getElementById("salida");

    content.select();
    document.execCommand("copy");

    entrada.value = "";
}
