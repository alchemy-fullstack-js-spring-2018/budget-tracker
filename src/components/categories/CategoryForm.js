import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './CategoryForm.css';

const defaultState = {
  name: '',
  budget: ''
};

export default class CategoryForm extends Component {

  static propTypes = {
    category: PropTypes.object,
    onComplete: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired
  };

  static getDerivedStateFromProps({ category }, { edit }) {
    if(edit) return null;

    return {
      edit: category ? { ...category } : { ...defaultState }
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
          [target.name]: target.value
        }
      };
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onComplete(this.state.edit);
    this.setState({
      edit: { ...defaultState }
    });

  };

  render() {
    const { name, budget } = this.state.edit;
    const { label, onCancel } = this.props;

    return (
      <form className={styles['add-category']} onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input name="name" value={name} onChange={this.handleChange}/>
        </label>

        <label>
          Budget:
          <input name="budget" value={budget} onChange={this.handleChange}/>
        </label>
        <button type="submit">{label}</button>
        {onCancel && <button type="reset" onClick={onCancel}>Cancel</button>}
      </form>
    );
  }
}