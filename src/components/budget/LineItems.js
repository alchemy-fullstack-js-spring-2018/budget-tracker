import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BudgetForm from './BudgetForm';
import LineItem from './LineItem';
import { addLineItem } from './actions';
import { getLineItemByCategory } from './reducers';
// import Categories from './Categories';

class LineItems extends Component {

  static propTypes = {
    categories: PropTypes.array,
    addLineItem: PropTypes.func
  };

  state = {
    description: '',
    amount: 0,
    date: null,
    categoryId: null
  };

  handleAdd = event => {
    const { description, amount, date, categoryId } = event.edit;
    this.setState({ description, amount, date });
    addLineItem(categoryId, { description, amount, date });
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
              {category.lineItems && category.lineItems.map(lineItem => <LineItem
                key={lineItem.description}
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
)(LineItems);