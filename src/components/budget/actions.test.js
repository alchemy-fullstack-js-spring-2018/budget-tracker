import { CATEGORIES_LOAD, CATEGORY_ADD, CATEGORY_UPDATE, CATEGORY_REMOVE } from './reducers';
import { loadCategories, addCategory, updateCategory, removeCategory } from './actions';

it('creates a load action', () => {
  const { type, payload } = loadCategories();
  expect(type).toBe(CATEGORIES_LOAD);
  expect(payload.length).toBe(3);
});

it('creates a add action', () => {
  const rent = { 
    name: 'rent',
    budget: 500.00,
    lineItemId: [{ id: 1, description: 'rent', amount: 500.00 }]
  };

  const { type, payload } = addCategory(rent);
  expect(type).toBe(CATEGORY_ADD);
  const { name, budget, lineItemId, id } = payload;
  expect(name).toBe(rent.name);
  expect(budget).toBe(rent.budget);
  expect(lineItemId).toEqual(rent.lineItemId);
  expect(id).toBeTruthy();
});

it('creates an update action', () => {
  const rent = { 
    name: 'rent',
    budget: 600.00,
    lineItemId: [{ id: 1, description: 'rent', amount: 500.00 }]
  };

  const action = updateCategory(rent);
  expect(action).toEqual({
    type: CATEGORY_UPDATE,
    payload: rent
  });
});

it('creates a remove action', () => {
  const rent = { 
    name: 'rent',
    budget: 500.00,
    lineItemId: [{ id: 1, description: 'rent', amount: 500.00 }]
  };

  const action = removeCategory(rent);
  expect(action).toEqual({
    type: CATEGORY_REMOVE,
    payload: rent
  });
});