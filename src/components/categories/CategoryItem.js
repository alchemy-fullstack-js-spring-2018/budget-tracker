import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CategoryForm from './CategoryForm';
import Expenses from './Expenses';
import styles from './CategoryItem.css';
import { updateCategory } from './actions';

export class CategoryItem extends PureComponent {

  static propTypes = {
    category: PropTypes.object.isRequired,
    onRemove: PropTypes.func.isRequired,
    updateCategory: PropTypes.func.isRequired
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
    this.props.updateCategory(data);
    this.setState({ editing: false });
  };

  render() {
    const { editing } = this.state;
    const { category, onRemove } = this.props;
    const { name, budget, timestamp } = category;

    return (
      <li key={name} className={styles.categoryItem}>
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
        <h3>Budget: ${budget} <br/> Added: {timestamp.toLocaleString().substring(0, 10)}</h3>
        {editing || <button className={styles.editButton} onClick={this.handleEdit}>EDIT</button>}
        <button className={styles.removeButton} onClick={() => onRemove(category)}>REMOVE</button>
        <Expenses categoryId={category.id}/>
      </li>
    );
  }
}

export default connect(
  null,
  { updateCategory }
)(CategoryItem);