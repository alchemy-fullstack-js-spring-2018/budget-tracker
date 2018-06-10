import {
  categories,
  CATEGORIES_LOAD,
  CATEGORY_ADD,
  CATEGORY_REMOVE,
  CATEGORY_UPDATE,
  expensesByCategory,
  EXPENSE_ADD,
  EXPENSE_UPDATE,
  EXPENSE_REMOVE,
} from './reducers';

describe('Category Reducers', () => {
  it('has a default value of empty array', () => {
    const state = categories(undefined, {});
    expect(state).toEqual([]);
  });
  
  const utilities = {
    id: 1,
    timestamp: new Date(),
    name: 'Monthly Utilities',
    budget: 200,
  };
  
  const groceries = {
    id: 2,
    timestamp: new Date(),
    name: 'Groceries + Produce',
    budget: 350,
  };
  
  it('loads categories', () => {
    const state = categories([], { type: CATEGORIES_LOAD, payload: [utilities, groceries] });
    expect(state).toEqual([utilities, groceries]);
  });
  
  it('add a category', () => {
    const prevState = [];
    const state = categories(prevState, { type: CATEGORY_ADD, payload: groceries });
    expect(state).toEqual([groceries]);
    expect(state).not.toBe(prevState);
  });
  
  it('updates a category', () => {
    const state = categories(
      [utilities], 
      { 
        type: CATEGORY_UPDATE, 
        payload: { ...utilities, budget: 220 }
      }
    );
    expect(state).toEqual([{ ...utilities, budget: 220 }]);
  });
  
  it('removes a category', () => {
    const state = categories([utilities, groceries], { type: CATEGORY_REMOVE, payload: utilities });
    expect(state).toEqual([groceries]);
  });

});

describe('Expense reducers', () => {

  const water = {
    id: 1,
    categoryId: 3,
    timestamp: new Date(),
    name: 'Water',
    amount: 50,
  };

  const power = {
    id: 2,
    categoryId: 5,
    timestamp: new Date(),
    name: 'Power',
    amount: 150,
  };

  it('Has a default of an empty object', () => {
    const state = expensesByCategory(undefined, {});
    expect(state).toEqual({});
  });

  it('Works with Category Add', () => {
    const state = expensesByCategory({}, { type: CATEGORY_ADD, payload: { id: 5 } });
    expect(state).toEqual({ 5: [] });
  });

  it('Loads expenses', () => {
    const state = expensesByCategory({}, {
      type: CATEGORIES_LOAD,
      payload: [{
        id: 5,
        expenses: [water]
      },
      {
        id: 3,
        expenses: [power]
      }]
    });
    expect(state).toEqual({ 5: [water], 3: [power] });
  });

  it('Removes an entry on category remove', () => {
    const state = expensesByCategory({ 5: [], 3: [] }, { type: CATEGORY_REMOVE, payload: { id: 5 } });
    expect(state).toEqual({ 3: [] });
  });

  it('Adds an expense to a category', () => {
    const state = expensesByCategory({ 5: [water] }, {
      type: EXPENSE_ADD,
      payload: {
        categoryId: 5,
        expense: power
      }
    });
    expect(state).toEqual({ 5: [water, power] });
  });

  it('Updates an expense', () => {
    const state = expensesByCategory(
      [{ 5: [water] },
        {
          type: EXPENSE_UPDATE,
          payload: { 5: [{ ...water, amount: 60 }]  }
        }]
    );
    expect(state).toEqual([{ 5: [{ ...water, amount: 60 }] }]);
  });

  it('Removes an expense', () => {
    const state = expensesByCategory(
      [{ 5: [water] },
        {
          type: EXPENSE_UPDATE,
          payload: { ...water, amount: 60  }
        }]
    );
    expect(state).toEqual([{ 5: [{ ...water, amount: 60 }] }]);
  });

  it('removes an expense', () => {
    const state = expensesByCategory([water, power], { type: EXPENSE_REMOVE, payload: water });
    expect(state).toEqual([power]);
  });

});