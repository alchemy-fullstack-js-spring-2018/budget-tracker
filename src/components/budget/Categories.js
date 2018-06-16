import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Category from './Category';
import Expenses from './Expenses';
import { Doughnut } from 'react-chartjs-2';

const data = {
  labels: [],
  datasets: [{
    data: [],
    backgroundColor: [
      'rgba(255,99,132,1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
    ],
    hoverBackgroundColor: [
      'rgba(255,99,132,1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
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

    if(categories.length) {
      categories.map(category => {
        data.labels.push(category.name);
        data.datasets[0].data.push(category.budget);
      });
    }

    return (
      <div>
        <h2>Categories</h2>
        {categories.map(category => <Category 
          key={category.id}
          onRemove={removeCategory}
          onUpdate={updateCategory}
          category={category}
        />)
        }
        <Doughnut data={data}/>
        {categories && <Expenses categories={categories}/>}
      </div>
    );
  }
}