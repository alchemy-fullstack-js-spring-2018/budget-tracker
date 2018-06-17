import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getExpensesByCategory } from './reducers';
import { addExpense, updateExpense, removeExpense } from './actions';
import ExpenseItem from './ExpenseItem';
import ExpenseForm from './ExpenseForm';
import styles from './Expenses.css';

class Expenses extends Component {
  static propTypes = {
    categoryId: PropTypes.string.isRequired,
    expenses: PropTypes.array,
    addExpense: PropTypes.func.isRequired,
    updateExpense: PropTypes.func.isRequired,
    removeExpense: PropTypes.func.isRequired
  };

  render() {
    const { categoryId, expenses, addExpense, updateExpense, removeExpense } = this.props;
    if(!expenses) return null;

    return (
      <div className={styles.expenses}>
        <h3>Expenses</h3>
        <div className="sub-table">
          <div className="table-header">
            <h4 className="table-heading">Type</h4>
            <h4 className="table-heading">Amount</h4>
            <div className="cell"></div>
            <h4 className="table-heading">Actions</h4>
          </div>
          <ul>
            <ExpenseForm categoryId={categoryId} onComplete={addExpense} label="ADD"/>      
            {expenses.map(expense => <ExpenseItem
              key={expense.id}
              categoryId={categoryId}
              expense={expense}
              onUpdate={updateExpense}
              onRemove={removeExpense}/>)}
          </ul>
        </div>
      </div>
    );
  }
}

export default connect(
  (state, { categoryId }) => {
    return {
      expenses: getExpensesByCategory(categoryId, state)
    };
  },
  { addExpense, updateExpense, removeExpense }
)(Expenses);

