import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ExpenseForm from './ExpenseForm';

export default class Category extends Component {

  static propTypes = {
    expense: PropTypes.object,
    onRemove: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
  };

  state = {
    editing: false,
  };

  handleEdit = () => {
    this.setState({ editing: true });
  };

  handleEditEnd = (categoryId, state) => {
    this.setState({ editing: false }, () => {
      this.props.onUpdate(categoryId, state);
    });
  };

  render() {
    const { expense, onRemove } = this.props;
    const { name, cost, timestamp, categoryId } = expense;
    const { editing } = this.state;

    if(!editing) return (
      <li key={name}>
        Expense: {name} ---- Cost: {cost}, added: {timestamp.toString()}
        <button onClick={() => this.handleEdit()}>✎</button>
        <button onClick={() => onRemove(categoryId, expense)}>X</button>
      </li>
    );

    return (
      <ExpenseForm categoryId={categoryId} onComplete={this.handleEditEnd} expense={expense} label="Save"/>
    );
  }
}