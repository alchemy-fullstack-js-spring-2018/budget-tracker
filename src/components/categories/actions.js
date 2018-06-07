import { CATEGORIES_LOAD, CATEGORY_ADD, CATEGORY_REMOVE } from './reducers';
import shortid from 'shortid';

const categories = [
  { name: 'Perfect Vacation ', budget: 5000 },
  { name: 'Perfect Home', budget: 100000 }
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

