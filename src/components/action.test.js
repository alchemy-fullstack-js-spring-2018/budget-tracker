import { 
  CATEGORIES_LOAD,
  CATEGORIES_ADD,
  CATEGORIES_UPDATE, 
  CATEGORIES_REMOVE,
  EXPENSE_ADD } from './reducer';
import { 
  loadCategories,
  addCategories,
  updateCategories,
  removeCategories,
  addExpense } from './action';

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

it('create an update action', () => {
  const art = { name: 'meep morp', color: '25' };
  const action = updateCategories(art);
  expect(action).toEqual({
    type: CATEGORIES_UPDATE,
    payload: art
  });
});

it('makes a remove action', () => {
  const category = { name: 'stanky dancing', budget: '6' };

  const action = removeCategories(category);
  expect(action).toEqual({
    type: CATEGORIES_REMOVE,
    payload: category
  });
});

it('create an expense item', () => {
  const someId = 123;
  const data = { name: 'yummy', expense: '235' };

  const { type, payload } = addExpense(someId, data);
  expect(type).toBe(EXPENSE_ADD);

  const { categoryId, expense } = payload;
  expect(categoryId).toBe(someId);
  
  const { name, id, timestamp } = expense;
  expect(name).toBe(data.name);
  expect(id).toBeTruthy();
  expect(timestamp).toBeTruthy();
});