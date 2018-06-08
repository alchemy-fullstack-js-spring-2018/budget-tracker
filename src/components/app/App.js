import React, { Component } from 'react';
import Categories from '../categories/Categories';

export default class App extends Component {

  render() {
    // console.log('we are in app');
    return (
      <main>
        <h1>Redux Demo</h1>
        <Categories />
      </main>
    );
  }
}