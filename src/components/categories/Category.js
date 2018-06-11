import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Expenses from './Expenses';

export default class Category extends Component {

  state = {
    editing: false
  };

  static propTypes = {
    category: PropTypes.object,
    onRemove: PropTypes.func.isRequired,
  };

  render() {
    const { category, onRemove } = this.props;
    const { name, budget } = category;

    return (
      <li key={name}>
        <h4>
          <span>{name}</span>
          <span>{budget}</span>
          <button onClick={() => onRemove(category)}>X</button>
        </h4>
        <Expenses categoryId={category.id}/>
      </li>
    );
  }
}