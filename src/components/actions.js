import shortid from 'shortid';
import {
  CATEGORIES_LOAD,
  CATEGORY_ADD,
  CATEGORY_UPDATE,
  CATEGORY_REMOVE } from './reducers';

const categories = [
  { id: 1, name: 'groceries', budget: 300 },
  { id: 2, name: 'movies', budget: 20 },
  { id: 3, name: 'gas', budget: 30 }
];

export const loadCategories = () => ({
  type: CATEGORIES_LOAD,
  payload: categories
});

export const addCategory = category => {
  category.id = shortid.generate();
  category.timestamp = new Date();
  category.budget = parseInt(category.budget);

  return {
    type: CATEGORY_ADD,
    payload: category
  };
};

export const updateCategory = category => {
  category.budget = parseInt(category.budget);
  
  return {
    type: CATEGORY_UPDATE,
    payload: category
  };
};

export const removeCategory = category => ({
  type: CATEGORY_REMOVE,
  payload: category
});