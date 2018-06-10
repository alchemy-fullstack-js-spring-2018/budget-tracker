import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Categories from './Categories';
import CategoryForm from './CategoryForm';
import { loadCategories, addCategory, removeCategory } from './actions';
import styles from './Dashboard.css';

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
      <div className={styles.dashboard}>
        <h1>Budget Tracker</h1>
        <div className="main-table">
          <div className="table-header">
            <h2 className="table-heading">Category</h2>
            <h2 className="table-heading">Initial Budget</h2>
            <h2 className="table-heading">Remaining Budget</h2>
            <h2 className="table-heading">Actions</h2>
          </div>
          <CategoryForm onAdd={addCategory}/>      
          <Categories categories={categories} onRemove={removeCategory}/>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({ categories: state.categories }),
  { loadCategories, addCategory, removeCategory }
)(Dashboard);