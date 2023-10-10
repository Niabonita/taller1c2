function obtLongitudes() {
    var entrada = document.getElementById("inputPalabras").value;
    
    var palabras = entrada.split(",").map(function(palabra) {
        return palabra.trim();
    });
    
    var longitudes = palabras.map(function(palabra) {
        return palabra.length;
    });
    
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.textContent = "Longitud(es) de la(s) palabra(s): " + longitudes.join(", ");
}