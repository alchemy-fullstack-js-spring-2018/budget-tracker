import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getExpensesByCategory } from './reducers';
import ExpenseItem from './ExpenseItem';

class Expenses extends Component {
  static propTypes = {
    categoryId: PropTypes.string.isRequired,
    expenses: PropTypes.array
  };

  render() {
    const { expenses } = this.props;
    if(!expenses) return null;

    return (
      <ul>
        <h3>Expenses: </h3>        
        {expenses.map(expense => <ExpenseItem
          key={expense.id}
          expense={expense}/>)}
      </ul>
    );
  }
}

export default connect(
  (state, { categoryId }) => {
    return {
      expenses: getExpensesByCategory(categoryId, state)
    };
  }
)(Expenses);