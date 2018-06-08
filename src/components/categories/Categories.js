import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Categories.css';

export default class Categories extends Component {

  static propTypes = {
    category: PropTypes.object,
    onRemove: PropTypes.func.isRequired
  };

  state = {
    viewing: false
  };

  handleView = () => {
    const { viewing } = this.state;
    this.setState({ viewing: !viewing });
  };

  render() {
    const { category, onRemove } = this.props;
    const { name, id, budget, timestamp } = category;

    return (
      <div>
        <li key={name} className={styles.categories}>
          {name}
          <button onClick={this.handleView}>VIEW</button>
        </li>
        {this.state.viewing &&
        <li>
          {id} ${budget} {timestamp.toLocaleString()}
        </li>
        }
      </div>
    );
  }
}