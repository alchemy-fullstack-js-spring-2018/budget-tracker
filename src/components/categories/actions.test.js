import { CATEGORIES_LOAD, CATEGORY_ADD, CATEGORY_REMOVE, CATEGORY_UPDATE } from './reducers';
import { loadCategories, addCategory, removeCategory, updateCategory } from './actions';

it('Creates a Load Action', () => {
  const { type, payload } = loadCategories();
  expect(type).toBe(CATEGORIES_LOAD);
  expect(payload.length).toBe(2);
});

it('Create and Add Action', () => {
  const category = { name: 'Perfect Car', budget: 10000 };

  const { type, payload } = addCategory(category);
  expect(type).toBe(CATEGORY_ADD);
  const { name, budget, id, timestamp } = payload;
  expect(name).toBe(category.name);
  expect(budget).toBe(category.budget);
  expect(id).toBeTruthy();
  expect(timestamp).toBeTruthy();
});

it('Create a Remove Action', () => {
  const category = { name: 'Perfect Golf Swing', budget: 500 };

  const action = removeCategory(category);
  expect(action).toEqual({
    type: CATEGORY_REMOVE,
    payload: category
  });
});

it('Creat an Update Action', () => {
  const category = { name: 'Perfect Dog', budget: 100 };
  const action = updateCategory(category);
  expect(action).toEqual({
    type: CATEGORY_UPDATE,
    payload: category
  });
});