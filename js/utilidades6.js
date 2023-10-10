var autores = ["Mi Vecino Totoro (1988)","Susurros del Corazón (1995)", "El Castillo Ambulante (2004)", "Kiki: Entregas a Domicilio (1989)", "La Princesa Mononoke (1997)"];
var citas = [
    "La vida es una aventura, la naturaleza es maravillosa y el amor es eterno.",
    "Los sueños son lugares secretos y cuando despiertas, no puedes volver a ellos.",
    "A veces, las personas olvidan que están hechas de luz, y uno puede olvidarse fácilmente porque esas cosas están ocultas a simple vista.",
    "Pero ¿qué significa 'ser valiente' en un mundo como este? Ser valiente significa saber cuándo necesitas ayuda y pedirla.",
    "La gente olvida que ellos mismos son parte de la naturaleza...y ellos mismos se olvidan."
];
function generarCita() {
    var autorAleatorio = autores[Math.floor(Math.random() * autores.length)];
    var citaAleatoria = citas[Math.floor(Math.random() * citas.length)];
    
    var citaCompleta = autorAleatorio + ' dijo: "' + citaAleatoria + '"';
    
    document.getElementById("quote").textContent = citaCompleta;
}