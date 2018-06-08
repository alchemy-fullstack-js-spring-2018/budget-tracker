import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategoryItem from './CategoryItem';

export default class Categories extends Component {
  static propTypes = {
    categories: PropTypes.array,
    onRemove: PropTypes.func.isRequired
  };

  render() {
    const { categories, onRemove } = this.props;

    if(!categories) return null;
    return (
      <div>
        <ul>
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Budget</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {categories.map(category => {
                return (
                  <CategoryItem 
                    key={category.id}
                    onRemove={() => onRemove(category)}
                    {...category}/>

                );
              })}
            </tbody>
          </table>
        </ul>
      </div>
    );
  }
}
