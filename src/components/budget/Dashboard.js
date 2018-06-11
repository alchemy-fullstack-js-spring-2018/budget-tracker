import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryForm from './CategoryForm';
import Categories from './Categories';
import { loadCategories, addCategory, updateCategory, removeCategory } from './actions';
import { getCategories } from '../../services/api';

class Dashboard extends PureComponent {

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
    const { categories, addCategory, removeCategory, updateCategory } = this.props;

    return (
      <main>
        <h1>Budget Dashboard</h1>
        <h2>Add a Category</h2>
        <CategoryForm onComplete={addCategory} label="Add"/>
        {categories && <Categories categories={categories} removeCategory={removeCategory} updateCategory={updateCategory}/>}
      </main>
    );
  }
}

export default connect(
  state => ({ categories: state.categories }),
  { loadCategories, addCategory, updateCategory, removeCategory }
)(Dashboard);