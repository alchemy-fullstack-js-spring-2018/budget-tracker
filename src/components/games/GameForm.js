import React, { Component } from 'react';
import PropTypes from 'pro-types';
import styles from './GameForm.css';

const defaultState = {
  name: '',
  developer: '',
  price: ''
};

export default class GameForm extends Component {

    static PropTypes = {
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
    };

    render() {
      const { name, developer, price } = this.state;
      const { label } = this.props;

      return (
        <form className={styles['add-game']} onSubmit={this.handleSubmit}>
          <label>
                    Name:
            <input name="name" value={name} onChange={this.handleChange} />
          </label>
          <label>
                    Developer:
            <input name="developer" value={developer} onChange={this.handleChange} />
          </label>

          <label>
                    Steam Price:
            <input name="developer" value={developer} onChange={this.handleChange} />
          </label>
          <button type="submit">{label}</button>
        </form>
      );
    }
}