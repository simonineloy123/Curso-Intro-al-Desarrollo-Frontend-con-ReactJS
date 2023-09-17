
//Funcion para agregar una nueva tarea
function agregarTarea() {

    const  nuevaTareaInput = document.getElementById('nuevaTarea');
    const listaTareas = document.getElementById('listaTareas');
    const nuevaTareaTexto = nuevaTareaInput.value.trim();

    //Cambiamos la logica del IF para que no permita introducir tareas con nombre vacio
    if(nuevaTareaInput.value.length > 0) {

        //Creamos una tarea de tipo li que se agrega a la lista
        const nuevaTarea = document.createElement('li');
        nuevaTarea.textContent = nuevaTareaTexto;

        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.className = 'delete';
        botonEliminar.onclick = function() {
            listaTareas.removeChild(nuevaTarea);
        };

        nuevaTarea.appendChild(botonEliminar);
        listaTareas.appendChild(nuevaTarea);

        nuevaTareaInput.value = "";
    }

}

//Funcion para marcar una tarea como completada
function marcarCompletada(tarea) {
    tarea.classList.toggle("completed");
}

//Funcion para agregar evento click a las tareas cuando se marcan como completadas
document.getElementById("listaTareas").addEventListener("click", function(event) {
    
    if(event.target.tagName == "LI") {
        marcarCompletada(event.target);
    }
});

//Agregar evento click al boton "Agregar"
document.getElementById("agregar").addEventListener("click", agregarTarea());


// Función para eliminar el elemento li, que aparece al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    var elementoAutomatico = document.querySelector('ul > li:first-child');
     if (elementoAutomatico) {
         elementoAutomatico.parentNode.removeChild(elementoAutomatico);
    }
});

//Funcion para mostrar tareas completadas
function mostrarCompletadas() {
    const tareas = document.querySelectorAll('li');
    tareas.forEach(tarea => {
        if (tarea.classList.contains('completed')) {
            tarea.style.display = 'flex';
        } else {
            tarea.style.display = 'none';
        }
    });
}

//Funcion para mostrar tareas pendientes
function mostrarPendientes() {
    const tareas = document.querySelectorAll('li');
    tareas.forEach(tarea => {
        if(!tarea.classList.contains('completed')) {
            tarea.style.display = 'flex';
        } else {
            tarea.style.display = 'none';
        }
    }); 
}

//Agregar evento de click al boton "Mostrar Completadas"
document.getElementById('mostrarCompletadas').addEventListener('click', mostrarCompletadas());

//Agregar ebento de click al boton "Mostrar Pendientes"
document.getElementById('mostrarPendientes').addEventListener('click', mostrarPendientes());

