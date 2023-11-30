var texto = prompt("Introduzca una cadena de texto.");

alert(textoPalindromo(texto));

function textoPalindromo(x) {
    str1 = "";
    str2 = "";

    for (let index = 0; index < x.length; index++) {
        if (x.charAt(index) != ' ') {
            str1 += x.charAt(index);
        }
    }

    for (let index = str1.length - 1; index >= 0; index--) {
        str2 += str1.charAt(index);
    }

    if (str1.toLowerCase() === str2.toLowerCase()) {
        return "El texto introducido es palindromo.";
    }
    else {
        return "El texto introducido no es palindromo.";
    }
}