
var palabras = ["python", "javascript", "java", "typescript", "sql", "php"];


var palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)];


var palabraAdivinanza = "_".repeat(palabraSecreta.length);

var intentosMaximos = 10;
var intentosRestantes = intentosMaximos;

var letrasAdivinadas = [];


function actualizarPalabraAdivinanza() {
    document.getElementById("wordToGuess").textContent = palabraAdivinanza;
}


function adivinarLetra() {
    var letra = document.getElementById("letterInput").value.toLowerCase();
    
    if (letra.length === 1 && /^[a-z]$/.test(letra) && letrasAdivinadas.indexOf(letra) === -1) {
        letrasAdivinadas.push(letra);
        document.getElementById("guessedLetters").textContent = letrasAdivinadas.join(", ");
        
        if (palabraSecreta.includes(letra)) {
           
            for (var i = 0; i < palabraSecreta.length; i++) {
                if (palabraSecreta[i] === letra) {
                    palabraAdivinanza = palabraAdivinanza.substring(0, i) + letra + palabraAdivinanza.substring(i + 1);
                }
            }
            actualizarPalabraAdivinanza();
            
            if (palabraAdivinanza === palabraSecreta) {
                alert("¡Excelente! Has acertado");
                reiniciarJuego();
            }
        } else {
           
            intentosRestantes--;
            document.getElementById("remainingGuesses").textContent = intentosRestantes;
            if (intentosRestantes === 0) {
                alert("¡Has agotado tus intentos! La palabra secreta era: " + palabraSecreta);
                reiniciarJuego();
            }
        }
    } else {
        alert("Por favor, introduce una letra");
    }
    
    document.getElementById("letterInput").value = "";
}

function adivinarPalabra() {
    var palabraAdivinada = document.getElementById("wordInput").value.toLowerCase();
    
    if (palabraAdivinada === palabraSecreta) {
        alert("¡Increíble! Has descubierto la palabra correctamente");
        reiniciarJuego();
    } else {
        alert("Palabra incorrecta ¡Sigue intentando ^-^!");
    }
    
    document.getElementById("wordInput").value = "";
}

function reiniciarJuego() {
    palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)];
    palabraAdivinanza = "_".repeat(palabraSecreta.length);
    letrasAdivinadas = [];
    intentosRestantes = intentosMaximos;
    document.getElementById("guessedLetters").textContent = "";
    document.getElementById("remainingGuesses").textContent = intentosRestantes;
    actualizarPalabraAdivinanza();
}
actualizarPalabraAdivinanza();