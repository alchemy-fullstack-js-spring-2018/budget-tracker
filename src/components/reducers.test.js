import {
  categories,
  CATEGORIES_LOAD,
  CATEGORY_ADD,
  CATEGORY_UPDATE,
  CATEGORY_REMOVE } from './reducers';

describe('categories', () => {
  it('has a default value of an empty array', () => {
    const state = categories(undefined, {});
    expect(state).toEqual([]);
  });
});