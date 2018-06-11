import { CATEGORIES_LOAD, CATEGORY_ADD, CATEGORY_REMOVE } from './reducers';
import shortid from 'shortid';

const categories = [
  { name: 'food', budget: 320 },
  { name: 'rent', budget: 1000 },
  { name: 'fun', budget: 500 }
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

export const removeCategory = category => ({
  type: CATEGORY_REMOVE,
  payload: category
});