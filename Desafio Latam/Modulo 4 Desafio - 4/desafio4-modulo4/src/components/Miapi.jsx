import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Nav from './Nav';


const Miapi = () => {
  const [info, setInfo] = useState([])
  const [buscador, setbuscador] = useState("")

  const handleSearch = (e) => {
    setbuscador(e.target.value)
  }

  useEffect(() => {
    consultarApi();
  }, [])

  const consultarApi = async () => {
    const url = 'https://api.victorsanmartin.com/feriados/en.json'
    const resp = await fetch(url)
    const data = await resp.json()
    setInfo(data.data)
  }
  return (
    <div>
     <Nav handleSearch={handleSearch}/>
      <div className="row my-3">
        {info.filter(
          (dia) => {
            return dia.title.toLowerCase().includes(buscador.toLowerCase())
          }
        ).map((feriado) =>
          <div className="col-md-2">
            <div className="card text-bg-dark mb-3 text-center" key={feriado.date}>
              <div className="card-header"><h2>{feriado.title}</h2></div>
              <div className="card-body">
                <h5 className="card-title">{feriado.date}</h5>
                <p className="card-text">{feriado.type}</p>
                <p className="card-text">{feriado.extra}</p>
              </div>
            </div>
          </div>
        ).reverse()}
      </div>
      <Footer />
    </div>
  )
}

export default Miapi