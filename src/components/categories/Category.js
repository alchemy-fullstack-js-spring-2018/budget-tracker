import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Category.css';
export default class Category extends Component {

  static propTypes = {
    category: PropTypes.object,
    onRemove: PropTypes.func.isRequired
  };

  render() {
    const { category, onRemove } = this.props;
    const { name, id, budget, timestamp } = category;

    return (
      <li key={name} className={styles.category}>
        {name} - <span>ID:</span> {id} - <span>Budget:</span> ${budget} <span>Added:</span> {timestamp.toString()}
        <button className={styles.category} onClick={() => onRemove(category)}>X</button>
      </li>
    );
  }
}