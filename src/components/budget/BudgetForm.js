import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// const defaultState = {
//   date: null,
//   description: '',
//   amount: 0
// };

export default class BudgetForm extends Component {
  render() {
    return (
      <form>
        <input placeholder="description"/>
        <input placeholder="amount"/>
        <input placeholder="date"/>
        <button>Submit</button>
      </form>
    );
  }
}