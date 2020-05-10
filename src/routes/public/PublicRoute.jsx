import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ component: Component, state }) => (
  <Route render={() => (!state ? <Component /> : <Redirect to="/files" />)} exact />
);

export default PublicRoute;
