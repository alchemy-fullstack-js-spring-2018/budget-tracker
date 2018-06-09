import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import BudgetForm from './BudgetForm';
import Category from './Category';

export default class Categories extends Component {

  static propTypes = {
    categories: PropTypes.array,
    // loadBudget: PropTypes.func.isRequired,
    // addLineItem: PropTypes.func.isRequired,
    // removeLineItem: PropTypes.func.isRequired,
    // updateLineItem: PropTypes.func.isRequired
  };

  render() {
    const { categories } = this.props;
    // if(!categories) return null;

    return (
      <main>
        {/* <BudgetForm onComplete={addLineItem} label="Add"/> */}
        <ul>
          <li>Hello World</li>
          {categories.map(category => <Category 
            key={category.name}
            // onRemove={removecategory}
            // onUpdate={updatecategory}
            category={category}
          />)
          }
        </ul>
      </main>
    );
  }
}