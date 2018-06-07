import React, { Component } from 'react';
import Categories from './Categories';

const categories = [
  { name: 'budget1', color: 1000 },
  { name: 'budget2', color: 2000 },
  { name: 'budget3', color: 3000 },
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