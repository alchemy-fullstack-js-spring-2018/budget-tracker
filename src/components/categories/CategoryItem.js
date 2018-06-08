import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategoryForm from './CategoryForm';

export default class CategoryItem extends Component {

  static propTypes = {
    category: PropTypes.object.isRequired,
    onRemove: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired
  };

  state = {
    editing: false
  };

  handleEdit = () => {
    this.setState({ editing: true });
  };

  handleCancel = () => {
    this.setState({ editing: false });
  };

  handleUpdate = data => {
    this.props.onUpdate(data);
    this.setState({ editing: false });
  };

  render() {
    const { editing } = this.state;
    const { category, onRemove } = this.props;
    const { name, budget, timestamp } = category;

    return (
      <li key={name}>
        Budget: ${budget} Added: {timestamp.toLocaleString()}
        {editing || <button onClick={this.handleEdit}>Edit</button>}
        <button onClick={() => onRemove(category)}>REMOVE</button>
        {editing &&
          <div>
            <CategoryForm
              label="Update"
              category={category}
              onComplete={this.handleUpdate}
              onCancel={this.handleCancel}
            />
          </div>
        }
      </li>
    );
  }
}