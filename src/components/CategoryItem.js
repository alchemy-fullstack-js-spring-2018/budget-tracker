import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CategoryItem extends Component {
  static propTypes = {
    name: PropTypes.string,
    budget: PropTypes.number
  };

  render() {
    const { name, budget } = this.props;

    return (
      <tr key={name}>
        <td>{name}</td>
        <td>${budget}</td>
      </tr>
    );
  }
}