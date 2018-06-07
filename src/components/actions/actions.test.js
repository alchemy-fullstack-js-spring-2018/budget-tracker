import { CATEGORIES_LOAD, CATEGORY_ADD, CATEGORY_UPDATE, CATEGORY_REMOVE } from './../reducers/reducers';
import { loadCategories, addCategory, updateCategory, removeCategory } from './actions';

it('creates a load action', () => {
  const { type, payload } = loadCategories();
  expect(type).toBe(CATEGORIES_LOAD);
  expect(payload.length).toBe(2);
});

it('create an add action', () => {
  const category = { name: 'groceries', budget: 200 };

  const { type, payload } = addCategory(category);
  expect(type).toBe(CATEGORY_ADD);
  const { name, budget, id, timestamp } = payload;
  expect(name).toBe(category.name);
  expect(budget).toBe(category.budget);
  expect(id).toBeTruthy();
  expect(timestamp).toBeTruthy();
});

it('create an update action', () => {
  const groceries = { name: 'groceries', budget: 250 };
  const action = updateCategory(groceries);
  expect(action).toEqual({
    type: CATEGORY_UPDATE,
    payload: groceries
  });
});

it('create and remove action', () => {
  const category = { name: 'groceries', budget: 200 };

  const action = removeCategory(category);
  expect(action).toEqual({
    type: CATEGORY_REMOVE,
    payload: category
  });
});