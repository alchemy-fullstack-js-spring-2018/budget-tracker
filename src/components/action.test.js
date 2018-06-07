import { CATEGORIES_LOAD, CATEGORIES_ADD, CATEGORIES_REMOVE } from './reducer';
import { loadCategories, addCategories, removeCategories } from './action';

it('makes a load action', () => {
  const { type, payload } = loadCategories();
  expect(type).toBe(CATEGORIES_LOAD);
  expect(payload.length).toBe(3);
});

it('makes an add action', () => {
  const category = { name: 'butts', budget: '1,000,000' };

  const { type, payload } = addCategories(category);
  expect(type).toBe(CATEGORIES_ADD);
  const { name, budget, id, timestamp } = payload;
  expect(name).toBe(category.name);
  expect(budget).toBe(category.budget);
  expect(id).toBeTruthy();
  expect(timestamp).toBeTruthy();
});

it('makes a remove action', () => {
  const category = { name: 'stanky dancing', budget: '6' };

  const action = removeCategories(category);
  expect(action).toEqual({
    type: CATEGORIES_REMOVE,
    payload: category
  });
});