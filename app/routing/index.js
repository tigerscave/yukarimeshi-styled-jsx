import React from 'react';
import {createBrowserHistory} from 'history';
import {Router, Route, Switch} from 'react-router-dom';
import IndexPage from '../pages/index'

const history = createBrowserHistory();

const Routing = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route
          exact
          path="/"
          component={IndexPage}
        />
      </Switch>
    </Router>
  );
};

export default Routing;
