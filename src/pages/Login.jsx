import React, { Component } from 'react';
import { provider, auth } from '../utils/firebase';
import { withRouter } from 'react-router-dom';

class Login extends Component {
  state = {
    login: false,
  }

  loginFacebook = () => {
    auth().signInWithPopup(provider)
      .then(({ user }) => {
        this.setState({
          login: true,
        });
      });
    this.props.history.push('/panel');
  }

  logoutFacebook = () => {
    auth().signOut().then(() => {
      this.setState({
        login: false,
      });
    })
  }

  componentWillMount = () => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('user')
        this.props.history.push('/panel');
      }
    });
  }

  render() {
    return (
      <>
        {this.state.login ?
          <h2 onClick={this.logoutFacebook}>Logout</h2>
          :
          <h2 onClick={this.loginFacebook}>Login</h2>
        }
      </>
    )
  }
}

export default withRouter(Login);