import { CATEGORIES_LOAD, CATEGORY_ADD, CATEGORY_UPDATE, CATEGORY_REMOVE, EXPENSE_ADD } from './reducers';
import { loadCategories, addCategory, updateCategory, removeCategory, addExpense } from './actions';

it.skip('creates a load action', () => {
  const { type, payload } = loadCategories();
  expect(type).toBe(CATEGORIES_LOAD);
  expect(payload.length).toBe(0);
});

it.skip('creates a add action', () => {
  const rent = { 
    name: 'rent',
    budget: 500.00,
    expenseId: [{ id: 1, description: 'rent', amount: 500.00 }]
  };

  const { type, payload } = addCategory(rent);
  expect(type).toBe(CATEGORY_ADD);
  const { name, budget, expenseId, id } = payload;
  expect(name).toBe(rent.name);
  expect(budget).toBe(rent.budget);
  expect(expenseId).toEqual(rent.expenseId);
  expect(id).toBeTruthy();
});

it.skip('creates an update action', () => {
  const rent = { 
    name: 'rent',
    budget: 600.00,
    expenseId: [{ id: 1, description: 'rent', amount: 500.00 }]
  };

  const action = updateCategory(rent);
  expect(action).toEqual({
    type: CATEGORY_UPDATE,
    payload: rent
  });
});

it.skip('creates a remove action', () => {
  const rent = { 
    name: 'rent',
    budget: 500.00,
    expenseId: [{ id: 1, description: 'rent', amount: 500.00 }]
  };

  const action = removeCategory(rent);
  expect(action).toEqual({
    type: CATEGORY_REMOVE,
    payload: rent
  });
});

it.skip('create an add line item', () => {
  const parentId = 123;
  const data = { description: 'June Rent', amount: 700 };

  const { type, payload } = addExpense(parentId, data);
  expect(type).toBe(EXPENSE_ADD);

  const { categoryId, expense } = payload;
  expect(categoryId).toBe(parentId);

  const { description, amount, id, date } = expense;
  expect(description).toBe(data.description);
  expect(amount).toBe(data.amount);
  expect(id).toBeTruthy();
  expect(date).toBeTruthy();
});