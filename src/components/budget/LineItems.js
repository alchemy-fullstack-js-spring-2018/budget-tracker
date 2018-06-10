import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BudgetForm from './BudgetForm';
// import LineItem from './LineItem';
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
    date: null
  };

  handleAdd = event => {
    const { description, amount, date, categoryId } = event.edit;
    this.setState({ description, amount, date });
    
  };


  render() {
    const { categories } = this.props;
    if(!categories) return null;

    return (
      <div>
        <h2>Add a Line Item</h2>
        <BudgetForm onComplete={this.handleAdd} categories={categories} label="Add"/>
        {/* <ul>
          {budget.map(lineItem => <LineItem 
            key={lineItem.description}
            // onRemove={removeLineItem}
            // onUpdate={updateLineItem}
            lineItem={lineItem}
          />)
          }
        </ul> */}
      </div>
    );
  }
}

export default connect(
  (state, { categoryID }) => {
    return {
      lineItems: getLineItemByCategory(categoryID, state)
    };
  },
  { addLineItem }
)(LineItems);