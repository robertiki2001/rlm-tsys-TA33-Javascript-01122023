var valores = [true, 5, false, "hola", "adios", 2];

var str1,
    num1,
    boolean1,
    msg = "";

for (var variable of valores) {
    if (typeof variable === "string") {
        if (str1 == null) {
            str1 = variable;
        } else {
            if (str1.length > variable.length) {
                msg +=
                    "\nLa palabra " +
                    str1 +
                    "(" +
                    str1.length +
                    ") es mas larga que " +
                    variable +
                    "(" +
                    variable.length +
                    ")\n";
            } else if (str1.length < variable.length) {
                msg +=
                    "\nLa palabra " +
                    variable +
                    "(" +
                    variable.length +
                    ") es mas larga que " +
                    str1 +
                    "(" +
                    str1.length +
                    ")\n";
            } else {
                msg +=
                    "\nLas palabras " +
                    variable +
                    " y " +
                    str1 +
                    " tienen la misma longitud " +
                    str1.length +
                    "\n";
            }
        }
    } else if (typeof variable === "boolean") {
        if (boolean1 == null) {
            boolean1 = variable;
        } else {
            if (boolean1 != variable) {
                msg += "\n" + variable + "\n" + boolean1 + "\n";
            } else {
                msg += "\n" + !variable + "\n" + boolean1 + "\n";
            }
        }
    } else if (typeof variable === "number") {
        if (num1 == null) {
            num1 = variable;
        } else {
            msg += "\n" + num1 + " + " + variable + " = " + (num1 + variable) + "\n";
            msg += "\n" + num1 + " - " + variable + " = " + (num1 - variable) + "\n";
            msg += "\n" + num1 + " * " + variable + " = " + num1 * variable + "\n";
            msg += "\n" + num1 + " / " + variable + " = " + num1 / variable + "\n";
            msg += "\n" + num1 + " % " + variable + " = " + (num1 % variable) + "\n";
        }
    }
}

alert(msg);
