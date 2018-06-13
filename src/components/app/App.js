import React, { Component } from 'react';
import Categories from '../categories/Categories';
import Loading from './Loading';
import Error from './Error';

export default class App extends Component {

  render() {
    // console.log('we are in app');
    return (
      <main>
        <h1>Budget Tracker App</h1>
        <Loading/>
        <Error/>
        <Categories />
      </main>
    );
  }
}