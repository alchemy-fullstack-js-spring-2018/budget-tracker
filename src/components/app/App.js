import React, { Component } from 'react';
import Place from '../places/Place';

export default class App extends Component {
  render() {
    return (
      <main>
        <h1>In pursuit of Paradise</h1>
        <Place/>
      </main>
    );
  }
}