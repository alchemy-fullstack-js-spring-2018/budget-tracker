import { CATEGORIES_LOAD, CATEGORIES_ADD, CATEGORIES_REMOVE } from './reducer';
import shortid from 'shortid';

const categories = [
  { name: 'Phone Bill', budget: 85 },
  { name: 'Car Insurance', budget: 114 },
  { name: 'Student Loan', budget: 95 }
];

export const loadCategories = () => ({
  type: CATEGORIES_LOAD,
  payload: categories
});

export const addCategories = categories => {
  categories.id = shortid.generate();
  categories.timestamp = new Date();

  return {
    type: CATEGORIES_ADD,
    payload: categories
  };
};

export const removeCategories = categories => ({
  type: CATEGORIES_REMOVE,
  payload: categories
});