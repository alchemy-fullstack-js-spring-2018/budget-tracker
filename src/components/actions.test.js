import {
  CATEGORIES_LOAD,
  CATEGORY_ADD,
  CATEGORY_UPDATE,
  CATEGORY_REMOVE } from './reducers';

import {
  loadCategories,
  addCategory,
  updateCategory,
  removeCategory } from './actions';

describe('categories', () => {
  it('creates a load action', () => {
    const { type, payload } = loadCategories();
    expect(type).toBe(CATEGORIES_LOAD);
    expect(payload).toHaveLength(3);
  });

  let food = { id: 1, name: 'food', budget: 500 };  

  it('creates an add action, which adds a timestamp and id', () => {
    const { type, payload } = addCategory(food);
    expect(type).toBe(CATEGORY_ADD);
    const { name, budget, id, timestamp } = payload;
    expect(name).toBe(food.name);
    expect(budget).toBe(food.budget);
    expect(id).toBeTruthy();
    expect(timestamp).toBeTruthy();
  });

  it('creates an update action', () => {
    const { type, payload } = updateCategory(food);
    expect(type).toBe(CATEGORY_UPDATE);
    expect(payload).toEqual(food);
  });

  it('creates a remove action', () => {
    const { type, payload } = removeCategory(food);
    expect(type).toBe(CATEGORY_REMOVE);
    expect(payload).toEqual(food);
  });
});