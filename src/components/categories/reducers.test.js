import { categories, CATEGORIES_LOAD, CATEGORY_ADD, CATEGORY_REMOVE } from './reducers';

it('has a default value of empty array', () => {
  const state = categories(undefined, {});
  expect(state).toEqual([]);
});

const category1 = {
  name: 'Meat',
  budget: 50
};

const category2 = {
  name: 'Produce',
  budget: 60
};

it('loads category', () => {
  const state = categories([], { type:CATEGORIES_LOAD, payload: [category1, category2] });
  expect(state).toEqual([category1, category2]);
});

it('add a category', () => {
  const prevState = [];
  const state = categories(prevState, { type: CATEGORY_ADD, payload: category2 });
  expect(state).toEqual([category2]);
  expect(state).not.toBe(prevState);
});

it('removes a category', () => {
  const state = categories([category1, category2], {  type: CATEGORY_REMOVE, payload: category2  });
  expect(state).toEqual([category1]);
});