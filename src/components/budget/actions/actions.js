import { CATEGORIES_LOAD, CATEGORY_ADD, CATEGORY_UPDATE, CATEGORY_REMOVE } from './../reducers/reducers';
import { EXPENSE_ADD, EXPENSE_UPDATE, EXPENSE_REMOVE } from './../reducers/reducers';
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

export const addExpense = expense => {
  expense.id = shortid.generate();
  expense.timestamp = new Date();

  return {
    type: EXPENSE_ADD,
    payload: expense
  };
};

export const updateExpense = expense => ({
  type: EXPENSE_UPDATE,
  payload: expense
});

export const removeExpense = expense => ({
  type: EXPENSE_REMOVE,
  payload: expense
});