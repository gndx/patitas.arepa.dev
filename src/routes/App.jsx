import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Pet from '../pages/Pet';
import Pets from '../pages/Pets';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Dashboard from '../pages/Dashboard';
import NotFount from '../pages/NotFount';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/mascotas" component={Pets} />
        <Route exact path="/mascotas/:id" component={Pet} />
        <Route exact path="/perfil" component={Profile} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/panel" component={Dashboard} />
        <Route component={NotFount} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;