import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExpense, updateExpense, removeExpense } from '../actions/actions';
import Expense from './Expense';
import ExpenseForm from './ExpenseForm';

class Expenses extends Component {

  static propTypes = {
    expenses: PropTypes.array,
    addExpense: PropTypes.func.isRequired,
    updateExpense: PropTypes.func.isRequired,
    removeExpense: PropTypes.func.isRequired,
    categoryId: PropTypes.number.isRequired,
  };

  render() {
    const { expenses, removeExpense, addExpense, updateExpense, categoryId } = this.props;

    return (
      <div>
        <h3>Expenses</h3>
        <ExpenseForm categoryId={categoryId} onComplete={addExpense} label="Add"/>
        <ul>
          {expenses ? expenses.map(expense => <Expense 
            key={expense.id} 
            onRemove={removeExpense} 
            onUpdate={updateExpense}
            expense={expense}
          />) : null}
        </ul>
      </div>
    );
  }
}

export default connect(
  (state, props) => {
    return {
      expenses: state.expensesByCategory[props.categoryId]
    };
  },
  { addExpense, removeExpense, updateExpense }
)(Expenses);