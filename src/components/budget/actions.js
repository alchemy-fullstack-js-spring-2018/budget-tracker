import { CATEGORIES_LOAD, CATEGORY_ADD, CATEGORY_UPDATE, CATEGORY_REMOVE, LINEITEM_ADD } from './reducers';
import { getCategories, postCategory, putCategory, deleteCategory, postLineItem } from '../../services/api';
import { ERROR, LOADING_START, LOADING_END } from '../app/reducers';
import shortid from 'shortid';

// const initCategories = () => [
//   addCategory({ 
//     name: 'rent',
//     budget: 500.00,
//     lineItems: [
//       { description: 'June Rent', amount: 500.00, date: new Date(1 / 1 / 2018) }
//     ]
//   }).payload,
//   addCategory({
//     name: 'food',
//     budget: 200.00,
//     lineItems: [
//       { description: 'June Rent', amount: 500.00, date: new Date(1 / 1 / 2018) }
//     ]
//   }).payload,
//   addCategory({
//     name: 'utilities',
//     budget: 300.00,
//     lineItems: []
//   }).payload
// ];

export const loadCategories = () => {
  return dispatch => {
    dispatch({ type: LOADING_START });

    getCategories()
      .then(
        categories => {
          dispatch({
            type: CATEGORIES_LOAD,
            payload: categories
          });
        },
        err => {
          dispatch({
            type: ERROR,
            payload: err
          });
        })
      .then(() => {
        dispatch({ type: LOADING_END });
      });
  };
};

export const addCategory = category => dispatch => {

  postCategory(category)
    .then(
      saved => {
        dispatch({
          type: CATEGORY_ADD,
          payload: saved
        });
      },
      err => {
        dispatch({
          type: ERROR,
          payload: err
        });
      });
};

export const updateCategory = category => dispatch => {
  putCategory(category)
    .then(updated => {
      dispatch({
        type: CATEGORY_UPDATE,
        payload: updated
      });
    });
};

export const removeCategory = category => dispatch => {
  deleteCategory(category.id)
    .then(() => {
      dispatch({
        type: CATEGORY_REMOVE,
        payload: category
      });
    });
};

export const addLineItem = (categoryId, lineItem) => {
  lineItem.id = shortid.generate();
  lineItem.date = lineItem.date ? lineItem.date : new Date();
  console.log('ID', categoryId);
  console.log('lineItem', lineItem);

  return {
    type: LINEITEM_ADD,
    payload: {
      categoryId,
      lineItem
    }
  };
};