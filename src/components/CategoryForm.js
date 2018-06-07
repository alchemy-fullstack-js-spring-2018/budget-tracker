import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CategoryForm extends Component {
  static propTypes = {
    onAdd: PropTypes.func.isRequired
  };

  state = {
    name: '',
    budget: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onAdd(this.state);
  };

  render() {
    const { name, budget } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>Add a Category</legend>
          <label>
        Name: 
            <input type="text" name="name" value={name} onChange={this.handleChange}/>
          </label>
          <label>
        Budget: $
            <input type="number" name="budget" value={budget} onChange={this.handleChange}/>
          </label>
          <button type="submit">ADD</button>
        </fieldset>
      </form>
    );
  }
}