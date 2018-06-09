import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryForm from './CategoryForm';
import Categories from './Categories';
import { loadCategories, addCategory, updateCategory, removeCategory } from './actions';

class Dashboard extends Component {

  static propTypes = {
    categories: PropTypes.array,
    loadCategories: PropTypes.func.isRequired,
    addCategory: PropTypes.func.isRequired,
    removeCategory: PropTypes.func.isRequired,
    updateCategory: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.loadCategories();
  }

  render() {
    const { categories, addCategory, removeCategory } = this.props;
    if(!categories) return null;

    return (
      <main>
        <h1>Budget Dashboard</h1>
        <CategoryForm onComplete={addCategory} label="Add"/>
        <Categories categories={categories} removeCategory={removeCategory}/>
      </main>
    );
  }
}

export default connect(
  state => ({ categories: state.categories }),
  { loadCategories, addCategory, updateCategory, removeCategory }
)(Dashboard);