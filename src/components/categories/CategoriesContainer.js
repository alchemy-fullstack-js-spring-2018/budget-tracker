import React, { Component } from 'react';
import Categories from './Categories';

const categories = [
  { name: 'food', color: 'red' },
  { name: 'rent', color: 'orange' },
  { name: 'fun', color: 'yellow' }
];

export default class CategoriesContainer extends Component {
  state = {
    categories: []
  };

  componentDidMount() {
    Promise.resolve(categories)
      .then(categories => this.setState({ categories }));
  }

  handleAdd = category => {
    this.setState(({ categories }) => {
      categories.push(category);
      return { categories };
    });
  };

  handleRemove = category => {
    this.setState(({ categories }) => {
      const index = categories.indexOf(category);
      if(index === -1) return;
      categories.splice(index, 1);
      return { categories };
    });
  };

  render() {
    const { categories } = this.state;
    return <Categories
      categories={categories}
      onAdd={this.handleAdd}
      onRemove={this.handleRemove}
    />;
  }
}