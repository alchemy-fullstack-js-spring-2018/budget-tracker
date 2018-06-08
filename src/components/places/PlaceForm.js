import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import styles from './PlaceForm.css';

const defaultState = {
  name: '',
  toSee: ''
};

export default class PlaceForm extends Component {
  static propTypes = {
    onComplete: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired
  };

  state = defaultState;

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState(defaultState);
  }

  render() {
    const { name, toSee } = this.state;
    const { label } = this.props;
  
    return (
      <form>
        <label>
          Name:
          <input name="name" value={name} onChange={this.handleChange}/>
        </label>
        <label>
          to See:
          <input name="toSee" value={toSee} on Change={this.handleChange}/>
        </label>
        <button type="submit">
          {label}
        </button>
      </form>
    );
  }

}
