import { CATEGORIES_LOAD, CATEGORY_ADD, CATEGORY_UPDATE, CATEGORY_REMOVE, categories } from './reducers';
import shortid from 'shortid';

const budget = () => [
  addLineItem({ 
    date: new Date('12/04/2018'),
    description: 'paycheck',
    amount: 500.34,
    categoryId: 1
  }).payload,
  addLineItem({
    date: new Date('12/30/2018'),
    description: 'rent',
    amount: -435.89,
    categoryId: 1
  }).payload,
  addLineItem({
    date: new Date('01/01/2019'),
    description: 'bonus',
    amount: 1000.00,
    categoryId: 1
  }).payload
];

export const loadCategories = () => ({
  type: CATEGORIES_LOAD,
  payload: categories()
});

export const addCategory = category => {
  category.id = shortid.generate();
  // category.date = category.date ? category.date : new Date();

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