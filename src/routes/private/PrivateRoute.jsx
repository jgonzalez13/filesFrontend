import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, state }) => (
  <Route render={() => (state ? <Component /> : <Redirect to="/" />)} exact />
);

export default PrivateRoute;
