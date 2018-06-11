import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import BudgetForm from './BudgetForm';

export default class Expense extends PureComponent {

  state = {
    editing: false
  };

  static propTypes = {
    expense: PropTypes.object,
    // onRemove: PropTypes.func.isRequired,
    // onUpdate: PropTypes.func.isRequired
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
    const { expense, onRemove } = this.props;
    const { name, price, timestamp } = expense;

    return (
      <li key={name} style={{ backgroundColor: 'teal', color: 'white' }} >
        <h2>{name}</h2>
        <h2>${price}</h2>
        {timestamp && <h2>{timestamp.toLocaleString()}</h2>}
        {editing || <button onClick={this.handleEdit}>✐</button>}
        <button onClick={() => onRemove(expense)}>X</button>
        {editing && 
          <div>
            <BudgetForm
              label="Update"
              expense={expense}
              onComplete={this.handleUpdate}
              // onCancel={this.handleCancel}
            />
          </div>
        }
      </li>
    );
  }
}