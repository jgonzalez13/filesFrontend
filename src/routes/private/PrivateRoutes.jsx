import React from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import FilesView from '../../views/Private/Files/Files';
import FileView from '../../views/Private/File/File';
import UserView from '../../views/Private/User/User';

const PrivateRoutes = ({ auth }) => (
  <Switch>
    <PrivateRoute path="/files" component={FilesView} auth={auth} exact />
    <PrivateRoute path="/files/:id" component={FileView} auth={auth} exact />
    <PrivateRoute path="/user" component={UserView} auth={auth} exact />
  </Switch>
);

export default PrivateRoutes;
