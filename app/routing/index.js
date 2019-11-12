import React from 'react';
import {createBrowserHistory} from 'history';
import {Router, Route, Switch} from 'react-router-dom';
import pageNames from './pageNames'
import IndexPage from '../pages/index'
import LoginPage from '../pages/login'
import AdminSideMenu from '../pages/admin-side-menu'


const history = createBrowserHistory();

const Routing = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route
          exact
          path={pageNames.INDEX}
          component={IndexPage}
        />
        <Route
          exact
          path={pageNames.LOGIN}
          component={LoginPage}
        />
        <Route
          exact
          path={pageNames.ADMIN_SIDE_MENU}
          component={AdminSideMenu}
        />
      </Switch>
    </Router>
  );
};

export default Routing;
