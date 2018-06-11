import { CATEGORIES_LOAD, CATEGORY_ADD, CATEGORY_UPDATE, CATEGORY_REMOVE } from './reducers';
import shortid from 'shortid';

const categories = [
  { name: 'food', color: 'red' },
  { name: 'rent', color: 'orange' },
  { name: 'fun', color: 'yellow' }
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

export const updateCategory = category => ({
  type: CATEGORY_UPDATE,
  payload: category
});

export const removeCategory = category => ({
  type: CATEGORY_REMOVE,
  payload: category
});