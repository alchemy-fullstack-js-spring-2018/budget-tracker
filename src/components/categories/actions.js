import { CATEGORIES_LOAD, CATEGORY_ADD, CATEGORY_UPDATE, CATEGORY_REMOVE, EXPENSE_ADD } from './reducers';
import { ERROR, LOADING_START, LOADING_END } from '../app/reducers';
import { getCategories, postCategory, putCategory, deleteCategory, postExpense } from '../../services/api';

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

export const addExpense = (categoryId, expense) => dispatch => {
  postExpense(categoryId, expense)
    .then(saved => {
      dispatch({
        type: EXPENSE_ADD,
        payload: {
          categoryId,
          expense: saved
        }
      });
    });

};