import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import BudgetForm from './BudgetForm';
import Categories from './Categories';
// import { loadBudget, addLineItem, removeLineItem, updateLineItem } from './actions';
import { loadCategories } from './actions';

class Dashboard extends Component {

  static propTypes = {
    categories: PropTypes.array,
    loadCategories: PropTypes.func.isRequired,
    // addLineItem: PropTypes.func.isRequired,
    // removeLineItem: PropTypes.func.isRequired,
    // updateLineItem: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.loadCategories();
  }

  render() {
    // const { budget, addLineItem, removeLineItem, updateLineItem } = this.props;
    // if(!budget) return null;

    return (
      <main>
        <h1>Hello World</h1>
        <Categories/>
      </main>
    );
  }
}

export default connect(
  state => ({ categories: state.categories }),
  { loadCategories }
)(Dashboard);