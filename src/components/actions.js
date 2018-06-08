import shortid from 'shortid';
import {
  CATEGORIES_LOAD,
  CATEGORY_ADD,
  CATEGORY_UPDATE,
  CATEGORY_REMOVE } from './reducers';

const categories = [
  { id: 1, name: 'food', budget: 500 },
  { id: 2, name: 'shelter', budget: 1500 },
  { id: 3, name: 'transportation', budget: 50 }
];

export const loadCategories = () => ({
  type: CATEGORIES_LOAD,
  payload: categories
});

export const addCategory = category => {
  category.id = shortid.generate();
  category.timestamp = new Date();

  return {
    type: CATEGORY_ADD,
    payload: category
  };
};

export const updateCategory = category => {
  
  return {
    type: CATEGORY_UPDATE,
    payload: category
  };
};

export const removeCategory = category => ({
  type: CATEGORY_REMOVE,
  payload: category
});