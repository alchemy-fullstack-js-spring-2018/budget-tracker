import {
  CATEGORIES_LOAD,
  CATEGORY_ADD,
  CATEGORY_REMOVE,
  EXPENSE_ADD } from './reducers';
import shortid from 'shortid';

const categories = () => [
  addCategory({
    name: 'food',
    budget: 320,
    expenses: [
      { id: 123, name: 'burger', price: 10 }
    ]
  }).payload,
  addCategory({ name: 'rent', budget: 1000 }).payload,
  addCategory({
    name: 'fun',
    budget: 500,
    expenses: [
      { id: 321, name: 'games n stuff', price: 100 }
    ]
  }).payload
];

export const loadCategories = () => ({
  type: CATEGORIES_LOAD,
  payload: categories()
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

export const addExpense = (categoryId, expense) => {
  expense.id = shortid.generate();
  expense.timestamp = new Date();

  return {
    type: EXPENSE_ADD,
    payload: {
      categoryId,
      expense
    }
  };
};