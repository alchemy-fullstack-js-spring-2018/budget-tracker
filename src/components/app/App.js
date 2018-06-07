import React, { Component } from 'react';
import Dashboard from '../categories/Dashboard';

export default class App extends Component {
  render() {
    return (
      <main>
        <h1>Budget Tracker</h1>
        <Dashboard/> {/*dashboard*/}
      </main>
    );
  }
}