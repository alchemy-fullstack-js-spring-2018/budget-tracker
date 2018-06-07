import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Budget from '../budget/Budget';

export default class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" component={Budget}/>
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
 
    );
  }
}