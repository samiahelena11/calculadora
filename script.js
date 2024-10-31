// script.js
let display = document.getElementById('display');

function adicionarNumero(numero) {
    display.value += numero;
}

function operacao(op) {
    display.value += " " + op + " ";
}

function calcular() {
    try {
        display.value = eval(display.value.replace("×", "*").replace("÷", "/"));
    } catch (e) {
        display.value = "Erro";
    }
}

function limparDisplay() {
    display.value = "";
}
