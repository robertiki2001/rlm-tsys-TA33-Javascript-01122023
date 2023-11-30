var num = prompt("Introduzca un numero para saber si es par o no");

alert(parImpar(num));

function parImpar(x) {
    if (x % 2 == 0) {
        return "El valor es par";
    } else {
        return "El valor es impar";
    }
}
