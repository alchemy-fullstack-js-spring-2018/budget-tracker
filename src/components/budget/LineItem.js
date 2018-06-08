import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BudgetForm from './BudgetForm';

export default class LineItem extends Component {

  state = {
    editing: false
  };

  static propTypes = {
    lineItem: PropTypes.object,
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
    const { lineItem, onRemove } = this.props;
    const { description, amount, date } = lineItem;

    return (
      <li key={description} style={{ backgroundColor: 'teal', color: 'white' }} >
        <h2>{description}</h2>
        <h2>${amount}</h2>
        <h2>{date.toLocaleString()}</h2>
        {editing || <button onClick={this.handleEdit}>✐</button>}
        <button onClick={() => onRemove(lineItem)}>X</button>
        {editing && 
          <div>
            <BudgetForm
              label="Update"
              lineItem={lineItem}
              onComplete={this.handleUpdate}
              onCancel={this.handleCancel}
            />
          </div>
        }
      </li>
    );
  }
}