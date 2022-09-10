import React from 'react'


function MyInput({name, setName, password, setPassword}) {
    return (
        <div>
            <label htmlFor="">Nombre:</label>
            <input className="form-control" type="text" placeholder='Nombre'/>
            <label htmlFor="">Contraseña:</label>
            <input className='form-control' onChange={(e)=>setPassword(e.target.value)} value={password} type="text" placeholder='Contraseña'/>
        </div>
    )
}

export default MyInput