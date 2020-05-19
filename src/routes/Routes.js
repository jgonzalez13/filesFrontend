import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PublicRoutes from './public/PublicRoutes';
import PrivateRoutes from './private/PrivateRoutes';

function AppRouter() {
  const auth = true;
  return (
    <Router>
      <PublicRoutes auth={auth} />
      <PrivateRoutes auth={auth} />
    </Router>
  );
}

export default AppRouter;
