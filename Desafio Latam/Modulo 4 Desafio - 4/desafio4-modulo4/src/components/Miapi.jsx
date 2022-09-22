import React, { useState, useEffect } from 'react';


const Miapi = () => {
  const [info, setInfo] = useState([])

  useEffect(() => {
    consultarApi()
  }, [])

  const consultarApi = async () => {
    const url = 'https://api.victorsanmartin.com/feriados/en.json'
    const resp = await fetch(url)
    const data = await resp.json()

    const lista = data.data.map((feriado) => {
      return (
        <div className="card text-bg-dark mb-3 text-center" key={Date.now()}>
          <div className="card-header"><h2>{feriado.title}</h2></div>
          <div className="card-body">
            <h5 className="card-title">{feriado.date}</h5>
            <p className="card-text">{feriado.type}</p>
            <p className="card-text">{feriado.extra}</p>
          </div>
        </div>
      )
    })
    setInfo(lista)
  }

  return (
    <div className="text-dark">
      {info}
    </div>
  )
}

export default Miapi