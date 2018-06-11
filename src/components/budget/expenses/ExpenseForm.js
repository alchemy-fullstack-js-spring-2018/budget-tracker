import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class ExpenseForm extends Component {

  static propTypes = {
    onComplete: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    categoryId: PropTypes.number.isRequired,
    expense: PropTypes.object
  };
  
  defaultState = this.props.expense || {
    id: '',
    timestamp: '',
    name: '',
    cost: '',
    categoryId: this.props.categoryId,
  };

  state = this.defaultState;

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };


  handleSubmit = event => {
    event.preventDefault();
    this.props.onComplete(this.state.categoryId, this.state);
    this.setState(this.defaultState);
  };

  render() {
    const { name, cost } = this.state;
    const { label } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input name="name" value={name} onChange={this.handleChange}/>
        </label>

        <label>
          Cost:
          <input name="cost" value={cost} onChange={this.handleChange}/>
        </label>
        <button type="submit">{label}</button>
      </form>
    );
  }
}