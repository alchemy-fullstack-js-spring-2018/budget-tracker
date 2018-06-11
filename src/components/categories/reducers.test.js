import {
  categories,
  CATEGORIES_LOAD,
  CATEGORY_ADD,
  CATEGORY_REMOVE,
  CATEGORY_UPDATE,
  expensesByCategory,
  EXPENSES_LOAD,
  EXPENSE_CREATE,
  EXPENSE_UPDATE,
  EXPENSE_DELETE,
} from './reducers';

describe('Category Reducers', () => {

  it('Has a Default Value of Empty Array', () => {
    const state = categories(undefined, {});
    expect(state).toEqual([]);
  });
  
  const dreamTrip = {
    id: 1,
    timestamp: new Date(),
    name: 'Trip to Copenhagen',
    budget: 5000
  };
  
  const dreamHouse = {
    id: 2,
    timestamp: new Date(),
    name: 'Big Apartment',
    budget: 100000
  };
  
  it('Loads Categories', () => {
    const state = categories([], { type: CATEGORIES_LOAD, payload: [dreamTrip, dreamHouse] });
    expect(state).toEqual([dreamTrip, dreamHouse]);
  });
  
  it('Add a Category', () => {
    const prevState = [];
    const state = categories(prevState, { type: CATEGORY_ADD, payload: dreamHouse });
    expect(state).toEqual([dreamHouse]);
    expect(state).not.toBe(prevState);
  });
  
  it('Removes a Category', () => {
    const state = categories([dreamHouse, dreamTrip], { type: CATEGORY_REMOVE, payload: dreamHouse });
    expect(state).toEqual([dreamTrip]);
  });
  
  it('Updates a Category', () => {
    const state = categories(
      [{ id: 1, name: 'Perfect Job', budget: 500 }],
      {
        type: CATEGORY_UPDATE,
        payload: { id: 1, name: 'Perfect Job', budget: 1000 }
      }
    );
    expect(state).toEqual([{ id: 1, name: 'Perfect Job', budget: 1000 }]);
  });

});

describe('Expense Reducers', () => {

  const expense1 = {
    id: 1,
    categoryId: 123,
    timestamp: new Date(),
    name: 'Clothes',
    price: 200
  };

  const expense2 = {
    id: 123,
    categoryId: 2,
    timestamp: new Date(),
    name: 'Furniture',
    price: 2000
  };

  // const category1 = {
  //   id: 1,
  //   timestamp: new Date(),
  //   name: 'Trip to Copenhagen',
  //   budget: 5000,
  //   expenses: [{ id: 2 }]
  // };

  it('Has a Default Value of Empty Object', () => {
    const state = expensesByCategory(undefined, {});
    expect(state).toEqual({});
  });

  it('Adds an Entry for Category Add', () => {
    const state = expensesByCategory({}, { type: CATEGORY_ADD, payload: { id: 123 } });
    expect(state).toEqual({ 123: [] });
  });

  it('Loads Expenses', () => {
    const state = expensesByCategory({}, {
      type: CATEGORIES_LOAD,
      payload: [{
        id: 123,
        expenses: [expense1]
      },
      {
        id: 456,
        expenses: [expense2]
      }]
    });
    expect(state).toEqual({ 123: [expense1], 456: [expense2] });
  });

  it('Removes an entry on Category Remove', () => {
    const state = expensesByCategory({ 123: [], 456: [] }, { type: CATEGORY_REMOVE, payload: { id: 123 } });
    expect(state).toEqual({ 456: [] });
  });

  it('Adds an Expense to a Category', () => {
    const state = expensesByCategory({ 123: [expense1] }, {
      type: EXPENSE_CREATE,
      payload: {
        categoryId: 123,
        expense: expense2
      }
    });
    expect(state).toEqual({ 123: [expense1, expense2] });

  });

  it('Updates an Expense', () => {
    const state = expensesByCategory(
      { 123: [{ id: 456, name: 'Expense', price: 1000 }] },
      { type: EXPENSE_UPDATE, payload: { 
        categoryId: 123, expense: { id: 456, name: 'Expense', price: 2000 } } });
    expect(state).toEqual({ 123: [{ id: 456, name: 'Expense', price: 2000 }] });
  });


  it('Deletes an Expense', () => {
    const state = expensesByCategory(
      { 123: [expense1, expense2] }, 
      { type: EXPENSE_DELETE, payload: { categoryId: 123, expense: expense2 } });
    expect(state).toEqual({ 123: [expense1] });
  });

});

