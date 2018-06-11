import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ExpenseForm from './ExpenseForm';

export default class ExpenseItem extends Component {

  static propTypes = {
    expense: PropTypes.object.isRequired,
    // onUpdate: PropTypes.func.isRequired,
    // onRemove: PropTypes.func.isRequired
  };

  state = {
    viewing: false,
    editing: false
  };

  handleView = () => {
    const { viewing } = this.state;
    this.setState({ viewing: !viewing });
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
    const { expense, onRemove } = this.props;
    const { editing } = this.state;
    const { id, name, price, timestamp } = expense;

    return (
      <div>
        <li key={id}>
          {name}
          <button onClick={this.handleView}>VIEW</button>
        </li>
        {this.state.viewing &&
        <li key={`detail${id}`}>
          {price} - {timestamp.toLocaleString()}
          {editing || <button onClick={this.handleEdit}>Edit</button>}
          <button onClick={() => onRemove(expense)}>REMOVE</button>
          {editing &&
          <div>
            <ExpenseForm
              label="Update"
              expense={expense}
              onComplete={this.handleUpdate}
              onCancel={this.handleCancel}
            />
          </div>
          }
        </li>
        }
      </div>
    );
  }
}










{/* <div>
        <li key={id} className={styles.categories}>
          {name}
          <button onClick={this.handleView}>VIEW</button>
        </li>
        {this.state.viewing && <CategoryItem
          category={category}
          onRemove={onRemove}
          onUpdate={onUpdate}
        />}
      </div> */}