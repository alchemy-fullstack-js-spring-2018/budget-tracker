import { CATEGORIES_LOAD, CATEGORY_ADD, CATEGORY_REMOVE, CATEGORY_UPDATE } from './reducers';
import { EXPENSE_CREATE, EXPENSE_UPDATE, EXPENSE_DELETE } from './reducers';

import shortid from 'shortid';
import { postCategory } from '../../services/api';

const categories = [
  { name: 'Perfect Vacation ', budget: 5000, id: shortid.generate(), timestamp: new Date() },
  { name: 'Perfect Home', budget: 100000, id: shortid.generate(), timestamp: new Date() }
];

categories[0].expenses = [
  { 
    id: shortid.generate(), 
    categoryID: categories[0].id, 
    timestamp: new Date(), 
    name: 'Clothes',
    price: 500
  }];

categories[1].expenses = [
  {
    id: shortid.generate(), 
    categoryID: categories[1].id, 
    timestamp: new Date(), 
    name: 'Furniture',
    price: 2000
  }
];

export const loadCategories = () => ({ 
  type: CATEGORIES_LOAD,
  payload: categories
});

export const addCategory = category => dispatch => {
  postCategory(category)
    .then(
      saved => {
        dispatch({
          type:CATEGORY_ADD,
          payload: JSON.parse(saved.text)
        });
      },
      err => {
        console.log('POST ERROR:', err);
        // dispatch({
        //   type: ERROR,
        //   payload: err
        // });
      });
};

export const removeCategory = category => ({
  type: CATEGORY_REMOVE,
  payload: category
});

export const updateCategory = category => ({
  type: CATEGORY_UPDATE,
  payload: category
});


