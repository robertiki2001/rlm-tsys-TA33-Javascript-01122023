window.onload = function(){
    
  for (var foto of document.getElementById("miniaturas").getElementsByTagName("img")) 
  {
      foto.addEventListener("click", function () {
         document.getElementById("imagenCentral").src = this.src;
         document.getElementById("imagenCentral").alt = this.alt; 
         document.getElementById("TextoCentral").innerText = this.alt;
      });
  }
};