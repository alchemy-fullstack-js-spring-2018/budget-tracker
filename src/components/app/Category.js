import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Category extends Component {
  static PropTypes = {
    category: PropTypes.object
  };

  render() {
    const { category } = this.props;
    const { name, color } = category;

    return (
      <li key={name} style={{color}}>
        {name}
        <button style={{color: 'black'}}>X</button>
      </li>
    );
  }
}