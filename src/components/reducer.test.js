import {
  categories,
  expensesByItem,
  getExpenseByCategory,
  CATEGORIES_LOAD,
  CATEGORIES_ADD,
  CATEGORIES_UPDATE,
  CATEGORIES_REMOVE,
  EXPENSE_ADD, } from './reducer';

it('has a default value of empty array', () => {
  const state = categories(undefined, {});
  expect(state).toEqual([]);
});

const budget1 = {
  name: 'Rent',
  budget: '500'
};

const budget2 = {
  name: 'Eating out',
  budget: '50'
};

it('loads categories', () => {
  const state = categories([], { type: CATEGORIES_LOAD, payload: [budget1, budget2] });
  expect(state).toEqual([budget1, budget2]);
});

it('adds new categories', () => {
  const prevState = [];
  const state = categories(prevState, { type: CATEGORIES_ADD, payload: budget1 });
  expect(state).toEqual([budget1]);
  expect(state).not.toBe(prevState);
});

it('updates a category', () => {
  const state = categories(
    [{ id: 1, name: 'Rent', budget: '50' }], 
    { 
      type: CATEGORIES_UPDATE, 
      payload: { id: 1, name: 'Rent', color: '51' }
    }
  );
  expect(state).toEqual([{ id: 1, name: 'Rent', color: '51' }]);
});

it('removes a category', () => {
  const state = categories([budget1, budget2], { type: CATEGORIES_REMOVE, payload: budget2 });
  expect(state).toEqual([budget1]);
});

describe('expensesByItem reducer', () => {

  it('has a default value of empty object', () => {
    const state = expensesByItem(undefined, {});
    expect(state).toEqual({});
  });

  it('adds an entry on category add', () => {
    const state = expensesByItem({}, { type: CATEGORIES_ADD, payload: { id: 123 } });
    expect(state).toEqual({ 123: [] });
  });

  it('removes an entry on category remove', () => {
    const state = expensesByItem({ 123: [], 456: [] }, { type: CATEGORIES_REMOVE, payload: { id: 123 } });
    expect(state).toEqual({ 456: [] });
  });

  // it('adds an expense to a category', () => {
  //   const state = expensesByItem({ 123: [{ name: 'one', expense: 'two' }] }, {
  //     type: EXPENSE_ADD,
  //     payload: {
  //       categoryId: 123,
  //       expenses: { name: 'one', expense: 'two' }
  //     }
  //   });

  //   expect(state).toEqual({ 123: [{ name: 'one', expense: 'two' }] });
  // });
});

describe('selectors', () => {

  it('gets expense for category id', () => {
    const expenses = [{ name: 'one', expense: 'two' }];
    const state = {
      expensesByItem: {
        123: expenses
      }
    };
    const selected = getExpenseByCategory(123, state);
    expect(selected).toBe(expenses);
  });
});