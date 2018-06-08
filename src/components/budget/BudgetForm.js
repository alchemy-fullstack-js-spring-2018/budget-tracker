import React, { Component } from 'react';
import PropTypes from 'prop-types';

const defaultState = {
  date: '',
  description: '',
  amount: 0
};

export default class BudgetForm extends Component {
  static propTypes = {
    onComplete: PropTypes.func.isRequired,
    onCancel: PropTypes.func,
    label: PropTypes.string.isRequired
  };

  static getDerivedStateFromProps({ lineItem }, { edit }) {
    if(edit) return null;

    return {
      edit: lineItem ? { ...lineItem } : { ... defaultState }
    };
  }

  state = {
    edit: null
  };

  handleChange = ({ target }) => {
    this.setState(({ edit }) => {
      return {
        edit: {
          ...edit,
          [target.placeholder]: target.value
        }
      };
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState({
      edit: { ...defaultState }
    });
  };

  render() {
    const { date, description, amount } = this.state;
    const { label, onCancel } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <input placeholder="description" value={description} onChange={this.handleChange}/>
        <input placeholder="amount" value={amount} onChange={this.handleChange}/>
        <input type="date" placeholder="date" value={date} onChange={this.handleChange}/>
        <button type="submit" >{label}</button>
        {onCancel && <button type="reset" onClick={onCancel}>Cancel</button>}
      </form>
    );
  }
}