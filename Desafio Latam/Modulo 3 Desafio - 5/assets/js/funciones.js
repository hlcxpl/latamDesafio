
input = document.querySelector("#inputTareas")
btnAgregar = document.querySelector("#agregarTareas")
tbody = document.querySelector("tbody")
span = document.querySelector('#cuenta-tareas')
span2 = document.querySelector('#realizadas')

//ARREGLO GLOBAL CON 3 TAREAS POR DEFAULT
const tareas = [
    { id: 1000, nombre: 'comer a la hora', estado: false },
    { id: 3000, nombre: 'ir a fiesta', estado: true },
    { id: 5000, nombre: 'ver Dr. strange', estado: false }
]

// EVENTO CLICK PARA EL BOTON DE AGREGAR TAREA TOMA EL VALOR DEL INPUT Y LE ASIGNA UN ID Y UN ESTADO POR DEFAULT
// EN FALSO EN UN ARREGLO
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
//DE ESTADO A LOS FALSE RECIBE COMO PARAMETRO EL ARREGLO Y LA ETIQUETA DONDE SE QUIERE IMPRIMIR
function renderTareas(arreglos, etiqueta) {
    let html = ""
    for(arreglo of arreglos) {
        if(arreglo.estado == true) {
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
    //IMPRIME EL TEMPLATE EN LA ETIQUETA QUE PASEMOS COMO PARAMETROS
    etiqueta.innerHTML = html;
    //CUENTA TODAS LAS TAREAS
    span.innerHTML = tareas.length
    //CUENTA LAS TAREAS EN TRUE
    contadorCheck(tareas)
}



//BUSCAS EL ESTADO TRUE A TRAVEZ DE LA COMPROBACION QUE SE HACE EN LA FUNCION RENDER TAREA - LO BUSCA POR EL ID Y 
//CAMBIA EL ESTADO A FALSE
function cambioEstadoTrue(id) {
    const index = tareas.findIndex(tarea => tarea.id == id)
    tareas[index].estado = false
    renderTareas(tareas, tbody)
    console.log(tareas)
}
//BUSCAS EL ESTADO FALSE A TRAVEZ DE LA COMPROBACION QUE SE HACE EN LA FUNCION RENDER TAREA - LO BUSCA POR EL ID Y 
//CAMBIA EL ESTADO A TRUE
function cambioEstadoFalse(id) {
    const index = tareas.findIndex(tarea => tarea.id == id)
    tareas[index].estado = true
    renderTareas(tareas, tbody)
    console.log(tareas)
}
// CONTADOR DE TAREA REALIZADA ATRAVEZ DEL ESTADO - BUSCA LOS ESTADOS EN TRUE DEL ARREGLO Y LOS CUENTA A TRAVES
// DEL METODO FILTER
function contadorCheck(arreglo) {
    const checkToDo = arreglo.filter(tarea => tarea.estado == true)
    span2.innerHTML = checkToDo.length
}
// BORRAR LA TAREA CON BUTTON A TRAVEZ DEL ID Y EL INDICE UTILIZANDO EL METODO SPLICE
function borrar(id) {
    const index = tareas.findIndex((ele) => ele.id == id)
    tareas.splice(index, 1)
    renderTareas(tareas, tbody)
}
