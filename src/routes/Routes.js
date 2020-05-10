import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../Layout/NavBar/NavBar';
import PublicRoutes from './public/PublicRoutes';
import PrivateRoutes from './private/PrivateRoutes';

function AppRouter() {
  const auth = false;
  return (
    <>
      <NavBar auth={auth} />
      <Router>
        <PublicRoutes auth={auth} />
        <PrivateRoutes auth={auth} />
      </Router>
    </>
  );
}

export default AppRouter;
