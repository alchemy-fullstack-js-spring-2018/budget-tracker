import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CategoryForm from './CategoryForm';

export default class Category extends PureComponent {

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
    if(!category) return null;
    
    return (
      <div key={category.name} style={{ display: 'inline-block', margin: '20px' }}>
        <h3>{category.name}</h3>
        <h3>${category.budget}</h3>
        {editing || <button onClick={this.handleEdit}>✐</button>}
        <button onClick={() => onRemove(category)}>X</button>
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
      </div>
    );
  }
}