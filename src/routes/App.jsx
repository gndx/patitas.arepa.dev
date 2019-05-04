import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../utils/firebase';
import { setLogin, setUser } from '../actions/';
import Layout from '../components/Layout';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Pet from '../pages/Pet';
import '../styles/global.css';

const App = props => {

  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        props.setUser(user);
        props.setLogin(true);
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/mascotas/:id" component={Pet} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/panel" component={Dashboard} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

const mapDispatchToProps = {
  setLogin,
  setUser,
}

export default connect(null, mapDispatchToProps)(App);