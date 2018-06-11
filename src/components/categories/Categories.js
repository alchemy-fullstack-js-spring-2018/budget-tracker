import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryForm from './CategoryForm';
import Category from './Category';

class Categories extends Component {

  static propTypes = {
    categories: PropTypes.array
  };

  render() {
    const { categories } = this.props;
    if(!categories) return (<h1>No categories!</h1>);

    return (
      <div>
        <h1>Categories</h1>
        <CategoryForm label="Add" />
        <ul>
          {categories.map(category => <Category
            key={category.name}
            category={category}
          />)}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({ categories: state.categories })
)(Categories);