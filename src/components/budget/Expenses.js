import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BudgetForm from './BudgetForm';
import Expense from './Expense';
import { addExpense } from './actions';
import { getExpenseByCategory } from './reducers';
// import Categories from './Categories';

class Expenses extends PureComponent {

  static propTypes = {
    categories: PropTypes.array,
    addExpense: PropTypes.func
  };

  state = {
    name: '',
    price: 0,
    timestamp: null,
    categoryId: null
  };

  handleAdd = event => {
    const { name, price, timestamp, categoryId } = event.edit;
    this.setState({ name, price, timestamp });
    addExpense(categoryId, { name, price, timestamp });
  };

  render() {
    const { categories } = this.props;
    if(!categories) return null;

    return (
      <div>
        <h2>Add an Expense</h2>
        <BudgetForm onComplete={this.handleAdd} categories={categories} label="Add"/>
        <div>
          {categories.map(category => <div key={category.name}>
            <h3>{category.name}</h3>
            <ul>
              {category.expenses && category.expenses.map(expense => <Expense
                key={expense.name}
                // onRemove={removeLineItem}
                // onUpdate={updateLineItem}
                expense={expense}
              />)
              }
            </ul>
          </div>)
          }
        </div>
      </div>
    );
  }
}

export default connect(
  (state, { categoryId }) => {
    return {
      lineItems: getExpenseByCategory(categoryId, state)
    };
  },
  { addExpense }
)(Expenses);