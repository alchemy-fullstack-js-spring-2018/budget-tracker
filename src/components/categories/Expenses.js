import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExpense } from './actions';
import { getExpensesByCategory } from './reducers';
import AddExpense from './AddExpense';

class Expenses extends Component {

  static propTypes = {
    categoryId: PropTypes.string.isRequired,
    expenses: PropTypes.array,
    addExpense: PropTypes.func.isRequired
  };

  handleAdd = text => {
    const { categoryId, addExpense } = this.props;
    addExpense(categoryId, { text });
  };

  render() {
    const { expenses } = this.props;

    return (
      <div>
        <ul>
          {expenses.map(expense => {
            return (
              <li key={expense.id}>
                {expense.text}
                {expense.timestamp && <span> on {expense.timestamp.toLocaleString()} </span>}
              </li>
            );
          })}
        </ul>
        <AddExpense onAdd={this.handleExpense}/>
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
  { addExpense }
)(Expenses);