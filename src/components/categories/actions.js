import { CATEGORIES_LOAD, CATEGORY_ADD, CATEGORY_REMOVE } from './reducers';
import shortid from 'shortid';

const categories = [
  { name: 'budget1', budget: 3000 },
  { name: 'budget2', budget: 4000 },
  { name: 'budget3', budget: 5000 }
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