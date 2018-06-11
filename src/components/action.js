import { 
  CATEGORIES_LOAD,
  CATEGORIES_ADD,
  CATEGORIES_UPDATE,
  CATEGORIES_REMOVE,
  EXPENSE_ADD } from './reducer';
import shortid from 'shortid';


const categories = () => [
  addCategories({
    name: 'Rent',
    budget: '1000',
    expenses: [
      { categoryId: '342',
        name: 'Utilities',
        expense: '50' }
    ]
  }).payload,
  addCategories({ name: 'Car', budget: '500', expenses: [] }).payload,
  addCategories({ name: 'Dog', budget: '100', expenses: [] }).payload
];

export const loadCategories = () => ({
  type: CATEGORIES_LOAD,
  payload: categories()
});

export const addCategories = categories => {
  categories.id = shortid.generate();
  categories.timestamp = new Date();

  return {
    type: CATEGORIES_ADD,
    payload: categories
  };
};

export const updateCategories = categories => ({
  type: CATEGORIES_UPDATE,
  payload: categories
});

export const removeCategories = categories => ({
  type: CATEGORIES_REMOVE,
  payload: categories
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