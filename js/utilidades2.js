function generarTarjeta() {
var name = document.getElementById("name").value;
var jobTitle = document.getElementById("jobTitle").value;
var company = document.getElementById("company").value;
var contact = document.getElementById("contact").value;

var tarjetaPresentacion =
    "Nombre: " + name + "<br>" +
    "Cargo: " + jobTitle + "<br>" +
    "Empresa: " + company + "<br>" +
    "Contacto: " + contact;

document.getElementById("businessCard").innerHTML = tarjetaPresentacion;
}