
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryForm from './CategoryForm';
import Category from './Category';
import { getCategories } from './reducers';
import { loadCategories, addCategory, updateCategory, removeCategory } from './actions';

class Categories extends Component {

  static propTypes = {
    categories: PropTypes.array,
    addCategory: PropTypes.func.isRequired,
    updateCategory: PropTypes.func.isRequired,
    removeCategory: PropTypes.func.isRequired,
    loadCategories: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.loadCategories();
  }

  render() {
    const { categories, addCategory, updateCategory, removeCategory } = this.props;
    if(!categories) return null;

    return (
      <div>
        <h2>Categories</h2>
        <CategoryForm onComplete={addCategory} label="Add"/>
        <ul>
          {categories.map(category => <Category 
            key={category.name} 
            onRemove={removeCategory} 
            onUpdate={updateCategory} 
            category={category}
          />)}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({ categories: getCategories(state) }),
  { loadCategories, addCategory, updateCategory, removeCategory }
)(Categories);