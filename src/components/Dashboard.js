import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryForm from './CategoryForm';
import Categories from './Categories';
import { loadCategories, addCategories, updateCategories, removeCategories } from './action';

class Dashboard extends Component {

    static propTypes = {
      categories: PropTypes.array,
      addCategories: PropTypes.func.isRequired,
      updateCategories: PropTypes.func.isRequired,
      removeCategories: PropTypes.func.isRequired,
      loadCategories: PropTypes.func.isRequired
    };

    conponentDidMount() {
      this.props.loadCategories();
    }

    render() {
      const { categories, addCategories, updateCategories, removeCategories } = this.props;
      if(!categories) return null;

      return (
        <div>
          <h2>Budget Your Life</h2>
          <CategoryForm onComplete={addCategories} label="Add Item"/>
          <ul>
            {categories.map(category => <Categories
              key={category.name}
              onRemove={removeCategories}
              onUpdate={updateCategories}
              category={category}
            />)}
          </ul>
        </div>
      );
    }
}

export default connect(
  state => ({ categories: state.categories }),
  { loadCategories, addCategories, updateCategories, removeCategories }
)(Dashboard);