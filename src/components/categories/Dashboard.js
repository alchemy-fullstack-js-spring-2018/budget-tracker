import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryForm from './CategoryForm';
import Categories from './Categories';
import { loadCategories, addCategory, removeCategory } from './actions';
import { getCategories } from './reducers';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './Dashboard.css';

class Dashboard extends PureComponent {

  static propTypes = {
    categories: PropTypes.array,
    addCategory: PropTypes.func.isRequired,
    removeCategory: PropTypes.func.isRequired,
    loadCategories: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.loadCategories();
  }

  render() {
    const { categories, addCategory, removeCategory } = this.props; 
    if(!categories) return null;

    return (
      <div>
        <CategoryForm onComplete={addCategory} label="ADD CATEGORY"/>
        <ul>
          <ReactCSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
            {categories.map(category => <Categories
              key={category.id}
              onRemove={removeCategory}
              category={category} 
            />)}
          </ReactCSSTransitionGroup>
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({ categories: getCategories(state) }),
  { loadCategories, addCategory, removeCategory }
)(Dashboard);