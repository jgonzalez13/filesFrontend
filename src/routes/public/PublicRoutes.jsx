import React from 'react';
import { Switch } from 'react-router-dom';
import PublicRoute from './PublicRoute';

const PrivateRoutes = ({ authed }) => (
  <Switch>
    <PublicRoute path="/" component={() => <div>Welcome</div>} state={authed} />
  </Switch>
);

export default PrivateRoutes;
