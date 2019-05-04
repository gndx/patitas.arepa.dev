import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Nav = props => (
  <div className="Nav">
    <ul>
      <li>
        <Link to="/">Inicio</Link>
      </li>
      <li>
        <a onClick={props.showModal}>
          Dar en Adopción
        </a>
      </li>
      <li>
        {props.login ?
          <Link to="/panel">
            Mi cuenta
          </Link>
          :
          <Link to="/login">
            Iniciar Sesión
          </Link>
        }
      </li>
    </ul>
  </div>
);

const mapStateToProps = state => {
  return {
    login: state.login,
  };
};

export default connect(mapStateToProps)(Nav);