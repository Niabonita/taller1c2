function generarContrato() {
    var clientName = document.getElementById("clientName").value;
    var startDate = document.getElementById("startDate").value;
    var termsAndConditions = document.getElementById("termsAndConditions").value;

    var contratoLegal = `
    Contrato de Prestación de Servicios

    Partes Involucradas:
    Proveedor de Servicios: 
    Jane Doe Services Inc., 123 Serviceland Ave, Ciudad Ficticia, Tel: 555-123-4567, Email: info@janedoeservices.com
    Cliente: ${clientName}, 456 Cliente St, Ciudad xd, Tel: 555-987-6543, Email: contact@${clientName}corp.com
    
    Servicios a Prestar:
    El proveedor se compromete a proporcionar los siguientes servicios al cliente: Desarrollo de software personalizado para la gestión de inventario, incluyendo diseño, desarrollo y capacitación del personal.

    Duración del Contrato:
    Este contrato tendrá una duración de 12 meses a partir del ${startDate}.

    Compensación:
    El cliente pagará al proveedor la cantidad total de COP 300,000,000 por los servicios prestados. El pago se realizará en cuatro cuotas de COP 75,000,000 al inicio de cada trimestre del contrato.
    Fecha de Inicio: ${startDate}
    
    Términos y Condiciones:
    ${termsAndConditions}

    Confidencialidad:
    Ambas partes acuerdan mantener en confidencialidad cualquier información confidencial compartida durante la prestación de los servicios.

    Resolución de Disputas:
    Cualquier disputa relacionada con este contrato será resuelta mediante mediación de conformidad con las leyes del Estado de Colombia.
    
    Firma:
    ______________________ [Nombre del Representante del Proveedor] Fecha: ${startDate}
    Cargo: Director Ejecutivo, Jane Doe Services Inc.

    ______________________ [Nombre del Representante del Cliente] Fecha: ${startDate}
    Cargo: Gerente de Proyectos, ${clientName}
    
    Este contrato es válido a partir de la fecha de inicio mencionada anteriormente.
    `;

    document.getElementById("contractText").textContent = contratoLegal;
}