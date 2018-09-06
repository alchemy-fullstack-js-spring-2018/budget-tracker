import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CategoryItem from './CategoryItem';
import styles from './Categories.css';

export default class Categories extends PureComponent {

  static propTypes = {
    category: PropTypes.object,
    onRemove: PropTypes.func.isRequired,
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
    const { viewing } = this.state;
    const { name, id } = category;

    return (
      <div>
        <li key={id} className={styles.categories}>
          <h3>{name}</h3>
          {!viewing && <button onClick={this.handleView}>VIEW</button>}
          {viewing && <button onClick={this.handleView}>HIDE</button>} 
        </li>
        {viewing && <CategoryItem
          category={category}
          onRemove={onRemove}
        />}
      </div>
    );
  }
}