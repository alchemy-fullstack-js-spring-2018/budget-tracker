import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExpense, updateExpense, removeExpense } from './actions';
import { getExpensesByCategory } from './reducers';
import ExpenseItem from './ExpenseItem';
import ExpensesForm from './ExpenseForm';

export class Expenses extends PureComponent {

  static propTypes = {
    categoryId: PropTypes.string.isRequired,
    expenses: PropTypes.array,
    addExpense: PropTypes.func.isRequired,
    updateExpense: PropTypes.func.isRequired,
    removeExpense: PropTypes.func.isRequired
  };

  handleExpenseAdd = data => {
    this.props.addExpense(data);
  };

  handleUpdate = data => {
    console.log('THE DATA', data);
    this.props.updateExpense(data);
  };

  handleRemoveExpense = expense => {
    this.props.removeExpense(expense);
  }

  render() {
    const { expenses, categoryId } = this.props;
    if(!expenses) return null;

    return (
      <div>
        <h2>Expenses:</h2>
        <ExpensesForm onComplete={this.handleExpenseAdd} label="Add" categoryId={categoryId}/>
        <ul>
          {expenses.map(expense => <ExpenseItem
            key={expense.id}
            expense={expense}
            onUpdate={this.handleUpdate}
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
      expenses: getExpensesByCategory(categoryId, state)
    };
  },
  { addExpense, updateExpense, removeExpense }
)(Expenses);



// <div>
//   <h2>Categories</h2>
//   <CategoryForm onComplete={addCategory} label="Add"/>
//   <ul>
//     {categories.map(category => <Categories
//       key={category.id}
//       onRemove={removeCategory}
//       category={category} 
//       onUpdate={updateCategory}
//     />)}
//   </ul>
// </div>