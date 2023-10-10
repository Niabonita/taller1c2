function obtenerPares() {
    var entrada = document.getElementById("numeroInput").value;
    
    var numeros = entrada.split(",").map(function(numero) {
        return parseInt(numero.trim());
    });

    var numerosPares = numeros.filter(function(numero) {
        return numero % 2 === 0;
    });

    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.textContent = "Número(s) Par(es): " + numerosPares.join(", ");
}