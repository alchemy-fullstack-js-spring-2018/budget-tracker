import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const defaultState = {
  timestamp: '',
  name: '',
  price: 0,
  categoryId: null
};

export default class BudgetForm extends PureComponent {
  static propTypes = {
    categories: PropTypes.array,
    onComplete: PropTypes.func.isRequired,
    onCancel: PropTypes.func,
    label: PropTypes.string.isRequired,
  };

  static getDerivedStateFromProps({ expense }, { edit }) {
    if(edit) return null;

    return {
      edit: expense ? { ...expense } : { ... defaultState }
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
          [target.placeholder]: target.value
        }
      };
    });
  };

  handleSelect = ({ target }) => {
    this.setState(({ edit }) => {
      return {
        edit: {
          ...edit,
          categoryId: target.value
        }
      };
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState({
      edit: { ...defaultState }
    });
  };

  render() {
    const { timestamp, name, price } = this.state;
    const { label, onCancel, categories } = this.props;
    if(!categories) return;

    return (
      <form onSubmit={this.handleSubmit}>
        <input placeholder="name" value={name} onChange={this.handleChange}/>
        <input placeholder="price" value={price} onChange={this.handleChange}/>
        <input type="date" placeholder="timestamp" value={timestamp} onChange={this.handleChange}/>
        <select onChange={this.handleSelect}>
          <option>Category</option>
          {categories.map(category => <option key={category.id} value={category.id}>
            {category.name}
          </option>)
          }
        </select>
        <button type="submit" >{label}</button>
        {onCancel && <button type="reset" onClick={onCancel}>Cancel</button>}
      </form>
    );
  }
}