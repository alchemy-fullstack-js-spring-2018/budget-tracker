import { CATEGORIES_LOAD, CATEGORY_ADD, CATEGORY_REMOVE } from './reducers';
import { loadCategories, addCategory, removeCategory } from './actions';

it('creates a load action', () => {
  const { type, payload } = loadCategories();
  expect(type).toBe(CATEGORIES_LOAD);
  expect(payload.length).toBe(3);
});

