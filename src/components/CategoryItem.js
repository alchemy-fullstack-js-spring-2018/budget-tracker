import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './CategoryItem.css';

export default class CategoryItem extends Component {
  static propTypes = {
    name: PropTypes.string,
    budget: PropTypes.number,
    onRemove: PropTypes.func.isRequired
  };

  render() {
    const { name, budget, onRemove } = this.props;

    return (
      <tr className={styles['category-item']}>
        <td>{name}</td>
        <td>${budget}</td>
        <td><button onClick={onRemove}>&times;</button></td>
      </tr>
    );
  }
}