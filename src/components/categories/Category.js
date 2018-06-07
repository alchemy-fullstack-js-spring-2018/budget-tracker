import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Category extends Component {

  static propTypes = {
    category: PropTypes.object,
    onRemove: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired
  };

  render() {
    const { category, onRemove, onUpdate } = this.props;
    const { name, budget } = category;

    return (
      <li key={name}>
        {name} | {budget}
        <button onClick={() => onRemove(category)}>X</button>
        {/* <FruitForm label="Update" fruit={fruit} onComplete={updated => onUpdate(updated)}/> */}
      </li>
    );
  }
}