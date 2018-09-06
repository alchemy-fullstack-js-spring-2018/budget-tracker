import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExpense, removeExpense } from './actions';
import { getExpensesByCategory } from './reducers';
import ExpenseItem from './ExpenseItem';
import ExpensesForm from './ExpenseForm';
import styles from './Expenses.css';

export class Expenses extends PureComponent {

  static propTypes = {
    categoryId: PropTypes.string.isRequired,
    expenses: PropTypes.array,
    addExpense: PropTypes.func.isRequired,
    removeExpense: PropTypes.func.isRequired,
  };

  handleExpenseAdd = data => {
    this.props.addExpense(data);
  };


  handleRemoveExpense = expense => {
    this.props.removeExpense(expense);
  };

  render() {
    const { expenses, categoryId } = this.props;
    if(!expenses) return null;

    return (
      <div className={styles.expenses}>
        <h2>Expenses:</h2>
        <ExpensesForm onComplete={this.handleExpenseAdd} label="Add" categoryId={categoryId}/>
        <ul>
          {expenses.map(expense => <ExpenseItem
            key={expense.id}
            expense={expense}
            onRemove={this.handleRemoveExpense}
          />)}     
        </ul>
      </div>
    );
  }
}

export default connect(
  (state, { categoryId }) => {
    return {
      expenses: getExpensesByCategory(state, categoryId)
    };
  },
  { addExpense, removeExpense }
)(Expenses);