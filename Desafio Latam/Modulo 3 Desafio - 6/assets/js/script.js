const apiUrl = "https://mindicador.cl/api/"
const body = document.querySelector('body')
const divSelect = document.querySelector('#divSelect')
const btn = document.querySelector('#btn')
const input = document.querySelector('#input')

async function cambioDivisa() {
    const resp = await fetch(apiUrl)
    const divisasJson = await resp.json()
    return divisasJson

}

function getValue(divisasJson) {
    const divisas = ["uf", "ivp", "dolar", "dolar_intercambio", "euro", "ipc", "utm", "imacec", "tpm", "libra_cobre", "tasa_desempleo", "bitcoin"]
    renderInput(divisas, divSelect)
}

getValue()

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

select = document.querySelector('#selector')

btn.addEventListener('click', async function () {
    const inputParametro = validar(input.value)
    divisa = select.value
    const apiUrl2 = apiUrl + "" + select.value
    const divisasJson2 = await cambioDivisa2(apiUrl2)
    operation(divisasJson2, inputParametro)
    const config = parchingData(divisasJson2, divisa)
    renderGrafica(config);
})

async function cambioDivisa2(apiUrl2) {
    try {
        const resp = await fetch(apiUrl2)
        const divisasJson2 = await resp.json()
        return divisasJson2
    } catch (e) {
        throw (e.message)
    }

}

async function operation(divisasJson2, inputParametro) {
    const monto = inputParametro / divisasJson2.serie[0].valor
    const span = document.querySelector('#monto')
    ans = isNumber(monto);
    if (ans) {
        span.innerHTML = `El monto de la operacion es: ${monto.toFixed(3)}`
    }
}

async function parchingData(divisasJson2, nombreDivisa) {
    var valores = []
    var fechas = []

    for (let i = 0; i < 10; i++) {
        valores[i] = divisasJson2.serie[i].valor
        fechas[i] = divisasJson2.serie[i].fecha
    }

    const chartType = "line"
    const titulo = "Estadisticas" + ucwords(nombreDivisa)
    const lineColor = "green"

    const config = {
        type: chartType,
        data: {
            labels: valores,
            datasets: [
                {
                    label: titulo,
                    backgroundColor: lineColor,
                    data: fechas
                }
            ]
        }
    };
    return config;
}

function renderGrafica(config) {
    const chartDOM = document.getElementById("myChart");
    new Chart(chartDOM, config);
    chartDOM.style.backgroundColor = 'blue'
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