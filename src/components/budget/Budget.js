import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BudgetForm from './BudgetForm';
import LineItem from './LineItem';
import { loadBudget, addLineItem, removeLineItem, updateLineItem } from './actions';

class Budget extends Component {

  static propTypes = {
    budget: PropTypes.array,
    loadBudget: PropTypes.func.isRequired,
    addLineItem: PropTypes.func.isRequired,
    removeLineItem: PropTypes.func.isRequired,
    updateLineItem: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.loadBudget();
  }

  render() {
    const { budget, addLineItem, removeLineItem, updateLineItem } = this.props;
    if(!budget) return null;

    return (
      <main>
        <BudgetForm onComplete={addLineItem} label="Add"/>
        <ul>
          {budget.map(lineItem => <LineItem 
            key={lineItem.description}
            onRemove={removeLineItem}
            onUpdate={updateLineItem}
            lineItem={lineItem}
          />)
          }
        </ul>
      </main>
    );
  }
}

export default connect(
  state => ({ budget: state.budget }),
  { loadBudget, addLineItem, removeLineItem, updateLineItem }
)(Budget);