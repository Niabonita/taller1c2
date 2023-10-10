function capPrimerasLetras() {
    var entrada = document.getElementById("textoInput").value;
    var palabras = entrada.split(" ");
    
    for (var i = 0; i < palabras.length; i++) {
        palabras[i] = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1);
    }
    
    var resultado = palabras.join(" ");
    
    document.getElementById("resultado").textContent = "Texto en formato capitalizado: " + resultado;
}