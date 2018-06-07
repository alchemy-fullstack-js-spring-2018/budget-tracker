import {
  CATEGORIES_LOAD,
  CATEGORY_ADD,
  CATEGORY_UPDATE,
  CATEGORY_REMOVE } from './reducers';

import {
  loadCategories,
  addCategory } from './actions';

describe('categories', () => {
  it('creates a load action', () => {
    const { type, payload } = loadCategories();
    expect(type).toBe(CATEGORIES_LOAD);
    expect(payload).toHaveLength(3);
  });

  it('creates an add action, which adds a timestamp and id', () => {
    const category = { name: 'gas', budget: 30 };

    const { type, payload } = addCategory(category);
    expect(type).toBe(CATEGORY_ADD);
    const { name, budget, id, timestamp } = payload;
    expect(name).toBe(category.name);
    expect(budget).toBe(category.budget);
    expect(id).toBeTruthy();
    expect(timestamp).toBeTruthy();
  });
});