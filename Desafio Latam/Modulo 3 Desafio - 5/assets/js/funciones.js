
input = document.querySelector("#inputTareas")
btnAgregar = document.querySelector("#agregarTareas")
tbody = document.querySelector("tbody")
span = document.querySelector('#cuenta-tareas')
span2 = document.querySelector('#realizadas')
checkBox = document.querySelectorAll('.status')


const tareas = [
    { id: 1000, nombre: 'comer a la hora', estado: false },
    { id: 3000, nombre: 'ir a fiesta', estado: true },
    { id: 5000, nombre: 'ver Dr. strange', estado: false }
]



btnAgregar.addEventListener('click', function agregarValor() {
    /* Agregamos el invitado al arreglo */
    nuevoTarea = { id: Date.now(), nombre: input.value, estado: false }
    tareas.push(nuevoTarea)
    input.value = ""
    /* Actualizamos la información en el HTML */
    renderTareas(tareas, tbody)
})

//FUNCION RENDER TAREA CON COMPROBACION DE ESTADO PARA ASIGNARLE EL VALOR CHECKED 
//Y ASIGNARLE UNA FUNCION DE CAMBIO DE ESTADO A LOS TRUE Y SOLO LA FUNCION DE CAMBIO 
//DE ESTADO A LOS FALSE 
function renderTareas(arreglos, etiqueta) {
    let html = ""
    for (arreglo of arreglos) {
        if (arreglo.estado == true) {
            variable = 'checked'
            html += `<tr><td class="px-5">${arreglo.id}</td><td class="px-5">${arreglo.nombre}</td>
        <td class="px-5">
        <div class="input-group-prepend">
        <div class="input-group-text">
        <input onclick="cambioEstadoTrue(${arreglo.id})" type="checkbox" class="status" ${variable}>
        </div>
        </div>
        </td>
        <td class="px-5"><button class="btn btn-light text-dark" onclick ="borrar(${arreglo.id})"> x </button><td></tr>`

        } else {
            html += `<tr><td class="px-5">${arreglo.id}</td><td class="px-5">${arreglo.nombre}</td>
        <td class="px-5">
        <div class="input-group-prepend">
        <div class="input-group-text">
        <input onclick="cambioEstadoFalse(${arreglo.id})" type="checkbox" class="status" >
        </div>
        </div>
        </td>
        <td class="px-5"><button class="btn btn-light text-dark" onclick ="borrar(${arreglo.id})"> x </button><td></tr>`
        }
    }
    etiqueta.innerHTML = html;
    span.innerHTML = tareas.length
    contadorCheck(tareas)
}




//BUSCAS EL ESTADO FALSE A TRAVEZ DE LA COMPROBACION QUE SE HACE EN LA FUNCION RENDER TAREA - LO BUSCAR EL ID Y CAMBIA EL ESTADO A FALSE
function cambioEstadoTrue(id) {
    const index = tareas.findIndex(tarea => tarea.id == id)
    tareas[index].estado = false
    renderTareas(tareas, tbody)
    console.log(tareas)
}
//BUSCAS EL ESTADO FALSE A TRAVEZ DE LA COMPROBACION QUE SE HACE EN LA FUNCION RENDER TAREA - LO BUSCAR EL ID Y CAMBIA EL ESTADO A TRUE
function cambioEstadoFalse(id) {
    const index = tareas.findIndex(tarea => tarea.id == id)
    tareas[index].estado = true
    renderTareas(tareas, tbody)
    console.log(tareas)
}

// CONTADOR DE TAREA REALIZADA ATRAVEZ DEL ESTADO
function contadorCheck(arreglo) {
    const checkToDo = arreglo.filter(tarea => tarea.estado == true)
    span2.innerHTML = checkToDo.length
}
// BORRAR LA TAREA CON BUTTON A TRAVEZ DEL ID Y EL INDICE
function borrar(id) {
    const index = tareas.findIndex((ele) => ele.id == id)
    tareas.splice(index, 1)
    renderTareas(tareas, tbody)
}
