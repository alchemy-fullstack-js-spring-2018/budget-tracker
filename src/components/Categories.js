import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategoryItem from './CategoryItem';

export default class Categories extends Component {
  static propTypes = {
    categories: PropTypes.array,
    onRemove: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired
  };

  render() {
    const { categories, onRemove, onUpdate } = this.props;

    if(!categories) return null;
    return (
      <ul>
        {categories.map(category => {
          return (
            <CategoryItem
              key={category.id}
              onRemove={() => onRemove(category)}
              onUpdate={onUpdate}
              category={category} />
          );
        })}
      </ul>
    );
  }
}
