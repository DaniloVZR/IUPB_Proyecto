// Función para mostrar/ocultar el contenedor de PIA
function toggleProfesorFields() {
  limpiarFormulario();
  const piaContainer = document.getElementById('piaContainer');
  const 
  iner = document.getElementById('paContainer');
  if (document.getElementById('PIA').checked) {
    piaContainer.style.display = 'block';
    paContainer.style.display = 'none';
  } else {
    piaContainer.style.display = 'none';
    paContainer.style.display = 'block';
  }
}

////////////////////////// LÓGICA PARA AGREGAR PROFESORES EN PROYECTOS PIA //////////////////////////
let profesores = [];
let profesorEditandoIndex = -1;

// Función para agregar un profesor
function agregarProfesor() {
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const correo = document.getElementById('correo').value;
  const nombrePrograma = document.getElementById('nombrePrograma').value;
  const nombreCurso = document.getElementById('nombreCurso').value;
  const nivelCurso = document.getElementById('nivelCurso').value;

  if (nombre && apellido && correo && nombrePrograma && nombreCurso && nivelCurso) {
    const profesor = { nombre, apellido, correo, nombrePrograma, nombreCurso, nivelCurso };
    profesores.push(profesor);
    actualizarCards();
    limpiarFormulario();
  } else {
    alert('Por favor, complete todos los campos.');
  }
}

// Función para actualizar las cards
function actualizarCards() {
  const cardsContainer = document.getElementById('profesoresCards');
  cardsContainer.innerHTML = '';

  profesores.forEach((profesor, index) => {
    const card = document.createElement('div');
    card.className = 'card p-3 professor-card mb-3';
    card.innerHTML = `          
          <p><strong>Nombre:</strong> ${profesor.nombre} ${profesor.apellido}</p>
          <p><strong>Correo:</strong> ${profesor.correo}</p>
          <p><strong>Programa académico:</strong> ${profesor.nombrePrograma}</p>
          <p><strong>Curso:</strong> ${profesor.nombreCurso}</p>
          <p><strong>Nivel del curso:</strong> ${profesor.nivelCurso}</p>
          <div class="flex">
            <button class="btn btn-primary btn-sm" onclick="editarProfesor(${index})">Editar</button>
            <button class="btn btn-danger btn-sm" onclick="eliminarProfesor(${index})">Eliminar</button>
          </div>
        `;
    // card.onclick = () => cargarFormulario(index);
    cardsContainer.appendChild(card);
  });
}

// Editar profesor
function editarProfesor(index) {
  const btnagregarP = document.getElementById("btn-agregarP");
  const btnguardarP = document.getElementById("btn-guardarP");

  btnagregarP.classList.add('d-none');
  btnguardarP.classList.remove('d-none')

  profesorEditandoIndex = index;
  cargarFormulario(index);
}

function eliminarProfesor(index) {
  // Si estamos editando este profesor, cancelar la edición
  if (profesorEditandoIndex === index) {
    const btnagregarP = document.getElementById("btn-agregarP");
    const btnguardarP = document.getElementById("btn-guardarP");
    
    btnagregarP.classList.remove('d-none'); // Mostrar botón agregar
    btnguardarP.classList.add('d-none'); // Ocultar botón guardar
    
    profesorEditandoIndex = -1;
    limpiarFormulario();
  }
  
  profesores.splice(index, 1);
  actualizarCards();
}


function guardarProfesor() {
  if (profesorEditandoIndex === -1) return;
  
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const correo = document.getElementById('correo').value;
  const nombrePrograma = document.getElementById('nombrePrograma').value;
  const nombreCurso = document.getElementById('nombreCurso').value;
  const nivelCurso = document.getElementById('nivelCurso').value;

  if (nombre && apellido && correo && nombrePrograma && nombreCurso && nivelCurso) {
    // Actualizar el profesor con los nuevos datos
    profesores[profesorEditandoIndex] = { 
      nombre, 
      apellido, 
      correo, 
      nombrePrograma, 
      nombreCurso, 
      nivelCurso 
    };
    
    // Actualizar la interfaz
    actualizarCards();
    limpiarFormulario();
    
    // Restaurar botones y estado
    const btnagregarP = document.getElementById("btn-agregarP");
    const btnguardarP = document.getElementById("btn-guardarP");
    
    btnagregarP.classList.remove('d-none'); // Mostrar botón agregar
    btnguardarP.classList.add('d-none'); // Ocultar botón guardar
    
    profesorEditandoIndex = -1; // Resetear el índice de edición
  } else {
    alert('Por favor, complete todos los campos.');
  }
}


// Función para cargar los datos en el formulario
function cargarFormulario(index) {
  const profesor = profesores[index];
  document.getElementById('nombre').value = profesor.nombre;
  document.getElementById('apellido').value = profesor.apellido;
  document.getElementById('correo').value = profesor.correo;
  document.getElementById('nombrePrograma').value = profesor.nombrePrograma;
  document.getElementById('nombreCurso').value = profesor.nombreCurso;
  document.getElementById('nivelCurso').value = profesor.nivelCurso;
}

// Función para limpiar el formulario
function limpiarFormulario() {
  document.getElementById('nombre').value = '';
  document.getElementById('apellido').value = '';
  document.getElementById('correo').value = '';
  document.getElementById('nombrePrograma').value = '';
  document.getElementById('nombreCurso').value = '';
  document.getElementById('nivelCurso').value = '';
  document.getElementById('nombrePa').value = '';
  document.getElementById('apellidoPa').value = '';
  document.getElementById('correoPa').value = '';
  document.getElementById('nombreProgramaPa').value = '';
  document.getElementById('nombreCursoPa').value = '';
  document.getElementById('nivelCursoPa').value = '';
}

// Función para enviar el formulario
function enviarform() {
  
  let esValido = true;
  let camposFaltantes = [];
  
  const nombreProyecto = document.getElementById('nombreProyecto').value;
  const descripcionProyecto = document.getElementById('descripcionProyecto').value;
  const rProyecto = document.getElementById('rProyecto').value;
  
  if (!nombreProyecto) {
    camposFaltantes.push("Nombre del proyecto");
    esValido = false;
  }
  if (!descripcionProyecto) {
    camposFaltantes.push("Descripción del proyecto");
    esValido = false;
  }
  if (!rProyecto) {
    camposFaltantes.push("Relacionar el proyecto con microcurrículo");
    esValido = false;
  }
  
  
  // Validar campos específicos según el tipo de proyecto
  if (document.getElementById('PA').checked) {
    // Validar campos para PA
    const nombrePa = document.getElementById('nombrePa').value;
    const apellidoPa = document.getElementById('apellidoPa').value;
    const correoPa = document.getElementById('correoPa').value;
    const nombreProgramaPa = document.getElementById('nombreProgramaPa').value;
    const nombreCursoPa = document.getElementById('nombreCursoPa').value;
    const nivelCursoPa = document.getElementById('nivelCursoPa').value;
    
    if (!nombrePa) {
      camposFaltantes.push("Nombre del profesor");
      esValido = false;
    }
    if (!apellidoPa) {
      camposFaltantes.push("Apellido del profesor");
      esValido = false;
    }
    if (!correoPa) {
      camposFaltantes.push("Correo del profesor");
      esValido = false;
    }
    if (!nombreProgramaPa) {
      camposFaltantes.push("Nombre del programa académico");
      esValido = false;
    }
    if (!nombreCursoPa) {
      camposFaltantes.push("Nombre del curso");
      esValido = false;
    }
    if (!nivelCursoPa) {
      camposFaltantes.push("Nivel del curso");
      esValido = false;
    }
  } else {
    // Validar campos para PIA
    if (profesores.length === 0) {
      camposFaltantes.push("Al menos un profesor debe ser agregado para un proyecto PIA");
      esValido = false;
    }
  }
  
  // Si hay campos inválidos, mostrar alerta
  if (!esValido) {
    alert(`Por favor complete los siguientes campos obligatorios:\n- ${camposFaltantes.join("\n- ")}`);
    return;
  }
  
  const modalHTML = `
    <div class="modal fade" id="exitoModal" tabindex="-1" aria-labelledby="exitoModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header bg-success text-white">
            <h5 class="modal-title" id="exitoModalLabel">¡Proyecto enviado con éxito!</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p class="mb-0">Su proyecto ha sido inscrito correctamente. Gracias por participar en esta transformación educativa.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" id="btnContinuar">Continuar</button>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Añadir el modal al cuerpo del documento
  document.body.insertAdjacentHTML('beforeend', modalHTML);
  
  // Mostrar el modal
  const exitoModal = new bootstrap.Modal(document.getElementById('exitoModal'));
  exitoModal.show();
  
  // Configurar el botón para redirigir al index
  document.getElementById('btnContinuar').addEventListener('click', function() {
    window.location.href = 'index.html';
  });
  
  // Si el usuario cierra el modal mediante la X o haciendo clic fuera, también redirigir
  document.getElementById('exitoModal').addEventListener('hidden.bs.modal', function() {
    window.location.href = 'index.html';
  });
  
  // Limpiamos el formulario
  limpiarFormulario();
  profesores = [];
  actualizarCards();
}

// Inicializa el estado del contenedor al cargar la página
document.addEventListener('DOMContentLoaded', toggleProfesorFields);