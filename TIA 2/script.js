// Función para mostrar/ocultar el contenedor de PIA
function toggleProfesorFields() {
  const piaContainer = document.getElementById('piaContainer');
  const paContainer = document.getElementById('paContainer');
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
    card.className = 'card p-3';
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
  cargarFormulario(index);
  actualizarCards();
}

// Función para eliminar un profesor
function eliminarProfesor(index) {
  profesores.splice(index, 1);
  actualizarCards();
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
}

// Inicializa el estado del contenedor al cargar la página
document.addEventListener('DOMContentLoaded', toggleProfesorFields);