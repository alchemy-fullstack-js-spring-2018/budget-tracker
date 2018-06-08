import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Categories from './Categories';
import CategoryForm from './CategoryForm';
import { loadCategories, addCategory, removeCategory } from './actions';

class Dashboard extends Component {
  static propTypes = {
    categories: PropTypes.array,
    addCategory: PropTypes.func.isRequired,
    removeCategory: PropTypes.func.isRequired,
    loadCategories: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.loadCategories();
  }

  render() {
    const { categories, addCategory, removeCategory } = this.props;

    return (
      <div>
        <h1>Budget Tracker</h1>        
        <CategoryForm onAdd={addCategory}/>      
        <Categories categories={categories} onRemove={removeCategory}/>
      </div>
    );
  }
}

export default connect(
  state => ({ categories: state.categories }),
  { loadCategories, addCategory, removeCategory }
)(Dashboard);