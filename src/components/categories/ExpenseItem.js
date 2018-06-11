import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ExpenseItem extends Component {

  static propTypes = {
    expense: PropTypes.object.isRequired
  };

  state = {
    viewing: false
  };

  handleView = () => {
    const { viewing } = this.state;
    this.setState({ viewing: !viewing });
  };

  render() {
    const { expense } = this.props;
    const { id, name, price, timestamp, categoryId } = expense;

    return (
      <div>
        <li key={id}>
          {name}
          <button onClick={this.handleView}>VIEW</button>
        </li>
        {this.state.viewing &&
        <li key={`detail${id}`}>
          {price} - {timestamp.toLocaleString()}
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