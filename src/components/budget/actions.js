import { CATEGORIES_LOAD, CATEGORY_ADD, CATEGORY_UPDATE, CATEGORY_REMOVE, LINEITEM_ADD } from './reducers';
import shortid from 'shortid';

const categories = () => [
  addCategory({ 
    name: 'rent',
    budget: 500.00,
    lineItems: [
      { description: 'June Rent', amount: 500.00, date: new Date(1 / 1 / 2018) }
    ]
  }).payload,
  addCategory({
    name: 'food',
    budget: 200.00,
    lineItems: [
      { description: 'June Rent', amount: 500.00, date: new Date(1 / 1 / 2018) }
    ]
  }).payload,
  addCategory({
    name: 'utilities',
    budget: 300.00,
    lineItems: []
  }).payload
];

export const loadCategories = () => ({
  type: CATEGORIES_LOAD,
  payload: categories()
});

export const addCategory = category => {
  category.id = shortid.generate();

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

export const addLineItem = (categoryId, lineItem) => {
  lineItem.id = shortid.generate();
  lineItem.date = lineItem.date ? lineItem.date : new Date();
  console.log('ID', categoryId);
  console.log('lineItem', lineItem);

  return {
    type: LINEITEM_ADD,
    payload: {
      categoryId,
      lineItem
    }
  };
};