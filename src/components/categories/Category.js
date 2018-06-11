import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Category extends Component {

  static PropTypes = {
    category: PropTypes.object,
    onRemove: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired
  };

  render() {
    const { category, onRemove, onUpdate } = this.props;
    const { name, color } = category;

    return (
      <li key={name} style={{ color }}>
        {name}
        <button style={{ color: 'black' }} onClick={() => onRemove(category)}>X</button>
      </li>
    );
  }
}