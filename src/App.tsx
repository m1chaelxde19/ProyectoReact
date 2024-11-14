import React from 'react';
import logo from './logo.svg';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Inicio from './Componentes/Inicio';
import Nosotros from './Componentes/Nosotros';
import Contacto from './Componentes/Contacto';
import {Componente02} from "./Componentes/Componente02";
import {Componente01} from "./Componentes/Componente01";
import FetchApi from './Componentes/FetchApi';
import RickAndMortyApp from './Componentes/ApiRickAndMorty';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="logo" height="24px" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-sb-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarToggler">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="Inicio">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="Nosotros">
                  Nosotros
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="Contacto">
                  Contacto
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="fetch-api">
                  Servicios
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="alova-api">
                  Servicio Alova
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/Inicio" element={<Inicio />}></Route>
        <Route path="/Nosotros" element={<Nosotros />}></Route>
        <Route path="/Contacto" element={<Contacto />}></Route>
        <Route path="/Componente01" element={<Componente01 />}></Route>
        <Route path="/Componente02" element={<Componente02 />}></Route>
        <Route path="/fetch-api" element={<FetchApi />}></Route>
        <Route path="/alova-api" element={<RickAndMortyApp />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
