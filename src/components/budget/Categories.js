import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import BudgetForm from './BudgetForm';
// import LineItem from './LineItem';

export default class Categories extends Component {

//   static propTypes = {
//     budget: PropTypes.array,
//     loadBudget: PropTypes.func.isRequired,
//     addLineItem: PropTypes.func.isRequired,
//     removeLineItem: PropTypes.func.isRequired,
//     updateLineItem: PropTypes.func.isRequired
//   };

  render() {
    // const { budget, addLineItem, removeLineItem, updateLineItem } = this.props;
    // if(!budget) return null;

    return (
      <main>
        {/* <BudgetForm onComplete={addLineItem} label="Add"/> */}
        <ul>
          <li>Hello World</li>
          {/* {budget.map(lineItem => <LineItem 
            key={lineItem.description}
            onRemove={removeLineItem}
            onUpdate={updateLineItem}
            lineItem={lineItem}
          />)
          } */}
        </ul>
      </main>
    );
  }
}