function buscador() {
    const busqueda = document.getElementById("buscador").value;
    if (busqueda) {        
        window.open(`https://www.google.com/search?q=${encodeURIComponent(busqueda)}`, '_blank');
    }
}

function mostrarMensaje() {
    alert("Disponible solamente para premium");
}

function borrar(){
    const formulario = document.querySelector('form');
    formulario.reset();
}

function enviarCorreo() {
    const nombre = document.getElementById("nombre").value;
    const apellido1 = document.getElementById("apellido1").value;
    const apellido2 = document.getElementById("apellido2").value;
    const edad = document.getElementById("edad").value; 
    const asunto = document.getElementById("asunto").value;
    const email = document.getElementById("mail").value;    
    const dni = document.getElementById("dni").value;    
    const fechaNacimiento = document.getElementById("fecha_nacimiento").value;
 
    const cuerpoMensaje = `Nombre: ${nombre} ${apellido1} ${apellido2}%0A` +
                          `Edad: ${edad}%0A` + 
                          `Correo electronico: ${email}%0A` +                          
                          `DNI: ${dni}%0A` + 
                          `Fecha de Nacimiento: ${fechaNacimiento}%0A` +                     
                          `Asunto: ${asunto}`;
    const mailtoLink = `mailto:mquesada@umh.es?subject=${encodeURIComponent(asunto)}&body=${cuerpoMensaje}`;
    window.location.href = mailtoLink;

    formulario.reset();
}