import React, { Component } from 'react';
// import PropTypes from 'prop-types';

const defaultState = {
  date: null,
  description: '',
  amount: 0
};

export default class BudgetForm extends Component {
  state = defaultState;

  render() {
    const { date, description, amount } = this.state;


    return (
      <form>
        <input placeholder="description" value={description}/>
        <input placeholder="amount" value={amount}/>
        <input placeholder="date" value={date}/>
        <button type="submit" >Submit</button>
      </form>
    );
  }
}