import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ExpenseForm.css';

export default class ExpenseForm extends Component {
  static propTypes = {
    onComplete: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string,
    price: PropTypes.string,
    id: PropTypes.string,
    categoryId: PropTypes.string
  };

  state = {
    name: this.props.name || '',
    price: this.props.price || ''  
  };

  handleChange = ({ target }) => {
    let { value } = target;
    this.setState({ [target.name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if(this.state.name === '' || this.state.price === '') return;
    const submission = this.props.id ? { ...this.state, id: this.props.id } : this.state;
    this.props.onComplete(this.props.categoryId, submission);
    this.setState({ name: '', price: '' });
  };

  render() {
    const { name, price } = this.state;
    const { label } = this.props;

    return (
      <form className={styles['expense-form']} onSubmit={this.handleSubmit}>   
        <div className="cell">
          <input type="text" name="name" value={name} onChange={this.handleChange}/>
        </div>
        <div className="cell">
          <label>$
            <input type="number" name="price" value={price} onChange={this.handleChange}/>
          </label>
        </div>
        <div className="cell">
          <button type="submit">{label}</button>
        </div>
      </form>
    );
  }
}