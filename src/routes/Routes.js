import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PublicRoutes from './public/PublicRoutes';
import PrivateRoutes from './private/PrivateRoutes';

function AppRouter() {
  const authed = false;
  return (
    <Router>
      <PublicRoutes authed={authed} />
      <PrivateRoutes authed={authed} />
    </Router>
  );
}

export default AppRouter;
