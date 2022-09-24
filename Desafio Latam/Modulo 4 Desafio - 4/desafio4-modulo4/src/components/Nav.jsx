import React from 'react'

const Nav = ({handleSearch}) => {
    return (
        <div>
            <nav className="navbar bg-dark container-fluid">
                <div className="container-fluid">
                    <h1 className="navbar-brand text-light">Días Feriados Api</h1>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" name="busqueda" placeholder="Busqueda" aria-label="Search" onChange={handleSearch} />
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Nav