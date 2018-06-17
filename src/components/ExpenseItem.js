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
    onRemove: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired
  };

  handleEditToggle = () => {
    this.setState(({ editing }) => ({ editing: !editing }));
  };

  handleUpdate = info => {
    this.props.onUpdate(info);
    this.setState({ editing: false });
  };

  render() {
    const { editing } = this.state;
    const { expense, onRemove } = this.props;
    const { name, price, timestamp } = expense;
    const date = new Date(timestamp);

    return (
      <div className={styles['expense-item']}>
        <li className={editing ? 'being-edited' : 'table-row'}>
          <div className="cell">{name}</div>
          <div className="cell">${price}</div>
          <div className="cell">on {date.toLocaleDateString()}</div>
          <div className="cell">
            <button className="remove icon-button" onClick={onRemove}>&times;</button>
            <button className={editing ? 'edit active' : 'edit icon-button'} onClick={this.handleEditToggle}>✎</button>  
          </div>
        </li>
        {editing && <ExpenseForm name={name} price={price} onComplete={this.handleUpdate} label="UPDATE"/>} 
      </div>

    );
  }
}