var texto = prompt("Introduzca una cadena de texto.");

alert(textoMayMinMix(texto));

function textoMayMinMix(x) {
    var booleanMay, booleanMin;

    for (let index = 0; index < x.length; index++) {
        if (x.charAt(index) >= "A" && x.charAt(index) <= "Z") {
            booleanMay = true;
        } else if (x.charAt(index) >= "a" && x.charAt(index) <= "z") {
            booleanMin = true;
        }
    }

    if (booleanMay && booleanMin) {
        return "La cadena esta formada por Mayusculas y Minusculas";
    } else if (booleanMay) {
        return "La cadena esta formada solo por Mayusculas";
    } else if (booleanMin) {
        return "La cadena esta formada solo por Minusculas";
    } else {
        return "La cadena no esta formada por Mayusculas y Minusculas";
    }
}
