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
    document.querySelector("#btnEj11").addEventListener("click", ej11);
    document.querySelector("#btnEj12").addEventListener("click", ej12);
    document.querySelector("#btnEj13").addEventListener("click", ej13);
    document.querySelector("#btnEj14").addEventListener("click", ej14);
    document.querySelector("#btnEj15").addEventListener("click", ej15);
    document.querySelector("#btnEj16").addEventListener("click", ej16);
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
    let resultado;
    if (numero1 === numero2) {
        resultado = numero1;
    } else {
        resultado = 1;
    }
    for (i = numero1; i <= numero2; i++) {
        resultado *= i
    }
    document.querySelector("#resEj10").innerHTML = resultado;
}

function ej11() {
    let numero1 = parseInt(document.querySelector("#txt1Ej11").value);
    let numero2 = parseInt(document.querySelector("#txt2Ej11").value);
    let numero3 = parseInt(document.querySelector("#txt3Ej11").value);
    let resultado = "",
        aux;
    if (numero1 > numero2) {
        aux = numero1;
        numero1 = numero2;
        numero2 = aux;
    }
    for (i = numero1; i <= numero2; i++) {
        if ((i % numero3) === 0) {
            resultado += i + " "
        }
    }
    document.querySelector("#resEj11").innerHTML = resultado;
}

function ej12() {
    let numero1 = parseInt(document.querySelector("#txt1Ej12").value);
    let resultado = 1;

    for (i = numero1; i > 0; i--) {
        resultado = (resultado * i)
    }
    document.querySelector("#resEj12").innerHTML = resultado;
}

function ej13() {
    let alto = parseInt(document.querySelector("#txt1Ej13").value);
    let ancho = parseInt(document.querySelector("#txt2Ej13").value);
    let resultado = "";
    for (let i = 1; i <= alto; i++) {
        for (let i = 1; i <= ancho; i++) {
            resultado += "⬛"
        }
        resultado += "<br>"
    }
    document.querySelector("#resEj13").innerHTML = resultado;
}

function ej14() {
    let numero = parseInt(document.querySelector("#txt1Ej14").value);
    let resultado = 1;
    while ((numero / 10) >= 1) {
        resultado += 1;
        numero /= 10;
    }
    document.querySelector("#resEj14").innerHTML = resultado;
}

function ej15() {
    let numero = parseInt(document.querySelector("#txt1Ej15").value);
    let resultado = "";
    if (numero > 2000) {
        while (numero >= 100) {
            numero /= 20
        }
        resultado = numero.toFixed(3)
        document.querySelector("#resEj15").innerHTML = resultado;
    } else {
        alert(numero + " no es un número válido, debe ser mayor a 2000")
        document.querySelector("#txt1Ej15").value = ""
    }
}

function ej16() {
    let resultado = 0;
    let numero1 = parseInt(document.querySelector("#txt1Ej16").value);
    let numero2 = parseInt(document.querySelector("#txt2Ej16").value);
    if (numero1 > numero2) {
        aux = numero1;
        numero1 = numero2;
        numero2 = aux;
    }
    for (i = numero1; i <= numero2; i++) {
        if (((i % 4) === 0) && ((i % 6) === 0)) {
            resultado = i
            i = (numero2 + 1)
        }
    }
    if (resultado === 0) {
        document.querySelector("#resEj16").innerHTML = "No hay";
    } else {
        document.querySelector("#resEj16").innerHTML = resultado;
    }

}