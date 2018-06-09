import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Category from './Category';

export default class Categories extends Component {

  static propTypes = {
    categories: PropTypes.array,
    removeCategory: PropTypes.func.isRequired,
    updateCategory: PropTypes.func.isRequired
  };

  render() {
    const { categories, removeCategory, updateCategory } = this.props;

    return (
      <ul>
        <li>Categories</li>
        {categories.map(category => <Category 
          key={category.name}
          onRemove={removeCategory}
          onUpdate={updateCategory}
          category={category}
        />)
        }
      </ul>
    );
  }
}