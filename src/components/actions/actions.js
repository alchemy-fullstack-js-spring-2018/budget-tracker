import { CATEGORIES_LOAD, CATEGORY_ADD, CATEGORY_UPDATE, CATEGORY_REMOVE } from './../reducers/reducers';
import shortid from 'shortid';

const categories = [
  {
    id: 1,
    timestamp: new Date(),
    name: 'Monthly Utilities',
    budget: 200,
  },
  {
    id: 2,
    timestamp: new Date(),
    name: 'Groceries + Produce',
    budget: 350,
  } 
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