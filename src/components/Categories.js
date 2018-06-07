import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
              {categories.map(({ name, budget }) => {
                return (
                  <tr key={name}>
                    <td>{name}</td>
                    <td>${budget}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </ul>
      </div>
    );
  }
}
