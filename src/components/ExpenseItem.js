import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ExpenseForm from './ExpenseForm';
import styles from './ExpenseItem.css';

export default class ExpenseItem extends Component {
  state = {
    editing: false
  };

  static propTypes = {
    expense: PropTypes.object,
    categoryId: PropTypes.string.isRequired,
    onRemove: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired
  };

  handleEditToggle = () => {
    this.setState(({ editing }) => ({ editing: !editing }));
  };

  handleUpdate = (categoryId, expenseInfo) => {
    this.props.onUpdate(categoryId, expenseInfo);
    this.setState({ editing: false });
  };

  render() {
    const { editing } = this.state;
    const { expense, categoryId, onRemove } = this.props;
    const { name, price, id, timestamp } = expense;
    const date = new Date(timestamp);

    return (
      <div className={styles['expense-item']}>
        <li className={editing ? 'sub-being-edited' : 'sub-table-row'}>
          <div className="cell">{name}</div>
          <div className="cell">${price}</div>
          <div className="cell">on {date.toLocaleDateString()}</div>
          <div className="cell">
            <button className="remove icon-button" onClick={onRemove}>&times;</button>
            <button className={editing ? 'edit active' : 'edit icon-button'} onClick={this.handleEditToggle}>✎</button>  
          </div>
        </li>
        {editing && <ExpenseForm name={name} price={price} id={id} categoryId={categoryId} onComplete={this.handleUpdate} label="UPDATE"/>} 
      </div>

    );
  }
}