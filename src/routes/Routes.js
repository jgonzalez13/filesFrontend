import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PublicRoutes from './public/PublicRoutes';
import PrivateRoutes from './private/PrivateRoutes';
import Navbar from '../shared/Navbar/Navbar';

function AppRouter() {
  const auth = true;
  return (
    <>      
      <Router>
        <Navbar auth={auth}/>
        <PublicRoutes auth={auth} />
        <PrivateRoutes auth={auth} />
      </Router>
    </>
  );
}

export default AppRouter;
