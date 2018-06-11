import {
  categories, 
  expensesByCategory,
  getExpensesByCategory,
  CATEGORIES_LOAD,
  CATEGORY_ADD,
  CATEGORY_REMOVE,
  CATEGORY_UPDATE,
  EXPENSE_ADD
} from './reducers';

describe ('categories reducer', () => {

  it('has empty array as default', () => {
    const state = categories(undefined, {});
    expect(state).toEqual([]);
  });
  
  const budget1 = {
    id: 1,
    timstamp: '10/10/2018',
    name: 'budget1',
    budget: 3000,
  };
  
  const budget2 = {
    id: 2,
    timstamp: '10/10/2018',
    name: 'budget2',
    budget: 4000,
  };
  
  it('loads a category', () => {
    const state = categories([], { type: CATEGORIES_LOAD, payload: [budget1, budget2] });
    expect(state).toEqual([budget1, budget2]);
  });
  
  it('adds a category', () => {
    const prevState = [];
    const state = categories(prevState, { type: CATEGORY_ADD, payload: budget2 });
    expect(state).toEqual([budget2]);
    expect(state).not.toBe(prevState);
  });

  it('updates a category', () => {
    const state = categories(
      [{ id: 1, name: 'budget1', budget: 7000 }],
      {
        type: CATEGORY_UPDATE,
        payload: { id: 1, name: 'budget1', budget: 7000 }
      }
    );
    expect(state).toEqual([{ id: 1, name: 'budget1', budget: 7000 }]);
  });
  
  it('removes a category', () => {
    const state = categories([budget1, budget2], { type: CATEGORY_REMOVE, payload: budget2 });
    expect(state).toEqual([budget1]);
  });
});

describe('expensesByCategory reducer', () => {

  it('has a default value of empty object', () => {
    const state = expensesByCategory(undefined, {});
    expect(state).toEqual({});
  });

  it('adds an entry on category add', () => {
    const state = expensesByCategory({}, { type: CATEGORY_ADD, payload: { id: 123 } });
    expect(state).toEqual({ 123: [] });
  });

  it('removes an entry on category remove', () => {
    const state = expensesByCategory({ 123: [], 456: [] }, { type: CATEGORY_REMOVE, payload: { id: 123 } });
    expect(state).toEqual({ 456: [] });
  });

  it('creates expenses for all loaded categories', () => {
    const state = expensesByCategory({}, { 
      type: CATEGORIES_LOAD, 
      payload: [{ 
        id: 123, 
        expenses: [
          { text: '30.00' }, 
          { text: '20.00' }
        ] 
      }, {
        id: 456,
        expenses: []
      }] 
    });
    expect(state).toEqual({ 
      123: [{ text: '30.00' }, { text: '20.00' }],
      456: []
    });
  });

  it('adds a expense to a category', () => {
    const state = expensesByCategory({ 123: [{ text: '30.00' }] }, {
      type: EXPENSE_ADD,
      payload: {
        categoryId: 123,
        expense: { text: '20.00' }
      }
    });

    expect(state).toEqual({ 123: [{ text: '30.00' }, { text: '20.00' }] });
  });

});

describe('selectors', () => {

  it('gets expenses for a category id', () => {
    const expenses = [{ text: '30.00' }];
    const state = {
      expensesByCategory: {
        123: expenses
      }
    };
    const selected = getExpensesByCategory(123, state);
    expect(selected).toBe(expenses);
  });
});