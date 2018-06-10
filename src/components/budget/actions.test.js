import { CATEGORIES_LOAD, CATEGORY_ADD, CATEGORY_UPDATE, CATEGORY_REMOVE, LINEITEM_ADD } from './reducers';
import { loadCategories, addCategory, updateCategory, removeCategory, addLineItem } from './actions';

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

it('create an add line item', () => {
  const parentId = 123;
  const data = { description: 'June Rent', amount: 700 };

  const { type, payload } = addLineItem(parentId, data);
  expect(type).toBe(LINEITEM_ADD);

  const { categoryId, lineItem } = payload;
  expect(categoryId).toBe(parentId);

  const { description, amount, id, date } = lineItem;
  expect(description).toBe(data.description);
  expect(amount).toBe(data.amount);
  expect(id).toBeTruthy();
  expect(date).toBeTruthy();
});