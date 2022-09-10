import React from 'react'
import {useState} from 'react'
import MyInput from './components/MyInput'
import Boton from './components/Boton'
function App() {
  const [password, setPassword]= useState('')
  
  return (
    <div className="App">
      <header className="App-header">
      <h1 className="App-title">Desafio Estado de los componentes</h1>
      <MyInput password={password} setPassword={setPassword}/>
      {password==='252525'&& <Boton/>}
      </header>
    </div>
  );
}

export default App;
