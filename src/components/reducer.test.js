import {
  categories,
  CATEGORIES_LOAD,
  CATEGORIES_ADD,
  CATEGORIES_REMOVE } from './reducer';

it('has a default value of empty array', () => {
  const state = categories(undefined, {});
  expect(state).toEqual([]);
});

const budget1 = {
  name: 'Rent',
  budget: '500'
};

const budget2 = {
  name: 'Eating out',
  budget: '50'
};

it('loads categories', () => {
  const state = categories([], { type: CATEGORIES_LOAD, payload: [budget1, budget2] });
  expect(state).toEqual([budget1, budget2]);
});

it('adds new categories', () => {
  const prevState = [];
  const state = categories(prevState, { type: CATEGORIES_ADD, payload: budget1 });
  expect(state).toEqual([budget1]);
  expect(state).not.toBe(prevState);
});

it('removes a category', () => {
  const state = categories([budget1, budget2], { type: CATEGORIES_REMOVE, payload: budget2 });
  expect(state).toEqual([budget1]);
});