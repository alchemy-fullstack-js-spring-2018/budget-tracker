import React, { Component } from 'react';
import PropTypes from 'prop-types';

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