import { CATEGORIES_LOAD, CATEGORY_ADD, CATEGORY_REMOVE, CATEGORY_UPDATE } from './reducers';
import shortid from 'shortid';

const categories = [
  { name: 'Perfect Vacation ', budget: 5000, id: shortid.generate(), timestamp: new Date() },
  { name: 'Perfect Home', budget: 100000, id: shortid.generate(), timestamp: new Date() }
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

export const updateCategory = category => ({
  type: CATEGORY_UPDATE,
  payload: category
});

