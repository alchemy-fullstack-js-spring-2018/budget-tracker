import React, { Component } from 'react';
import Categories from '../categories/Categories';

export default class App extends Component {

  render() {
    // console.log('we are in app');
    return (
      <main>
        <h1>Budget Tracker App</h1>
        <Categories />
      </main>
    );
  }
}