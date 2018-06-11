import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExpense } from './actions';
import { getExpensesByCategory } from './reducers';
import ExpenseItem from './ExpenseItem';

class Expenses extends PureComponent {

  static propTypes = {
    categoryId: PropTypes.string.isRequired,
    expenses: PropTypes.array,
    addExpense: PropTypes.func.isRequired
  };

  render() {
    const { expenses } = this.props;

    return (
      <div>
        <h2>Expenses:</h2>
        <ul>
          {expenses.map(expense => <ExpenseItem
            key={expense.id}
            expense={expense}
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
  { addExpense }
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