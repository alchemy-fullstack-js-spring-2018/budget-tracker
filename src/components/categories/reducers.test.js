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

