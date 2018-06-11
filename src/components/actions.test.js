import {
  CATEGORIES_LOAD,
  CATEGORY_ADD,
  CATEGORY_UPDATE,
  CATEGORY_REMOVE, 
  EXPENSE_CREATE, 
  EXPENSE_UPDATE,
  EXPENSE_DELETE } from './reducers';

import {
  loadCategories,
  addCategory,
  updateCategory,
  removeCategory,
  addExpense,
  updateExpense,
  removeExpense } from './actions';

describe('action creator', () => {
  it('creates a load category action', () => {
    const { type, payload } = loadCategories();
    expect(type).toBe(CATEGORIES_LOAD);
    expect(payload).toHaveLength(3);
  });

  let food = { id: 1, name: 'food', budget: 500 };  

  it('creates an add category action, which adds a timestamp and id', () => {
    const { type, payload } = addCategory(food);
    expect(type).toBe(CATEGORY_ADD);
    const { name, budget, id, timestamp } = payload;
    expect(name).toBe(food.name);
    expect(budget).toBe(food.budget);
    expect(id).toBeTruthy();
    expect(timestamp).toBeTruthy();
  });

  it('creates an update category action', () => {
    const { type, payload } = updateCategory(food);
    expect(type).toBe(CATEGORY_UPDATE);
    expect(payload).toEqual(food);
  });

  it('creates a remove category action', () => {
    const { type, payload } = removeCategory(food);
    expect(type).toBe(CATEGORY_REMOVE);
    expect(payload).toEqual(food);
  });

  it('creates an expense add action, which adds a timestamp and id', () => {
    const parentId = '123';
    const expenseData = { name: 'pizza', price: 4 };

    const { type, payload } = addExpense(parentId, expenseData);
    expect(type).toBe(EXPENSE_CREATE);

    const { categoryId, expense } = payload;
    expect(categoryId).toBe(parentId);

    const { name, price, id, timestamp } = expense;
    expect(name).toBe(expenseData.name);
    expect(price).toBe(expenseData.price);
    expect(id).toBeTruthy();
    expect(timestamp).toBeTruthy();
  });

  it('updates an expense', () => {
    const parentId = '123';
    const expenseData = { name: 'pizza', price: 5, id: '1' };

    const { type, payload } = updateExpense(parentId, expenseData);
    expect(type).toBe(EXPENSE_UPDATE);

    const { categoryId, expense } = payload;
    expect(categoryId).toBe(parentId);

    const { id } = expense;
    expect(id).toBe(expenseData.id);
  });

  it('deletes an expense', () => {
    const parentId = '123';
    const expenseData = { name: 'pizza', price: 5, id: '1' };

    const { type, payload } = removeExpense(parentId, expenseData);
    expect(type).toBe(EXPENSE_DELETE);

    const { categoryId, expense } = payload;
    expect(categoryId).toBe(parentId);

    const { id } = expense;
    expect(id).toBe(expenseData.id);
  });
});