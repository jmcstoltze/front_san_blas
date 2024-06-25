
// Función para mostrar el alert de éxito en suscripción newsletter
function verificarYEnviar() {
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