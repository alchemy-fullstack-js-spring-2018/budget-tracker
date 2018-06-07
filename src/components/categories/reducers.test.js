import {
  categories, 
  CATEGORIES_LOAD,
  CATEGORY_ADD,
  CATEGORY_REMOVE
} from './reducers';

it('has empty array as default', () => {
  const state = categories(undefined, {});
  expect(state).toEqual([]);
});

const budget1 = {
  id: 1,
  timstamp: '10/10/2018',
  name: 'budget1',
  budget: 3000,
};

const budget2 = {
  id: 2,
  timstamp: '10/10/2018',
  name: 'budget2',
  budget: 4000,
};

it('loads a category', () => {
  const state = categories([], { type: CATEGORIES_LOAD, payload: [budget1, budget2] });
  expect(state).toEqual([budget1, budget2]);
});

it('adds a category', () => {
  const prevState = [];
  const state = categories(prevState, { type: CATEGORY_ADD, payload: budget2 });
  expect(state).toEqual([budget2]);
  expect(state).not.toBe(prevState);
});

it('removes a category', () => {
  const state = categories([budget1, budget2], { type: CATEGORY_REMOVE, payload: budget2 });
  expect(state).toEqual([budget1]);
});
