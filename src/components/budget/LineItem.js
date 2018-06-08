import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class LineItem extends Component {

  state = {
    editing: false
  };

  static propTypes = {
    lineItem: PropTypes.object,
    onRemove: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired
  };

    
  render() {
    const { lineItem, onRemove } = this.props;
    const { description, amount, date } = lineItem;

    return (
      <li key={description}>
        <h2>{description}</h2>
        <h2>${amount}</h2>
        <h2>{date.toLocaleString()}</h2>
        <button onClick={() => onRemove(lineItem)}>delete</button>
      </li>
    );
  }
}