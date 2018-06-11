import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ExpenseItem extends Component {
  static propTypes = {
    expense: PropTypes.object
  };

  render() {
    const { name, price } = this.props.expense;

    return (
      <li>
        Description: {name}<br/>
        Price: ${price}
      </li>
    );
  }
}