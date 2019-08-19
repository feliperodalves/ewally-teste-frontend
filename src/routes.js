import React from 'react';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={withRouter(Login)} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}
