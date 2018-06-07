import React, { Component } from 'react';
import Categories from './Categories';
import CategoryForm from './CategoryForm';

const categories = [
  { name: 'groceries', budget: 300 },
  { name: 'movies', budget: 20 },
  { name: 'gas', budget: 30 }
];

export default class Dashboard extends Component {
  state = {
    categories: null
  };

  componentDidMount() {
    Promise.resolve(categories)
      .then(categories => this.setState({ categories }));
  }

  handleAdd = ({ name, budget }) => {
    this.setState(({ categories }) => {
      categories.push({ name, budget: parseInt(budget) });
      return { categories };
    });
  };

  render() {
    const { categories } = this.state;

    return (
      <div>
        <h1>Budget Tracker</h1>        
        <CategoryForm onAdd={this.handleAdd}/>      
        <Categories categories={categories}/>
      </div>
    );
  }
}
