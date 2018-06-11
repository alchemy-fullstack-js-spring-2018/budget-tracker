import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryForm from './CategoryForm';
import Category from './Category';
import { getCategories } from './reducers';
import { loadCategories, addCategory, removeCategory } from './actions';

class Categories extends Component {

  static propTypes = {
    categories: PropTypes.array,
    loadCategories: PropTypes.func.isRequired,
    addCategory: PropTypes.func.isRequired,
    removeCategory: PropTypes.func.isRequired
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
        <CategoryForm onComplete={addCategory} label="Add New Category" />
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
  state => ({ categories: getCategories(state) }),
  { loadCategories, addCategory, removeCategory }
)(Categories);