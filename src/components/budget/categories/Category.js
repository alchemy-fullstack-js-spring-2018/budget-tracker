import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Expenses from '../expenses/Expenses';

export default class Category extends Component {

  static propTypes = {
    category: PropTypes.object,
    onRemove: PropTypes.func.isRequired,
  };

  render() {
    const { category, onRemove } = this.props;
    const { name, budget, expenses, id } = category;

    return (
      <li key={name}>
        Category: {name} ---- Budget: {budget}
        <button onClick={() => onRemove(category)}>X</button>
        <Expenses categoryId={id} expenses={expenses}/>
      </li>
    );
  }
}