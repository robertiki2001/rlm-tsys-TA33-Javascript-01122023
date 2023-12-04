var regexDate = /(0[1-9]|[12][0-9]|3[01])[/](0[1-9]|1[012])[/](19|20)\d\d/;
var regexEmail = /.[@][a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,3}/;

if(regexDate.test("Nací el 05/04/1982 en Donostia"))
{
    console.log("Nací el 05/04/1982 en Donostia contiene una fecha valida.");
}

if(regexEmail.test("joanr.m.1999@gmail.com"))
{
    console.log("joanr.m.1999@gmail.com es un correo valido.");
}

window.onload = function(){
    document.getElementsByTagName("body")[0].innerHTML = document.getElementsByTagName("body")[0].innerHTML.replace(/<script>.{0,}<\/script>/g, "");
    console.log("Remplazo de scripts maliciosos");
    document.getElementsByTagName("p")[0].innerText = excapeHTML(document.getElementsByTagName("p")[0].innerText);
    document.getElementsByTagName("p")[1].innerText = cambiarNombre(document.getElementsByTagName("p")[1].innerText);
};



function excapeHTML(text)
{
    text = text.replace(/&/g, "&amp;");
    text = text.replace(/\"/g, "&quot;");
    text = text.replace(/</g, "&lt;");
    text = text.replace(/>/g, "&gt;");

    return text;
}

function cambiarNombre(text)
{
    var str = text.split(/\s/);

    return str[1] + ", " + str[0];
}