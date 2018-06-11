import React, { Component } from 'react';
import PropTypes from 'prop-types';

const defaultState = {
  name: '',
  color: ''
};

export default class CategoryForm extends Component {

  static propTypes = {
    onComplete: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired
  };

  state = defaultState;

  render() {
    const { name, color } = this.state;

    return (
      <form>
        <label>
          Name:
          <input name="name" value={name} />
        </label>

        <label>
          Color:
          <input name="color" value={color} />
        </label>
      </form>
    );
  }
}