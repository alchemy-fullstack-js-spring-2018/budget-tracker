import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './CategoryForm.css';

const emptyState = {
  name: '',
  budget: ''  
};

export default class CategoryForm extends Component {
  static propTypes = {
    onComplete: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired
  };

  state = emptyState;

  handleChange = ({ target }) => {
    let { value } = target;
    if(target.type === 'number') value = +value;
    this.setState({ [target.name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if(this.state.name === '' || this.state.budget === '') return;
    this.props.onComplete(this.state);
    this.setState(emptyState);
  };

  render() {
    const { name, budget } = this.state;
    const { label } = this.props;

    return (
      <form className={styles['category-form']} onSubmit={this.handleSubmit}>   
        <div className="cell">
          <input type="text" name="name" value={name} onChange={this.handleChange}/>
        </div>
        <div className="cell">
          <label>$
            <input type="number" name="budget" value={budget} onChange={this.handleChange}/>
          </label>
        </div>
        <div className="cell"></div>
        <div className="cell">
          <button type="submit">{label}</button>
        </div>
      </form>
    );
  }
}