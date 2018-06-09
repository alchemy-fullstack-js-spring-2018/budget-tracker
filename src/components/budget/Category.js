import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { categories } from './reducers';
// import BudgetForm from './BudgetForm';

export default class Category extends Component {

  static propTypes = {
    category: PropTypes.object
  };

  render() {
    const { category } = this.props;
    console.log(category.name);
    // if(!budget) return null;

    return (
      <li>{category.name}</li>
    );
  }
}