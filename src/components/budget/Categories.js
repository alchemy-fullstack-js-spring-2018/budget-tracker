import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Category from './Category';
import Expenses from './Expenses';
import { Doughnut } from 'react-chartjs-2';

const data = {
  labels: [
    'Red',
    'Green',
    'Yellow'
  ],
  datasets: [{
    data: [300, 50, 100],
    backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ],
    hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ]
  }]
};

export default class Categories extends PureComponent {

  static propTypes = {
    categories: PropTypes.array,
    removeCategory: PropTypes.func.isRequired,
    updateCategory: PropTypes.func.isRequired
  };

  render() {
    // const { chartData, chartOptions } = this.state;
    const { categories, removeCategory, updateCategory } = this.props;
    if(!categories) return null;

    return (
      <div>
        <ul>
          <h2>Categories</h2>
          {categories.map(category => <Category 
            key={category.id}
            onRemove={removeCategory}
            onUpdate={updateCategory}
            category={category}
          />)
          }
        </ul>
        <Doughnut data={data}/>
        {categories && <Expenses categories={categories}/>}
      </div>
    );
  }
}