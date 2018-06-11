import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExpense } from './action';
import { getExpenseByCategory } from './reducer';
import ExpenseForm from './ExpenseForm';

class Expense extends Component {

  static propTypes = {
    categoryId: PropTypes.string.isRequired,
    expenses: PropTypes.array,
    addExpense: PropTypes.func.isRequired
  }

  handleAdd = (body) => {
    const { categoryId, addExpense } = this.props;
    addExpense(categoryId, { body });
  }

  render() {
    const { expenses } = this.props;

    return (
      <div>
        <ul>
          {expenses.map(expense => {
            return (
              <li key={expense.id}>
                {expense.name}
                {expense.expense} 
                {expense.timestamp && <span> on {expense.timestamp.toLocaleString()} </span>}
              </li>
            );
          })}
        </ul>
        <ExpenseForm onAdd={this.handleAdd}/>
      </div>
    );
  }
}

export default connect(
  (state, { categoryId }) => {
    return { 
      expenses: getExpenseByCategory(categoryId, state)
    };
  },
  { addExpense }
)(Expense);