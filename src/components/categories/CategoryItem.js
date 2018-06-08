import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CategoryItem extends Component {

  static propTypes = {
    category: PropTypes.object.isRequired,
    onRemove: PropTypes.func.isRequired
  };

  render() {
    const { category, onRemove } = this.props;
    const { budget, timestamp } = category;

    return (
      <li>
        Budget: ${budget} Added: {timestamp.toLocaleString()}
      </li>
    );
  }
}