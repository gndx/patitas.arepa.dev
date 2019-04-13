import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="Header">
    <div className="Header-content">
      <div className="Header-logo">
        <figure>
          <img src="/" alt="Patitas Fundacion" />
        </figure>
      </div>
      <div className="Nav">
        <ul>
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/mascotas/">
              Mascotas
            </Link>
          </li>
          <li>
            <Link to="/login/">
              Registrarse
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Header;