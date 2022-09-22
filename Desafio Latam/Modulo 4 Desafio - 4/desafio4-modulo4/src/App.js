import React from "react";
import Miapi from "./components/Miapi";

function App() {

  return (
    <div className="App">
      <nav className="navbar bg-dark container-fluid">
        <div className="container-fluid">
          <h1 className="navbar-brand text-light">Navbar</h1>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Buscador" aria-label="Search" />
            <button className="btn btn-outline-primary" type="submit">Search</button>
          </form>
        </div>
      </nav>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <Miapi />
          </div>
        </div>
      </div>
      <div className="bd-footer py-4 py-md-5 mt-5 bg-light">
        <h3>footer</h3>
      </div>
    </div>
  );
}

export default App;
