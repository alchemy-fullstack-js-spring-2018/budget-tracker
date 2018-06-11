import { CATEGORIES_LOAD, CATEGORY_ADD, CATEGORY_REMOVE, CATEGORY_UPDATE } from './reducers';
import { EXPENSE_CREATE, EXPENSE_UPDATE, EXPENSE_DELETE } from './reducers';

import shortid from 'shortid';

const categories = [
  { name: 'Perfect Vacation ', budget: 5000, id: shortid.generate(), timestamp: new Date() },
  { name: 'Perfect Home', budget: 100000, id: shortid.generate(), timestamp: new Date() }
];

categories[0].expenses = [
  { 
    id: shortid.generate(), 
    categoryID: categories[0].id, 
    timestamp: new Date(), 
    name: 'Clothes',
    price: 500
  }];

categories[1].expenses = [
  {
    id: shortid.generate(), 
    categoryID: categories[1].id, 
    timestamp: new Date(), 
    name: 'Furniture',
    price: 2000
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

export const removeCategory = category => ({
  type: CATEGORY_REMOVE,
  payload: category
});

export const updateCategory = category => ({
  type: CATEGORY_UPDATE,
  payload: category
});


