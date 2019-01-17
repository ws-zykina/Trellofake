import React, { Component } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import Login from './containers/Login'
import history from './core/history';
import Protected from './containers/Protected'
import './App.scss';

class App extends Component {
  render() {
    return (
      <Router history={history}>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route path="/dashboard" component={Protected} />
          </Switch>
        </Router>
    );
  }
}

export default App;
