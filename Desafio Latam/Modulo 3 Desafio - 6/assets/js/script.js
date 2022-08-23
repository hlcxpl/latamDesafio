//----------------VARIABLES----------------
const apiUrl = "https://mindicador.cl/api/"
const body = document.querySelector('body')
const divSelect = document.querySelector('#divSelect')
const btn = document.querySelector('#btn')
const input = document.querySelector('#input')
//INICIALIZAR MY CHART EN NULL PARA PODER DESTRUIRLO
let myChart = null;
//CONSULTANDO LA API PARA EXTRAER LOS KEYS DE LOS CAMBIOS
async function cambioDivisa() {
    try {
        const resp = await fetch(apiUrl)
        const divisasJson = await resp.json()

        var data = []
        var divisas = []
        var divisasKey = []
        Object.keys(divisasJson).forEach(function (key) {
            data = divisasJson[key];
            divisas[key] = data.codigo;
        });
        divisasKey = Object.values(divisas);
        var filtered = divisasKey.filter(x => x !== undefined);
        renderInput(filtered, divSelect)
    } catch (e) {
        body.innerHTML = "Error: " + e.message
    }
}
cambioDivisa()


//FUNCION GENERAR EL SELECT CON 
function renderInput(arreglos, etiqueta) {
    template = ""
    template2 = ""
    for (const arreglo of arreglos) {
        template += `<option value="${arreglo}">${arreglo}</option>`
    }
    template2 += `<select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" id="selector">
    <option selected value="">Seleccione tipo de Cambio</option>${template}</select>`
    etiqueta.innerHTML = template2
}




//UN LISTENER EN UN BOTON PARA ACTIVAR TODAS LAS FUNCIONES QUE INTERVIENEN
btn.addEventListener('click', async function () {
    // opcion del selector
    const select = document.querySelector('#selector')
    const inputParametro = validar(input.value)
    divisa = select.value
    const apiUrl2 = apiUrl + "" + select.value
    const divisasJson2 = await cambioDivisa2(apiUrl2)
    operation(divisasJson2, inputParametro)
    parchingData(divisasJson2, divisa)
})
//FUNCION PARA CONECTAR CON LA API USANDO FETCH CON SU RESPECTIVO TRY Y CATCH 
async function cambioDivisa2(apiUrl2) {
    try {
        const resp = await fetch(apiUrl2)
        const divisasJson2 = await resp.json()
        return divisasJson2
    } catch (e) {
        body.innerHTML = "Error: " + e.message
    }
}
// FUNCION PARA HACER LA MULTIPLICACION DEL LAS DIVISAS  QUE RECIBE COMO PARAMETRO EL
// JSON DONDE EXTRAEMOS EL CAMBIO DEL DIA Y LO DIVIDIMOS CON EL MONTO EN PESOS CHILENOS
async function operation(divisasJson2, inputParametro) {
    const monto = inputParametro / divisasJson2.serie[0].valor
    const span = document.querySelector('#monto')
    ans = isNumber(monto);
    if (ans) {
        span.innerHTML = `El monto de la operacion es: ${monto.toFixed(2)}`
    }
}
//FUNCION PARA OBTENER VALORES DESDE EL JSON PARA EL CHART
async function parchingData(divisasJson2, nombreDivisa) {
    var valores = []
    var fechas = []
    //FOR QUE ITERA LOS ULTIMOS 10 DIAS Y ENTREGAS LAS FECHAS Y VALORES 
    for (let i = 0; i < 10; i++) {
        valores[i] = divisasJson2.serie[i].valor
        fechas[i] = divisasJson2.serie[i].fecha
    }
    //CONFIGURANDO EL CHART
    const chartType = "line"
    const titulo = "Estadisticas " + ucwords(nombreDivisa)
    const lineColor = "green"

    const config = {
        type: chartType,
        data: {
            labels: fechas,
            datasets: [
                {
                    label: titulo,
                    backgroundColor: lineColor,
                    data: valores
                }
            ]
        }
    };

    // PASANDO VALORES AL CHART JS  
    const chartDOM = document.getElementById("myChart");
    // SI ES DIFERENTE AL VALOR DE CLARADO SE DESTRUYE
    if (myChart != null) {
        myChart.destroy()
    }
    // SE VUELVE A INICIALIZAR
    myChart = new Chart(chartDOM, config);
    chartDOM.style.backgroundColor = 'white'
}

// ---------------------FUNCIONES DE VALIDACIONES---------------------------

//VALIDACIONES DE INPUT
function validar(input) {
    if (input <= 0 || input == "") {
        alert("El valor Ingresado Tiene que ser un numero mayor a cero " + input);
    } else if (input === null || input === undefined || input === "" || input === NaN) {
        alert("El campo esta vacio");
    } else if (!/^[0-9]+$/.test(input)) {
        alert("solo caracteres numericos (Permitodos del 0-9)")
    } else {
        return input;
    }
}
// UPERCASE DE CAPITAL LETTER - MAYUSCULA PRIMERA LETRA
function ucwords(str) {
    return (str + '').replace(/^([a-z])|\s+([a-z])/g, function ($1) {
        return $1.toUpperCase();
    });
}
// COMPROBACION SI ES UN NUMERO
function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}