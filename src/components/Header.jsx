import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Modal from '../components/Modal';
import Login from '../pages/Login';
import Form from '../components/Form';

const Header = props => {
  const [modal, setModal] = useState(false);

  const showModal = () => {
    setModal(!modal)
  }

  return (
    <div className="Header">
      <div className="Header-container">
        <div className="Header-content">
          <div className="Header-logo">
            <Link to="/">
              <img src="http://s3.amazonaws.com/chewiekie/img/logo.png" alt="Patitas" />
            </Link>
            <h1>Patitas</h1>
          </div>
          <div className="Header-nav">
            <Nav showModal={showModal} />
          </div>
        </div>
      </div>
      <Modal
        show={modal}
        close={showModal}
      >
        {props.login ?
          <Form />
          :
          <div className="Modal-login">
            <Login />
          </div>
        }
      </Modal>

    </div>
  );
}

const mapStateToProps = state => {
  return {
    login: state.login,
  };
};

export default connect(mapStateToProps)(Header);