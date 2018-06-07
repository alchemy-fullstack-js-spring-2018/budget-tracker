import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadCategories, addCategory, updateCategory, removeCategory } from './../actions/actions';
import CategoryForm from './CategoryForm';
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
    const { categories, addCategory, removeCategory } = this.props;
    if(!categories) return null;

    return (
      <div>
        <h2>Fruits</h2>
        <CategoryForm onComplete={addCategory} label="Add"/>
        <ul>
          {categories.map(category => <Category 
            key={category.id} 
            onRemove={removeCategory} 
            onUpdate={updateCategory}
            fruit={category}
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