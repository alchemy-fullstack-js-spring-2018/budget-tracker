import React, { Component } from 'react';
import Categories from './Categories';

export default class CategoryItem extends Component {

    state = {
      categories: []
    };

    componentDidMount() {
      Promise.resolve()
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