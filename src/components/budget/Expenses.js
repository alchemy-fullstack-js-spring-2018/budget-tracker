import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BudgetForm from './BudgetForm';
import Expense from './Expense';
import { addLineItem } from './actions';
import { getLineItemByCategory } from './reducers';
// import Categories from './Categories';

class Expenses extends PureComponent {

  static propTypes = {
    categories: PropTypes.array,
    addLineItem: PropTypes.func
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
    addLineItem(categoryId, { name, price, timestamp });
  };

  render() {
    const { categories } = this.props;
    if(!categories) return null;

    return (
      <div>
        <h2>Add a Line Item</h2>
        <BudgetForm onComplete={this.handleAdd} categories={categories} label="Add"/>
        <div>
          {categories.map(category => <div key={category.name}>
            <h3>{category.name}</h3>
            <ul>
              {category.lineItems && category.lineItems.map(lineItem => <Expense
                key={lineItem.name}
                // onRemove={removeLineItem}
                // onUpdate={updateLineItem}
                lineItem={lineItem}
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
    console.log('state', state);
    return {
      lineItems: getLineItemByCategory(categoryId, state)
    };
  },
  { addLineItem }
)(Expenses);