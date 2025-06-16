const formulario = document.getElementById('todo-form');
const inputTarea = document.getElementById('nueva-tarea');
const lista = document.getElementById('lista-tareas');

let tareas = JSON.parse(localStorage.getItem('tareas')) || [];

const guardarTareas = () => {
  localStorage.setItem('tareas', JSON.stringify(tareas));
};

const renderizarTareas = () => {
  lista.innerHTML = '';
  tareas.forEach((tarea, indice) => {
    const li = document.createElement('li');
    li.className = 'todo-item';

    const span = document.createElement('span');
    span.textContent = tarea;

    const btnBorrar = document.createElement('button');
    btnBorrar.textContent = '×';
    btnBorrar.addEventListener('click', () => {
      tareas.splice(indice, 1);
      guardarTareas();
      renderizarTareas();
    });

    li.append(span, btnBorrar);
    lista.appendChild(li);
  });
};

formulario.addEventListener('submit', e => {
  e.preventDefault();
  const texto = inputTarea.value.trim();
  if (!texto) return;
  tareas.push(texto);
  inputTarea.value = '';
  guardarTareas();
  renderizarTareas();
});

renderizarTareas();
