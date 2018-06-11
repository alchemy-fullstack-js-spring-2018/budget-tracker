import shortid from 'shortid';
import {
  CATEGORIES_LOAD,
  CATEGORY_ADD,
  CATEGORY_UPDATE,
  CATEGORY_REMOVE,
  EXPENSE_CREATE,
  EXPENSE_UPDATE,
  EXPENSE_DELETE } from './reducers';

import {
  getCategories,
  postCategory,
  putCategory } from '../services/api';

export const loadCategories = () => {
  return dispatch => {
    getCategories()
      .then(
        categories => {
          dispatch({
            type: CATEGORIES_LOAD,
            payload: categories
          });
        }
      );
  };
};

export const addCategory = category => {
  return dispatch => {
    postCategory(category)
      .then(
        category => {
          dispatch({
            type: CATEGORY_ADD,
            payload: category
          });
        }
      );
  };
};

export const updateCategory = category => {
  return dispatch => {
    putCategory(category)
      .then(
        category => {
          dispatch({
            type: CATEGORY_UPDATE,
            payload: category
          });
        }
      );
  };
};

export const removeCategory = category => ({
  type: CATEGORY_REMOVE,
  payload: category
});

export const addExpense = (categoryId, expense) => {
  expense.id = shortid.generate();
  expense.timestamp = new Date();

  return {
    type: EXPENSE_CREATE,
    payload: { categoryId, expense }
  };
};

export const updateExpense = (categoryId, expense) => {
  
  return {
    type: EXPENSE_UPDATE,
    payload: { categoryId, expense }
  };
};

export const removeExpense = (categoryId, expense) => {
  
  return {
    type: EXPENSE_DELETE,
    payload: { categoryId, expense }
  };
};