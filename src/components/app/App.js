import React, { PureComponent } from 'react';
import Categories from '../categories/categories';
import Loading from './Loading';
import Error from './Error';

export default class App extends PureComponent {
  render() {
    return (
      <main>
        <h1>Budget Tracker!</h1>
        <Loading/>
        <Error/>
        <Categories/>
      </main>
    );
  }
}