import React, { Component } from 'react';
import { Route, Router, Switch, Redirect } from 'react-router-dom';
import Login from './containers/Login'
import Signup from './containers/Signup'
import history from './core/history';
import Protected from './containers/Protected'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

class App extends Component {
  render() {
    return (
      <Router history={history}>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/registration" component={Signup} />
            <Route exact path="/dashboard" component={Protected} />
            <Route path="/" component={Protected} />
            <Redirect from='/' to={{ pathname: "/dashboard" }}/>
          </Switch>
        </Router>
    );
  }
}

export default App;
