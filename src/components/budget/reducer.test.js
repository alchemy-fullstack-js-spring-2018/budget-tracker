import {
  categories,
  expenseByCategory,
  getExpenseByCategory,
  CATEGORIES_LOAD,
  CATEGORY_ADD,
  CATEGORY_UPDATE,
  CATEGORY_REMOVE,
  EXPENSE_ADD } from './reducers';


describe.only('categories reducer', () => {

  it('categories has a default value of empty array', () => {
    const state = categories(undefined, {});
    expect(state).toEqual([]);
  });
  
  const utilities = {
    name: 'Utilities',
    budget: 300.00
  };
  
  const food = {
    name: 'food',
    budget: 200.00
  };
  
  it('loads categories', () => {
    const state = categories([], { type: CATEGORIES_LOAD, payload: [utilities, food] });
    expect(state).toEqual([utilities, food]);
  });
  
  it('add a category', () => {
    const prevState = [];
    const state = categories(prevState, { type: CATEGORY_ADD, payload: utilities });
    expect(state).toEqual([utilities]);
    expect(state).not.toBe(prevState);
  });
  
  it('updates a category', () => {
    const newFood = {
      id: 1,
      name: 'Food',
      budget: 250.00
    };
  
    const state = categories([{ id: 1, ...food }], { type: CATEGORY_UPDATE, payload: newFood });
    expect(state).toEqual([newFood]);
  });
  
  it('removes a category', () => {
    const state = categories([utilities, food], { type: CATEGORY_REMOVE, payload: food });
    expect(state).toEqual([utilities]);
  });

});

describe.only('expensesByCategory reducer', () => {

  it('has a default value of empty object', () => {
    const state = expenseByCategory(undefined, {});
    expect(state).toEqual({});
  });
  
  it('add a line item to a category', () => {
    const state = expenseByCategory({}, { type: CATEGORY_ADD, payload: { id: 123 } });
    expect(state).toEqual({ 123: [] });
  });

  it('delete a line item to a category', () => {
    const state = expenseByCategory({ 123: [], 1717: [] }, { type: CATEGORY_REMOVE, payload: { id: 123 } });
    expect(state).toEqual({ 1717: [] });
  });

  it('creates a line item for all loaded categories', () => {
    const state = expenseByCategory({}, { 
      type: CATEGORIES_LOAD,
      payload: [{
        id: 123,
        expenses: [
          { description: 'rent', amount: 600 },
          { description: 'food', amount: 200 }
        ]
      }, {
        id: 1717,
        expenses: []
      }] 
    });
    expect(state).toEqual({ 
      123: [
        { description: 'rent', amount: 600 },
        { description: 'food', amount: 200 }
      ],
      1717: []
    });
  });

  it('adds a line item to a category', () => {
    const state = expenseByCategory({ 
      123: [
        { description: 'rent', amount: 600 },
        { description: 'food', amount: 200 }
      ] },
    { 
      type: EXPENSE_ADD,
      payload: {
        categoryId: 123,
        expense: { description: 'utilities', amount: 300 }
      }
    });
    expect(state).toEqual({ 
      123: [
        { description: 'rent', amount: 600 },
        { description: 'food', amount: 200 },
        { description: 'utilities', amount: 300 }
      ]
    });
  });

});

describe.only('selectors', () => {

  it('gets a line item for a category id', () => {
    const expenses = [
      { description: 'rent', amount: 600 },
      { description: 'food', amount: 200 }
    ];
    const state = {
      expenseByCategory: {
        123: expenses
      }
    };

    const selected = getExpenseByCategory(123, state);
    expect(selected).toBe(expenses);
  });

});