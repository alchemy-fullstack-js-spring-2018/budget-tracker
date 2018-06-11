import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Category from './Category';
// import Expenses from './Expenses';

export default class Categories extends PureComponent {

  static propTypes = {
    categories: PropTypes.array,
    removeCategory: PropTypes.func.isRequired,
    updateCategory: PropTypes.func.isRequired
  };

  render() {
    const { categories, removeCategory, updateCategory } = this.props;
    if(!categories) return null;

    return (
      <div>
        <ul>
          <h2>Categories</h2>
          {categories.map(category => <Category 
            key={category.id}
            onRemove={removeCategory}
            onUpdate={updateCategory}
            category={category}
          />)
          }
        </ul>
        {/* {categories && <Expenses categories={categories}/>} */}
      </div>
    );
  }
}