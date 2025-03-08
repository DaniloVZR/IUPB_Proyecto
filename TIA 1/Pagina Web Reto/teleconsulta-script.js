/**
 *  Colocar aquí el equipo y sus integrantes
 */

/**
 *  Manejo de previsualización de imágenes
 */
document.getElementById('fotoPaciente').addEventListener('change', function(event) {
    mostrarImagen(event, 'previewPaciente');
});

/**
 * Evento de previsualización de foto del Médico
 */
document.getElementById('fotoDoctor').addEventListener('change', function(event) {
    mostrarImagen(event, 'previewDoctor');
});

/**
 * Carga inicial del Formulario
 */
document.addEventListener("DOMContentLoaded", function () {
    // Ruta de la imagen y el audio dentro de la misma carpeta
    const imagenPaciente   = "teleconsulta-foto-paciente.png";
    const imagenDoctor     = "teleconsulta-foto-doctor.png";
    const audioDiagnostico = "teleconsulta-diagnostico.mp3";

    // Cargar imagen del paciente automáticamente
    document.getElementById("previewPaciente").src = imagenPaciente;
    document.getElementById("previewPaciente").alt = "Foto del Paciente";

    // Cargar imagen del doctor automáticamente
    document.getElementById("previewDoctor").src = imagenDoctor;
    document.getElementById("previewDoctor").alt = "Foto del Doctor";

    // Cargar y reproducir el audio automáticamente
    const audioPlayer = document.getElementById("audioPlayback");
    audioPlayer.src = audioDiagnostico;
    audioPlayer.controls = true;
});

/**
 * Función para mostrar imagen de paciente o doctor
 */
function mostrarImagen(event, previewId) {
    const archivo = event.target.files[0];
    if (archivo) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById(previewId).src = e.target.result;
        };
        reader.readAsDataURL(archivo);
    }
}

/** 
 * Validación y envío del formulario
 */
document.getElementById("miBoton").addEventListener("click", function(event) {
    event.preventDefault(); // Evita el envío automático del formulario

    // Obtener valores de los campos
    const idpaciente = document.getElementById("cedulaPaciente").value.trim();    

    const nombrePaciente  = document.getElementById("nombrePaciente").value.trim();
    const apellidoPaciente = document.getElementById("apellidoPaciente").value.trim();
    const edadPaciente    = document.getElementById("edadPaciente").value.trim();
    const generoPaciente = document.getElementById("generoPaciente").value.trim();

    const nombreDoctor    = document.getElementById("nombreDoctor").value.trim();
    const apellidoDoctor  = document.getElementById("apellidoDoctor").value.trim();
    const especialidad    = document.getElementById("especialidad").value.trim();
    const generoDoctor = document.getElementById("generoDoctor").value.trim();

    const sintomas        = document.getElementById("sintomas").value.trim();
    const diagnostico     = document.getElementById("diagnostico").value.trim();

    // Verificar si hay campos vacíos
    if (!generoPaciente || !generoDoctor || !idpaciente || !nombrePaciente || !apellidoPaciente || !edadPaciente || fotoPaciente === 0 ||
        !nombreDoctor || !apellidoDoctor || !especialidad || fotoDoctor === 0 ||
        !sintomas || !diagnostico) {
        
        alert("⚠️ Error: Por favor, completa todos los campos obligatorios antes de enviar.");
    } else {
        alert("✅ ¡Enviado con éxito!");
        document.getElementById("teleconsulta-form").reset(); // Reinicia el formulario
    }
});
