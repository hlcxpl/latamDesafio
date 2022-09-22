import React from 'react'
import Colaboradores from './components/Colaboradores'
import { BaseColaboradores } from './BaseColaboradores'
function App() {
  return (
    <div className="App">
      <Colaboradores BaseColaboradores={BaseColaboradores} />
    </div>
  );
}

export default App;
