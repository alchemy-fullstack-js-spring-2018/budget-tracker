import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Category from './Category';
import LineItems from './LineItems';

export default class Categories extends Component {

  static propTypes = {
    categories: PropTypes.array,
    removeCategory: PropTypes.func.isRequired,
    updateCategory: PropTypes.func.isRequired
  };

  render() {
    const { categories, removeCategory, updateCategory } = this.props;

    return (
      <div>
        <LineItems categories={categories}/>
        <ul>
          <h2>Categories</h2>
          {categories.map(category => <Category 
            key={category.name}
            onRemove={removeCategory}
            onUpdate={updateCategory}
            category={category}
          />)
          }
        </ul>
      </div>
    );
  }
}