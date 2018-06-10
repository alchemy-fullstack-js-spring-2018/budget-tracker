import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BudgetForm from './BudgetForm';
import LineItem from './LineItem';
import { addLineItem } from './actions';
import { getLineItemByCategory } from './reducers';
import Categories from './Categories';

class LineItems extends Component {

  static propTypes = {
    categories: PropTypes.array,
  };


  render() {
    const { categories, addLineItem } = this.props;
    if(!categories) return null;

    console.log('CAT!!', categories);

    return (
      <div>
        <h2>Line Items</h2>
        <BudgetForm onComplete={addLineItem} categories={categories} label="Add"/>
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