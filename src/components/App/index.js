import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';
import _ from 'lodash';
import Mason from 'mason-library';
import config from './config';

import Home from '../Home';
import Login from '../Login';
import Register from '../Register';
import Search from '../Search';
import '../../css/index.css';
const { mason, routes } = config;

export default class App extends Component {
  componentDidMount() {
    Mason({
      apiKey:'ddlSvCE1l3aJ4UzXjglF7Jr4g/mLLf07nVqw5xBmBTA=',
      componentIds: _.map(mason),
    });
  }

  render() {
    return <Router>
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route exact path={routes.login} component={Login} />
        <Route exact path={routes.register} component={Register} />
        <Route exact path={routes.search} component={Search} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </Router>
  }
}