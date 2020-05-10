import React from 'react';
import { Switch } from 'react-router-dom';
import PublicRoute from './PublicRoute';
import HomeView from '../../views/Public/Home/Home';
import LoginView from '../../views/Public/Login/Login';
import RegisterView from '../../views/Public/Register/Register';

const PrivateRoutes = ({ auth }) => (
  <Switch>
    <PublicRoute path="/" component={HomeView} auth={auth} exact />
    <PublicRoute path="/incio-de-sesion" component={LoginView} auth={auth} exact />
    <PublicRoute path="/registro" component={RegisterView} auth={auth} exact />
  </Switch>
);

export default PrivateRoutes;
