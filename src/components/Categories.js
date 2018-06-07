import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategoryItem from './CategoryItem';

export default class Categories extends Component {
  static propTypes = {
    categories: PropTypes.array,
  };

  render() {
    const { categories } = this.props;

    if(!categories) return null;

    return (
      <div>
        <ul>
          <table key={name}>
            <thead>
              <tr>
                <th>Category</th>
                <th>Budget</th>
              </tr>
            </thead>
            <tbody>
              {categories.map(category => {
                return <CategoryItem key={category.name} {...category}/>;
              })}
            </tbody>
          </table>
        </ul>
      </div>
    );
  }
}
