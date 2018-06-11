import { CATEGORIES_LOAD, CATEGORY_ADD, CATEGORY_REMOVE, CATEGORY_UPDATE } from './reducers';
import { EXPENSE_CREATE, EXPENSE_UPDATE, EXPENSE_DELETE } from './reducers';

import shortid from 'shortid';
import { postCategory, getCategories, deleteCategory, putCategory, postExpense } from '../../services/api';

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

export const loadCategories = () => dispatch => { 
  getCategories()
    .then(
      categories => {
        dispatch({
          type: CATEGORIES_LOAD,
          payload: JSON.parse(categories.text)
        });
      },
      err => {
        console.log('GET ERROR:', err);
      });
};

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

export const removeCategory = category => dispatch => {
  deleteCategory(category)
    .then(
      deleted => {
        if(JSON.parse(deleted.text).deleted === false) return null;
        dispatch({
          type: CATEGORY_REMOVE,
          payload: category
        });
      },
      err => {
        console.log('DELETE ERROR:', err);
      });
};

export const updateCategory = category => dispatch => {
  putCategory(category)
    .then(
      updated => {
        dispatch({
          type: CATEGORY_UPDATE,
          payload: JSON.parse(updated.text)
        });
      },
      err => {
        console.log('UPDATE ERROR:', err);
      });
};

export const addExpense = expense => dispatch => {
  console.log('DA EXPENSE', expense);
  postExpense(expense)
    .then(
      saved => {
        dispatch({
          type: EXPENSE_CREATE,
          payload: JSON.parse(saved.text)
        });
      },
      err => {
        console.log('POST ERROR:', err);
      });
};


