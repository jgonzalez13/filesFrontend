import React from 'react';
import { Link } from 'react-router-dom';
import './banner.css';

const Banner = () => (
  <header className="banner">
    <nav className="nav-container">
      <ul>
        <li className="nav-item">
          <Link to="/">Inicio</Link>
        </li>
        <li className="nav-item">
          <Link to="/incio-de-sesion">Iniciar Sesion</Link>
        </li>
        <li className="nav-item">
          <Link to="/registro">Registro</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Banner;
