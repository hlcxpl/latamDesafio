
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



btnAgregar.addEventListener('click',function agregarValor() {
    /* Agregamos el invitado al arreglo */
    nuevoTarea = { id: Date.now(), nombre: input.value, estado: false }
    tareas.push(nuevoTarea)
    input.value = ""
    /* Actualizamos la información en el HTML */
    renderTareas(tareas, tbody)
} )


function renderTareas(arreglos, etiqueta) {
    let html = ""
    for (arreglo of arreglos) {
        if (arreglo.estado == true) {
            variable = 'checked'
            html += `<tr><td class="px-5">${arreglo.id}</td><td class="px-5">${arreglo.nombre}</td>
        <td class="px-5">
        <div class="input-group-prepend">
        <div class="input-group-text">
        <input type="checkbox" class="status" ${variable}>
        </div>
        </div>
        </td>
        <td class="px-5"><button class="btn btn-light text-dark" onclick ="borrar(${arreglo.id})"> x </button><td></tr>`

        } else {
        html += `<tr><td class="px-5">${arreglo.id}</td><td class="px-5">${arreglo.nombre}</td>
        <td class="px-5">
        <div class="input-group-prepend">
        <div class="input-group-text">
        <input onclick="hallarEstado(${arreglo.id})" type="checkbox" class="status" >
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





function hallarEstado(id){
   const index = tareas.findIndex(tarea=>tarea.id == id)
   tareas[index].estado = true
   renderTareas(tareas, tbody)
   console.log(tareas)
}


function contadorCheck(arreglo) {
    const checkToDo = arreglo.filter(tarea => tarea.estado == true)
    span2.innerHTML = checkToDo.length
}

function borrar(id) {
    const index = tareas.findIndex((ele) => ele.id == id)
    tareas.splice(index, 1)
    renderTareas(tareas, tbody)
}
