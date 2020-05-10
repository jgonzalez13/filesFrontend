import React from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

const PrivateRoutes = ({ authed }) => (
  <Switch>
    <PrivateRoute path="/files" component={() => <div>FILES</div>} state={authed} />
  </Switch>
);

export default PrivateRoutes;
