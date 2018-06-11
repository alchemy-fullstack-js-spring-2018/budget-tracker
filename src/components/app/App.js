import React, { PureComponent } from 'react';
import Dashboard from '../categories/Dashboard';

export default class App extends PureComponent {
  render() {
    return (
      <main>
        <h1>Budget Tracker</h1>
        <Dashboard/>
      </main>
    );
  }
}