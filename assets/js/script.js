
// Función para mostrar el alert de éxito en suscripción newsletter
function mostrarAlertaExitoNewsletter() {
    var nombreCompleto = document.getElementById('nombre_completo').value;
    var correoElectronico = document.getElementById('correo_electronico').value;

    // Verificar si ambos campos están completos
    if (nombreCompleto && correoElectronico) {
        alert('¡Suscripción realizada con éxito!');

        // Limpiar los campos después de mostrar el alert
        document.getElementById('nombre_completo').value = '';
        document.getElementById('correo_electronico').value = '';
    }
}

// Función para mostrar el alert de éxito en el formulario de contacto
function mostrarAlertaExitoContacto() {
    var nombres = document.getElementById('nombres').value;
    var apellidos = document.getElementById('apellidos').value;
    var email = document.getElementById('email').value;
    var comentarios = document.getElementById('comentarios').value;

    // Verificar si todos los campos están completos
    if (nombres && apellidos && email && comentarios) {
        alert('¡Gracias por contactarnos! Recibimos tu mensaje y prontamente te responderemos.');

        // Limpiar los campos después de mostrar el alert
        document.getElementById('nombres').value = '';
        document.getElementById('apellidos').value = '';
        document.getElementById('email').value = '';
        document.getElementById('comentarios').value = '';
    }
}

// Función para mostrar el alert de éxito en el formulario de registro
function mostrarAlertaExitoRegistro() {
    var rut = document.getElementById('rut').value;
    var nombre = document.getElementById('nombre').value;
    var apellidos = document.getElementById('apellidos').value;
    var email = document.getElementById('email').value;
    var telefono = document.getElementById('telefono').value;
    var calle = document.getElementById('calle').value;
    var numero = document.getElementById('numero').value;
    var depto = document.getElementById('departamento').value;
    var comuna = document.getElementById('comuna').value;
    var region = document.getElementById('region').value;

    // Verificar si todos los campos obligatorios están completos
    if (rut && nombre && apellidos && email && telefono && calle && numero && comuna && region) {
        alert('¡Registro realizado con éxito!');

        // Limpiar los campos después de mostrar el alert
        document.getElementById('rut').value = '';
        document.getElementById('nombre').value = '';
        document.getElementById('apellidos').value = '';
        document.getElementById('email').value = '';
        document.getElementById('telefono').value = '';
        document.getElementById('calle').value = '';
        document.getElementById('numero').value = '';
        document.getElementById('departamento').value = '';
        document.getElementById('comuna').value = '';
        document.getElementById('region').value = '';
    }
}

// Función para mostrar el alert de éxito en el formulario de registro de mascota
function mostrarAlertaExitoRegistroMascota() {
    var chip = document.getElementById('chip').value;
    var nombre = document.getElementById('nombre').value;
    var especie = document.getElementById('especie').value;
    var raza = document.getElementById('raza').value;
    var edad = document.getElementById('edad').value;
    var sexo = document.getElementById('sexo').value;
    var esterilizado = document.getElementById('esterilizado').value;

    // Verificar si todos los campos obligatorios están completos
    if (nombre && especie && raza && edad && sexo && esterilizado) {
        alert('¡Registro de mascota realizado con éxito!');

        // Limpiar los campos después de mostrar el alert
        document.getElementById('chip').value = '';
        document.getElementById('nombre').value = '';
        document.getElementById('especie').value = '';
        document.getElementById('raza').value = '';
        document.getElementById('edad').value = '';
        document.getElementById('sexo').value = '';
        document.getElementById('esterilizado').value = '';
    }
}
