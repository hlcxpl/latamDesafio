import React from 'react'
import { useState } from 'react'

function Colaboradores({ BaseColaboradores }) {
    const [colaborador, setcolaborador] = useState({ nombre: "", correo: "" });
    const [listacolaboradores, setlistacolaboradores] = useState(BaseColaboradores);
    const [buscador, setbuscador] = useState("")

    const handleClick = () => {
        setlistacolaboradores([...listacolaboradores, { ...colaborador, id: Date.now() }]);
    }

    const handleChange = (e, propiedad) => {
        setcolaborador({ ...colaborador, [propiedad]: e.target.value });
    }

    const handleSearch = (e) => {
        setbuscador(e.target.value)
    }

    return (
        <div>
            <nav className="navbar bg-dark">
                <div className="container-fluid">
                    <h1 className="navbar-brand text-light">Buscador de Colaboradores</h1>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="text" onChange={handleSearch} placeholder="Busca un Colaborador" />
                    </form>
                </div>
            </nav>

            <div className="mb-3 p-3 mt-2">
                <label htmlFor="formGroupExampleInput" className="form-label">Nombre del Colaborador</label>
                <input onChange={(ev) => { handleChange(ev, 'nombre') }} type="text" className="form-control" id="formGroupExampleInput" placeholder="Ingresa el Nombre del Colaborador" />
            </div>

            <div className="mb-3 p-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">Email del Colaborador</label>
                <input type="text" onChange={(ev) => { handleChange(ev, 'correo') }} className="form-control" id="formGroupExampleInput2" placeholder="Ingresa el correo del Colaborador" />
            </div>

            <button className="btn btn-primary m-3" onClick={handleClick}>Agregar</button>

            <hr />

            <h1 className="p-3">Listado de Colaboradores</h1>

            <ul >
                {listacolaboradores.filter(
                    (colab) => {
                        return colab.nombre.toLowerCase().includes(buscador.toLowerCase())
                    }
                ).map(
                    function (colaborador) {
                        return <li className="px-1" key={colaborador.id}>{colaborador.nombre} - {colaborador.correo}</li>
                    }
                )}
            </ul>
            
        </div>
    )
}
export default Colaboradores