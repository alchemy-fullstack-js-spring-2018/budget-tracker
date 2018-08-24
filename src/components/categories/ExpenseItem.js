import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExpenseForm from './ExpenseForm';
import styles from './ExpenseItem.css';
import { updateExpense } from './actions';

export class ExpenseItem extends PureComponent {

  static propTypes = {
    expense: PropTypes.object.isRequired,
    onRemove: PropTypes.func.isRequired,
    updateExpense: PropTypes.func.isRequired
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
    this.props.updateExpense(data);
    this.setState({ editing: false });
  };

  render() {
    const { expense, onRemove } = this.props;
    const { editing } = this.state;
    const { id, name, price, timestamp, categoryId } = expense;

    return (
      <div className={styles.expenseItem}>
        <li key={id}>
          <strong>{name}</strong>
          <button onClick={this.handleView}>VIEW</button>
        </li>
        {this.state.viewing &&
        <li key={`detail${id}`}>
          <p>Price: ${price} <br/> Added: {timestamp.toLocaleString().substring(0, 10)}</p>
          {editing || <button onClick={this.handleEdit}>Edit</button>}
          <button onClick={() => onRemove(expense)}>REMOVE</button>
          {editing &&
          <div>
            <ExpenseForm
              label="Update"
              expense={expense}
              onComplete={this.handleUpdate}
              onCancel={this.handleCancel}
              categoryId={categoryId}
            />
          </div>
          }
        </li>
        }
      </div>
    );
  }
}

export default connect(
  null,
  { updateExpense }
)(ExpenseItem);