import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CategoryItem from './CategoryItem';
import styles from './Categories.css';

export default class Categories extends PureComponent {

  static propTypes = {
    category: PropTypes.object,
    onRemove: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired
  };

  state = {
    viewing: false
  };

  handleView = () => {
    const { viewing } = this.state;
    this.setState({ viewing: !viewing });
  };

  render() {
    const { category, onRemove, onUpdate } = this.props;
    const { name, id } = category;

    return (
      <div>
        <li key={id} className={styles.categories}>
          {name}
          <button onClick={this.handleView}>VIEW</button>
        </li>
        {this.state.viewing && <CategoryItem
          category={category}
          onRemove={onRemove}
          onUpdate={onUpdate}
        />}
      </div>
    );
  }
}