import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategoryForm from './CategoryForm';

export default class Category extends Component {

  static propTypes = {
    category: PropTypes.object,
    onRemove: PropTypes.func.isRequired
  };

  render() {
    const { category, onRemove } = this.props;
    const { name, id, budget, timestamp } = category;

    return (
      <li key={name}>
        {name} - ID: {id} - Budget: {budget} Added: {timestamp.toString()}
        <button style={{ color: 'black' }} onClick={() => onRemove(category)}>X</button>
      </li>
    );
  }
}