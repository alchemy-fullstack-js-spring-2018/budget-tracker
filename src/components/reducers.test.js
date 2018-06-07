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

  const groceries = {
    name: 'groceries',
    budget: '300'
  };
  
  const gas = {
    name: 'gas',
    budget: '30'
  };

  it('loads categories', () => {
    const state = categories([], { type: CATEGORIES_LOAD, payload: [groceries, gas] });
    expect(state).toEqual([groceries, gas]);
  });

  it('adds a category', () => {
    const prevState = [groceries];
    const state = categories(prevState, { type: CATEGORY_ADD, payload: gas });
    expect(state).toEqual([groceries, gas]);
    expect(state).not.toBe(prevState);
  });
});