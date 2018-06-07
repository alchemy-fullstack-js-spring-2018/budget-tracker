import React, { Component } from 'react';
import Games from '../games/Games';

export default class App extends Component {

  render() {
    return (
      <main>
        <h1>Redux Demo</h1>
        <Games/>
      </main>
    );
  }
}