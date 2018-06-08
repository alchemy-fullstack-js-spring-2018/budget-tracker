import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadCategories, addCategory, updateCategory, removeCategory } from './actions/actions';
import CategoryForm from './categories/CategoryForm';
import Categories from './categories/Categories';

class Budget extends Component {

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
        <h2>Budget</h2>
        <CategoryForm onComplete={addCategory} label="Add"/>
        <Categories />
      </div>
    );
  }
}

export default connect(
  // fn that maps state to props
  state => ({ categories: state.categories }),
  // list of actions to inject as props
  { loadCategories, addCategory, updateCategory, removeCategory }
)(Budget);