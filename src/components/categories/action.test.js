import { CATEGORIES_LOAD, CATEGORY_ADD, CATEGORY_REMOVE } from './reducers';
import { loadCategories, addCategory, removeCategory } from './actions';

it('creates a load action', () => {
  const { type, payload } = loadCategories();
  expect(type).toBe(CATEGORIES_LOAD);
  expect(payload.length).toBe(3);
});

it('creates add action', () => {
  const category = { name: 'budget4', budget: 6000 };

  const { type, payload } = addCategory(category);
  expect(type).toBe(CATEGORY_ADD);

  const { name, budget, id, timestamp } = payload;
  expect(name).toBe(category.name);
  expect(budget).toBe(category.budget);
  expect(id).toBeTruthy();
  expect(timestamp).toBeTruthy();
});