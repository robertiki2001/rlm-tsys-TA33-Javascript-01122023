window.onload = function(){
    for (var p of document.getElementsByTagName("p")) {
        p.addEventListener("click", function(){
            var then = this; 
            then.innerHTML = "Se presionó un párrafo del documento";
            setTimeout(function() {
                then.innerHTML = "";
            }, 2000);
        });
    }

    for (var p of document.getElementsByTagName("table")[1].getElementsByTagName("p")) {

        p.addEventListener("click", function(){
            var then = this; 
            then.innerHTML = "Se presionó un párrafo contenido en la segunda tabla.";
            setTimeout(function() {
                then.innerHTML = "";
            }, 2000);
        });
    }
};