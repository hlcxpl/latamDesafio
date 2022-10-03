import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter,  Routes, Route } from "react-router-dom"
import Contacto from "./views/Contacto";
import Home from "./views/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
