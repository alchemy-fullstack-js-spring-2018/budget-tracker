import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BudgetForm from './BudgetForm';

export default class LineItem extends Component {

  static propTypes = {
    lineItem: PropTypes.object
  };

    
  render() {
    const { lineItem } = this.props;
    const { description, amount } = lineItem;

    return (
      <li key={description}>
        <h2>{description}</h2>
        <h2>${amount}</h2>
      </li>
    );
  }
}