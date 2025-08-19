let tareas = [];

// Crea un objeto tarea
function crearTarea(texto) {
  return {
    id: Math.floor(Math.random() * 10000),
    texto: texto,
    fecha: new Date().toLocaleString()
  };
}

// Añade una nueva tarea
function agregarTarea() {
  const input = document.getElementById("nuevaTarea");
  const texto = input.value.trim();

  if (texto === "") {
    mostrarMensaje("⚠️ No puedes agregar una tarea vacía.");
    return;
  }

  const nuevaTarea = crearTarea(texto);
  tareas.push(nuevaTarea);
  input.value = "";
  mostrarMensaje("");
  mostrarTareas();
}

// Elimina una tarea por id
function eliminarTarea(id) {
  tareas = tareas.filter(tarea => tarea.id !== id);
  mostrarTareas();
}

// Elimina todas las tareas
function eliminarTodas() {
  tareas = [];
  mostrarTareas();
  mostrarMensaje("Todas las tareas han sido eliminadas.");
}

// Muestra todas las tareas en la interfaz
function mostrarTareas() {
  const lista = document.getElementById("listaTareas");
  lista.innerHTML = "";

  tareas.forEach(tarea => {
    lista.appendChild(crearElementoTarea(tarea));
  });
}

// Crea el elemento visual de una tarea
function crearElementoTarea(tarea) {
  const item = document.createElement("li");
  item.textContent = `${tarea.texto} (${tarea.fecha})`;

  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "Eliminar";
  btnEliminar.onclick = () => eliminarTarea(tarea.id);

  item.appendChild(btnEliminar);
  return item;
}

// Muestra un mensaje en la interfaz
function mostrarMensaje(msg) {
  document.getElementById("mensaje").textContent = msg;
}

// Alterna la visibilidad de la lista de tareas
function alternarMostrarTareas() {
  const lista = document.getElementById("listaTareas");
  const btnMostrar = document.querySelector('button[onclick="mostrarTareas()"]');
  if (lista.style.display === "none" || lista.style.display === "") {
    lista.style.display = "block";
    btnMostrar.textContent = "Ocultar tareas";
    mostrarTareas();
  } else {
    lista.style.display = "none";
    btnMostrar.textContent = "Mostrar tareas";
  }
}