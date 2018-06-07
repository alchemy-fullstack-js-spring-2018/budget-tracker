import React, { Component } from 'react';
import Dashboard from './Dashboard';

const categories = [
  { name: 'Perfect Vacation', budget: 5000 },
  { name: 'Perfect House', budget: 500000 },
  { name: 'Perfect Car', budget: 10000 }
];

export default class DashboardContainer extends Component {

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
    return <Dashboard
      categories={categories}
      onAdd={this.handleAdd}
      onRemove={this.handleRemove}
    />;
  }
}