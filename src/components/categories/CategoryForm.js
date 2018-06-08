import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './CategoryForm.css';

const defaultState = {
  name: '',
  budget: '',
};

export default class CategoryForm extends Component {
  
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
    };

    render() {
      const { name, budget } = this.state;
      const { label } = this.props;

      return (
        <form className={styles['add-category']} onSubmit={this.handleSubmit}>
          <label>
                    Name: &nbsp;
            <input name="name" value={name} onChange={this.handleChange} />&nbsp;
          </label>
          <label>
                    Budget(in dollars): &nbsp;
            <input name="budget" value={budget} onChange={this.handleChange} />
          </label>
          <button type="submit">{label}</button>
        </form>
      );
    }
}