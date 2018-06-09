import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import BudgetForm from './BudgetForm';
import Category from './Category';

export default class Categories extends Component {

  static propTypes = {
    categories: PropTypes.array,
    removeCategory: PropTypes.func.isRequired,
    updateCategory: PropTypes.func.isRequired

    // loadBudget: PropTypes.func.isRequired,
    // addLineItem: PropTypes.func.isRequired,
  };

  render() {
    const { categories, removeCategory, updateCategory } = this.props;
    // if(!categories) return null;

    return (
      <main>
        {/* <BudgetForm onComplete={addLineItem} label="Add"/> */}
        <ul>
          <li>Hello World</li>
          {categories.map(category => <Category 
            key={category.name}
            onRemove={removeCategory}
            onUpdate={updateCategory}
            category={category}
          />)
          }
        </ul>
      </main>
    );
  }
}