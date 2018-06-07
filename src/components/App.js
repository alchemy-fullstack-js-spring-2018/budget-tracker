import React, { Component } from 'react';
import Dashboard from './Dashboard';

export default class App extends Component {
  render() {
    return (
      <main>
        <h1>Budget Tracker</h1>
        <Dashboard/>
      </main>
    );
  }
}