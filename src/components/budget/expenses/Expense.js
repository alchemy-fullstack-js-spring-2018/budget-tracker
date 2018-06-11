import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Expenses from '../expenses/Expenses';

export default class Category extends Component {

  static propTypes = {
    expense: PropTypes.object,
    onRemove: PropTypes.func.isRequired,
  };

  render() {
    const { expense, onRemove } = this.props;
    const { name, cost, timestamp } = expense;

    return (
      <li key={name}>
        Expense: {name} ---- Cost: {cost}, added: {timestamp.toString()}
        <button onClick={() => onRemove(expense)}>X</button>
      </li>
    );
  }
}