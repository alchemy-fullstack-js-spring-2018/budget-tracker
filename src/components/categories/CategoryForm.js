import React, { Component } from 'react';
import PropTypes from 'prop-types';

const defaultState = {
  name: '',
  budget: ''
};

export default class CategoryForm extends Component {

  static propTypes = {
    category: PropTypes.object,
    onComplete: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired
  };

  state = {
    edit: null
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState(defaultState);
  };

  render() {
    const { name, budget } = this.state;
    const { label } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input name="name" value={name} onChange={this.handleChange} />
        </label>

        <label>
          Budget:
          <input name="budget" value={budget} onChange={this.handleChange} />
        </label>
        <button type="submit">{label}</button>
      </form>
    );
  }
}