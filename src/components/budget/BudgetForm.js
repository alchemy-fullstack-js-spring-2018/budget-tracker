import React, { Component } from 'react';
import PropTypes from 'prop-types';

const defaultState = {
  description: '',
  amount: 0
};

export default class BudgetForm extends Component {
  static propTypes = {
    onComplete: PropTypes.func.isRequired,
    // label: PropTypes.string.isRequired
  };

  state = defaultState;

  handleChange = ({ target }) => {
    this.setState({ [target.placeholder]: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState(defaultState);
  };

  render() {
    const { date, description, amount } = this.state;
    // const { label } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <input placeholder="description" value={description} onChange={this.handleChange}/>
        <input placeholder="amount" value={amount} onChange={this.handleChange}/>
        <input placeholder="date" value={date} onChange={this.handleChange}/>
        <button type="submit" >Submit</button>
      </form>
    );
  }
}