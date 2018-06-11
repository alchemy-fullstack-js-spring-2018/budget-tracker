import {
  categories,
  CATEGORIES_LOAD,
  CATEGORY_ADD,
  CATEGORY_REMOVE
} from './reducers';

it('has a default value of empty array', () => {
  const state = categories(undefined, {});
  expect(state).toEqual([]);
});

const rent = {
  name: 'rent',
  budget: 1000
};

const fun = {
  name: 'fun',
  budget: 500
};

it('loads categories', () => {
  const state = categories([], { type: CATEGORIES_LOAD, payload: [rent, fun] });
  expect(state).toEqual([rent, fun]);
});

it('adds a category', () => {
  const prevState = [];
  const state = categories(prevState, { type: CATEGORY_ADD, payload: rent });
  expect(state).toEqual([rent]);
  expect(state).not.toBe(prevState);
});

it('removes a category', () => {
  const state = categories([rent, fun], { type: CATEGORY_REMOVE, payload: fun });
  expect(state).toEqual([rent]);
});