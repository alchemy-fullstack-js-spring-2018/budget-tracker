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
      <li className={styles['category-item']}>
        <div className="cell">{name}</div>
        <div className="cell">${budget}</div>
        <div className="cell"></div>
        <div className="cell"><button onClick={onRemove}>&times;</button></div>
      </li>
    );
  }
}