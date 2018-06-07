import React, { Component } from 'react';

const categories = [
  { name: 'groceries', budget: 300 },
  { name: 'movies', budget: 25 },
  { name: 'gas', budget: 30 }
];

export default class App extends Component {
  state = {
    categories: null
  };

  componentDidMount() {
    Promise.resolve(categories)
      .then(categories => this.setState({ categories }));
  }

  render() {
    const { categories } = this.state;

    if(!categories) return null;

    return (
      <div>
        <h1>Budget Tracker</h1>
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