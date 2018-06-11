import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategoryForm from './CategoryForm';


export default class Category extends Component {

  state = {
    editing: false
  };

  static propTypes = {
    category: PropTypes.object,
    onRemove: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired
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
    const { name, budget } = category;

    return (
      <li key={name}>
        <h4>
          {name}:
          {budget} dollars
          {editing || <button onClick={this.handleEdit}>✐</button>}
          <button onClick={() => onRemove(category)}>Delete</button>
        </h4>
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