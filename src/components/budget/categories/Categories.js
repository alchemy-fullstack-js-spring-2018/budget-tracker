import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadCategories, addCategory, updateCategory, removeCategory } from '../actions/actions';
import Category from './Category';

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
    const { categories, removeCategory } = this.props;
    if(!categories) return null;

    return (
      <div>
        <h2>Categories</h2>
        <ul>
          {categories.map(category => <Category 
            key={category.id} 
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
  // fn that maps state to props
  state => ({ categories: state.categories }),
  // list of actions to inject as props
  { loadCategories, addCategory, updateCategory, removeCategory }
)(Categories);