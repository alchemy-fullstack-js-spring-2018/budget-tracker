import React, { Component } from 'react';
import Budget from '../budget/Budget';


export default class App extends Component {
  render() {
    return (
      <main>
        <h1>Redux Demo</h1>
        <Categories/>
      </main>
    );
  }
}