var num = prompt("Introduzca un numero para hacer su factorial");

var fact = num;
var msg = num + " => " + num;

for (let index = 1; index < num; index++) {
  fact *= num - index;
  msg += " x " + (num - index);
}
msg += " = " + fact;

alert(msg);
