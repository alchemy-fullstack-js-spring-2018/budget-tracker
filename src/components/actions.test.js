import {
  CATEGORIES_LOAD,
  CATEGORY_ADD,
  CATEGORY_UPDATE,
  CATEGORY_REMOVE } from './reducers';

import {
  loadCategories,
  addCategory,
  updateCategory } from './actions';

describe('categories', () => {
  it('creates a load action', () => {
    const { type, payload } = loadCategories();
    expect(type).toBe(CATEGORIES_LOAD);
    expect(payload).toHaveLength(3);
  });

  it('creates an add action, which adds a timestamp and id', () => {
    const gas = { name: 'gas', budget: 30 };

    const { type, payload } = addCategory(gas);
    expect(type).toBe(CATEGORY_ADD);
    const { name, budget, id, timestamp } = payload;
    expect(name).toBe(gas.name);
    expect(budget).toBe(gas.budget);
    expect(id).toBeTruthy();
    expect(timestamp).toBeTruthy();
  });

  it('creates an update action', () => {
    const gas = { id: 1, name: 'gas', budget: 30 };
    const { type, payload } = updateCategory(gas);
    expect(type).toBe(CATEGORY_UPDATE);
    expect(payload).toEqual(gas);
  });
});