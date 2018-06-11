import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategoryForm from './CategoryForm';
import Category from './Category';

export default class Game extends Component {

  static propTypes = {
    categories: PropTypes.array
  };

  render() {
    return (
      <section>
        <h1>This is a budget!</h1>
      </section>
    );
  }
}