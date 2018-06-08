import { CATEGORIES_LOAD, CATEGORY_ADD, CATEGORY_REMOVE } from './reducers';
import { loadCategories, addCategory, removeCategory } from './actions';

it('creates a load action', () => {
  const { type, payload } = loadCategories();
  expect(type).toBe(CATEGORIES_LOAD);
  expect(payload.length).toBe(2); //expects games array to be two in length.
});

it(' create an add action', () => {
  const category = { name: 'meat', budget: 50 };

  const { type, payload } = addCategory(category);
  expect(type).toBe(CATEGORY_ADD);
  const { name, budget, id, timestamp } = payload;
  expect(name).toBe(category.name);
  expect(budget).toBe(category.budget);
  expect(id).toBeTruthy();
  expect(timestamp).toBeTruthy();
});

it('create a remove action', () => {
  const category = { name: 'meat', budget: 50 };

  const action = removeCategory(category);
  expect(action).toEqual({
    type: CATEGORY_REMOVE,
    payload: category
  });
});