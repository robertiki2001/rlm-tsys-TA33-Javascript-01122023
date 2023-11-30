var num = prompt("Introduzca el numero de su dni");
var letra = prompt("Introduzca la letra de su dni");

if (num < 0 || num > 99999999) {
    alert("El numero proporcionado no es valido.");
} else {
    var letras = [
        "T",
        "R",
        "W",
        "A",
        "G",
        "M",
        "Y",
        "F",
        "P",
        "D",
        "X",
        "B",
        "N",
        "J",
        "Z",
        "S",
        "Q",
        "V",
        "H",
        "L",
        "C",
        "K",
        "E",
        "T",
    ];

    var letraCalc = letras[num % 23];

    if (letraCalc != letra) {
        alert("La letra introducida no es correcta");
    } else {
        alert("La letra y el numero del dni son correctos");
    }
}
