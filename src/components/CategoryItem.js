import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategoryForm from './CategoryForm';
import styles from './CategoryItem.css';

export default class CategoryItem extends Component {
  state = {
    editing: false
  };

  static propTypes = {
    category: PropTypes.object,
    onRemove: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired
  };

  handleEditToggle = () => {
    this.setState(({ editing }) => ({ editing: !editing }));
  };

  handleUpdate = info => {
    this.props.onUpdate(info);
    this.setState({ editing: false });
  };

  render() {
    const { editing } = this.state;
    const { category, onRemove } = this.props;
    const { name, budget, id } = category;

    return (
      <div className={styles['category-item']}>
        <li className={editing ? 'being-edited' : 'table-row'}>
          <div className="cell">{name}</div>
          <div className="cell">${budget}</div>
          <div className="cell"></div>
          <div className="cell">
            <button className="remove icon-button" onClick={onRemove}>&times;</button>
            <button className={editing ? 'edit active' : 'edit icon-button'} onClick={this.handleEditToggle}>✎</button>  
          </div>
        </li>
        {editing && <CategoryForm name={name} budget={budget} id={id} onComplete={this.handleUpdate} label="UPDATE"/>} 
      </div>

    );
  }
}