var entrada = document.querySelector("#entrada");
var salida = document.querySelector("#salida");
var muestra = document.querySelector("#muestra");
var validacion = true;

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
    salida.style.display = "inline-block";
    muestra.style.display = "none";
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
}

function copyToClipBoard() {
    var content = document.getElementById("salida");

    content.select();
    document.execCommand("copy");

    entrada.value = "";
}
