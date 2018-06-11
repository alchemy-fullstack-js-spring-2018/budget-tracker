import React, { PureComponent } from 'react';
import Dashboard from '../budget/Dashboard';
import Error from './Error';
import Loading from './Loading';

export default class App extends PureComponent {
  render() {
    return (
      <main>
        <Loading/>
        <Error/>
        <Dashboard/>
      </main>
    );  
  }
}