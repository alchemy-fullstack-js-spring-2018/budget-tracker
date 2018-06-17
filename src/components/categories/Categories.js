import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryForm from './CategoryForm';
import Category from './Category';
import { loadCategories, addCategory, removeCategory, updateCategory } from './actions';

class Categories extends Component {

    static propTypes = {
      categories: PropTypes.array,
      addCategory: PropTypes.func.isRequired,
      removeCategory: PropTypes.func.isRequired,
      loadCategories: PropTypes.func.isRequired
    };

    componentDidMount() {
      this.props.loadCategories();
    }

    render() {
      const { categories, addCategory, removeCategory } = this.props;
      // console.log('we are in categories');
      if(!categories) return null;
      // console.log('we are past guard in categories');
      return (
        <div>
          <h2>Categories</h2>
          <CategoryForm onComplete={addCategory} label="Add"/>
          <ul>
            {categories.map(category => <Category 
              key={category.name} 
              onRemove={removeCategory} 
              category={category}
            />)}
          </ul>
        </div>
      );
    }
}

export default connect(
  state => ({ categories: state.categories }),
  { loadCategories, addCategory, removeCategory, updateCategory }
)(Categories);