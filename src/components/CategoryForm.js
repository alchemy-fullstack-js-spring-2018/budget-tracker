import React, { Component } from 'react';
import PropTypes from 'prop-types';

const emptyState = {
  name: '',
  budget: ''  
};

export default class CategoryForm extends Component {
  static propTypes = {
    onAdd: PropTypes.func.isRequired
  };

  state = emptyState;

  handleChange = ({ target }) => {
    let value = target.value;
    if(target.type === 'number') value = +value;
    this.setState({ [target.name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if(this.state.name === '' || this.state.budget === '') return;
    this.props.onAdd(this.state);
    this.setState(emptyState);
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