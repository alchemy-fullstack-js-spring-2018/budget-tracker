import { CATEGORIES_LOAD, CATEGORY_ADD, CATEGORY_UPDATE, CATEGORY_REMOVE,
  EXPENSE_ADD, EXPENSE_REMOVE, EXPENSE_UPDATE } from './../reducers/reducers';
import { loadCategories, addCategory, updateCategory, removeCategory,
  addExpense, updateExpense, removeExpense } from './actions';

it('creates a load action', () => {
  const { type, payload } = loadCategories();
  expect(type).toBe(CATEGORIES_LOAD);
  expect(payload.length).toBe(2);
});

it('create an add action', () => {
  const category = { name: 'groceries', budget: 200 };

  const { type, payload } = addCategory(category);
  expect(type).toBe(CATEGORY_ADD);
  const { name, budget, id, timestamp } = payload;
  expect(name).toBe(category.name);
  expect(budget).toBe(category.budget);
  expect(id).toBeTruthy();
  expect(timestamp).toBeTruthy();
});

it('create an update action', () => {
  const groceries = { name: 'groceries', budget: 250 };
  const action = updateCategory(groceries);
  expect(action).toEqual({
    type: CATEGORY_UPDATE,
    payload: groceries
  });
});

it('create and remove action', () => {
  const category = { name: 'groceries', budget: 200 };

  const action = removeCategory(category);
  expect(action).toEqual({
    type: CATEGORY_REMOVE,
    payload: category
  });
});

it('creates an expense add action, which adds a timestamp and id', () => {
  const parentId = '1';
  const expenseData = { name: 'Water', cost: 50 };

  const { type, payload } = addExpense(parentId, expenseData);
  expect(type).toBe(EXPENSE_ADD);

  const { categoryId, expense } = payload;
  expect(categoryId).toBe(parentId);

  const { name, cost, id, timestamp } = expense;
  expect(name).toBe(expenseData.name);
  expect(cost).toBe(expenseData.cost);
  expect(id).toBeTruthy();
  expect(timestamp).toBeTruthy();
});

it('updates an expense', () => {
  const parentId = '1';
  const expenseData = { name: 'Water', cost: 50, id: '2' };

  const { type, payload } = updateExpense(parentId, expenseData);
  expect(type).toBe(EXPENSE_UPDATE);

  const { categoryId, expense } = payload;
  expect(categoryId).toBe(parentId);

  const { id } = expense;
  expect(id).toBe(expenseData.id);
});

it('deletes an expense', () => {
  const parentId = '1';
  const expenseData = { name: 'Water', price: 50, id: '2' };

  const { type, payload } = removeExpense(parentId, expenseData);
  expect(type).toBe(EXPENSE_REMOVE);

  const { categoryId, expense } = payload;
  expect(categoryId).toBe(parentId);

  const { id } = expense;
  expect(id).toBe(expenseData.id);
});
