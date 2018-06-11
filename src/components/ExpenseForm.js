import React, { Component } from 'react';
import PropTypes from 'prop-types';

const defaultState = {
  name: '',
  expense: ''
};

export default class ExpenseForm extends Component {

  static propTypes = {
    onAdd: PropTypes.func.isRequired,
  };

  state = defaultState;

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };
  
  handleSubmit = event => {
    event.preventDefault();
    this.props.onAdd(this.state);
    this.setState(defaultState);
  };

  render() {
    const { name, expense } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Add an Item:
          <input name="name" value={name} onChange={this.handleChange}/>
        </label>
        <label>
          Cost:
          <input name="expense" value={expense} onChange={this.handleChange}/>
        </label>
        <button type="submit">Post</button>
      </form>
    );
  }
}