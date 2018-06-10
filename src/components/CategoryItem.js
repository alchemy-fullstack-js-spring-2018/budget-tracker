import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategoryForm from './CategoryForm';
import styles from './CategoryItem.css';

export default class CategoryItem extends Component {
  state = {
    editing: false
  };

  static propTypes = {
    name: PropTypes.string,
    budget: PropTypes.number,
    onRemove: PropTypes.func.isRequired
  };

  handleEditToggle = () => {
    this.setState(({ editing }) => ({ editing: !editing }));
  };

  render() {
    const { editing } = this.state;
    const { name, budget, onRemove } = this.props;

    return (
      <div className={styles['category-item']}>
        <li className={editing ? 'grayed-out' : null}>
          <div className="cell">{name}</div>
          <div className="cell">${budget}</div>
          <div className="cell"></div>
          <div className="cell">
            <button className="remove icon-button" onClick={onRemove}>&times;</button>
            <button className={editing ? 'edit active' : 'edit icon-button'} onClick={this.handleEditToggle}>✎</button>  
          </div>
        </li>
        {editing && <CategoryForm name={name} budget={budget} onComplete={() => {}} label="UPDATE"/>} 
      </div>

    );
  }
}