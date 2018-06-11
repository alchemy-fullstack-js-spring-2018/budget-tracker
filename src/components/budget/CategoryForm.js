import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const defaultState = {
  name: '',
  budget: 0,
  lineItemId: []
};

export default class CategoryForm extends PureComponent {
  static propTypes = {
    onComplete: PropTypes.func.isRequired,
    onCancel: PropTypes.func,
    label: PropTypes.string.isRequired
  };

  static getDerivedStateFromProps({ category }, { edit }) {
    if(edit) return null;

    return {
      edit: category ? { ...category } : { ... defaultState }
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

  handleSubmit = event => {
    event.preventDefault();
    this.props.onComplete(this.state.edit);
    this.setState({
      edit: { ...defaultState }
    });
  };

  render() {
    const { name, budget } = this.state;
    const { label, onCancel } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <input placeholder="name" value={name} onChange={this.handleChange}/>
        <input placeholder="budget" value={budget} onChange={this.handleChange}/>
        <button type="submit" >{label}</button>
        {onCancel && <button type="reset" onClick={onCancel}>Cancel</button>}
      </form>
    );
  }
}