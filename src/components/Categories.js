import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategoryForm from './CategoryForm'; //eslint-disable-line

export default class Category extends Component {

    static propTypes = {
      category: PropTypes.object,
      onRemove: PropTypes.func.isRequired
    };

    render() {
      const { category, onRemove } = this.props;
      const { name, budget } = category;

      return (
        <li key={name}>
          {name}: {budget}
          <button onClick={() => onRemove(category)}>X</button>
        </li>
      );
    }
}