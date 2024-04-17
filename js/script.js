window.addEventListener("load", inicio);

function inicio() {
    document.querySelector("#btnEj1").addEventListener("click", ej1);
    document.querySelector("#btnEj2").addEventListener("click", ej2);
    document.querySelector("#btnEj3").addEventListener("click", ej3);
    document.querySelector("#btnEj4").addEventListener("click", ej4);
    document.querySelector("#btnEj5").addEventListener("click", ej5);
    document.querySelector("#btnEj6").addEventListener("click", ej6);
    document.querySelector("#btnEj7").addEventListener("click", ej7);
    document.querySelector("#btnEj8").addEventListener("click", ej8);
    document.querySelector("#btnEj9").addEventListener("click", ej9);
    document.querySelector("#btnEj10").addEventListener("click", ej10);
}

function ej1() {
    let resultado = "";
    for (i = 1; i <= 1000; i++) {
        resultado += i + "<br>"
    }
    document.querySelector("#resEj1").innerHTML = resultado;
}

function ej2() {
    let resultado = "";
    for (i = -100; i <= 10; i++) {
        resultado += i + "<br>"
    }
    document.querySelector("#resEj2").innerHTML = resultado;
}

function ej3() {
    let resultado = "";
    for (i = 40; i >= 10; i--) {
        resultado += i + "<br>"
    }
    document.querySelector("#resEj3").innerHTML = resultado;
}

function ej4() {
    let resultado = "";
    for (i = 20; i >= -30; i--) {
        resultado += i + "<br>"
    }
    document.querySelector("#resEj4").innerHTML = resultado;
}

function ej5() {
    let resultado = "";
    for (i = 1; i <= 450; i++) {
        if ((i % 5) === 0) {
            resultado += i + "<br>"
        }
    }
    document.querySelector("#resEj5").innerHTML = resultado;
}

function ej6() {
    let resultado = "";
    for (i = -33; i <= 230; i++) {
        if ((i % 4) === 0) {
            resultado += i + "<br>"
        }
    }
    document.querySelector("#resEj6").innerHTML = resultado;
}

function ej7() {
    let resultado = "";
    let numero = parseInt(document.querySelector("#txt1Ej7").value);
    if ((numero >= 2) && (numero <= 50)) {
        for (i = 1; i <= numero; i++) {
            resultado += "-"
        }
    }
    document.querySelector("#resEj7").innerHTML = resultado;
}

function ej8() {
    let resultado = "";
    let aux;
    let numero1 = parseInt(document.querySelector("#txt1Ej8").value);
    let numero2 = parseInt(document.querySelector("#txt2Ej8").value);
    if (numero1 < numero2) {
        aux = numero2;
        numero2 = numero1;
        numero1 = aux;
    }
    for (i = numero2; i <= numero1; i++) {
        resultado += i + "<br>"
    }
    document.querySelector("#resEj8").innerHTML = resultado;
}
/* Usé restas también para los numeros negativos */
function ej9() {
    let resultado = 0;
    let numero1 = parseInt(document.querySelector("#txt1Ej9").value);
    let numero2 = parseInt(document.querySelector("#txt2Ej9").value);
    if (numero2 >= 0) {
        for (i = 1; i <= numero2; i++) {
            resultado += numero1
        }
    } else {
        for (i = -1; i >= numero2; i--) {
            resultado -= numero1
        }
    }
    document.querySelector("#resEj9").innerHTML = resultado;
}

function ej10() {
    let numero1 = parseInt(document.querySelector("#txt1Ej10").value);
    let numero2 = parseInt(document.querySelector("#txt2Ej10").value);
    let resultado = numero1;
    for (i = numero1; i <= numero2; i++) {
            resultado *= i
    }
    document.querySelector("#resEj10").innerHTML = resultado;
}