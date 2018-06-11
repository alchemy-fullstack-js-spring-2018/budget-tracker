import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryForm from './CategoryForm';
import Category from './Category';
import { loadCategories, addCategory, removeCategory } from './actions';

class Categories extends Component {

  static propTypes = {
    categories: PropTypes.array,
    addCategory: PropTypes.func.required,
    removeCategory: PropTypes.func.required,
    loadCategories: PropTypes.func.required
  };

  componentDidMount() {
    this.props.loadCategories();
  }

  render() {
    const { categories, addCategory, removeCategory } = this.props;
    if(!categories) return (<h1>No categories!</h1>);

    return (
      <div>
        <h1>My Budget</h1>
        <CategoryForm onComplete={addCategory} label="Add" />
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
  { loadCategories, addCategory, removeCategory }
)(Categories);