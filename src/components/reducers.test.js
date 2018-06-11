import {
  categories,
  expenses,
  CATEGORIES_LOAD,
  CATEGORY_ADD,
  CATEGORY_UPDATE,
  CATEGORY_REMOVE, 
  EXPENSE_CREATE } from './reducers';

describe('categories reducer', () => {
  it('has a default value of an empty array', () => {
    const state = categories(undefined, {});
    expect(state).toEqual([]);
  });

  const food = {
    name: 'food',
    budget: 500
  };
  
  const shelter = {
    name: 'shelter',
    budget: 1500
  };

  it('loads categories', () => {
    const state = categories([], { type: CATEGORIES_LOAD, payload: [food, shelter] });
    expect(state).toEqual([food, shelter]);
  });

  it('adds a category', () => {
    const prevState = [food];
    const state = categories(prevState, { type: CATEGORY_ADD, payload: shelter });
    expect(state).toEqual([food, shelter]);
    expect(state).not.toBe(prevState);
  });

  it('updates a category', () => {
    const state = categories(
      [{ id: '1', name: 'shelter', budget: 1500 }],
      {
        type: CATEGORY_UPDATE,
        payload: { id: '1', name: 'shelter', budget: 2000 }
      }
    );
    expect(state).toEqual([{ id: '1', name: 'shelter', budget: 2000 }]);
  });

  it('removes a category', () => {
    const state = categories([food, shelter], { type: CATEGORY_REMOVE, payload: shelter });
    expect(state).toEqual([food]);
  });
});

describe('expenses reducer', () => {
  it('has a default state of an empty object', () => {
    const state = expenses(undefined, {});
    expect(state).toEqual({});
  });

  it('adds an expense array for each category loaded', () => {
    const state = expenses({}, {
      type: CATEGORIES_LOAD,
      payload: [{
        id: '123',
        expenses: [
          { name: 'pizza', price: 4 },
          { name: 'salad', price: 8 }
        ]
      }, {
        id: '456',
        expenses: []
      }]
    });
    expect(state).toEqual({
      '123': [
        { name: 'pizza', price: 4 },
        { name: 'salad', price: 8 }
      ],
      '456': []
    });
  });

  it('adds an expense property when a category is added', () => {
    const state = expenses({}, { type: CATEGORY_ADD, payload: { id: '123' } });
    expect(state).toEqual({ '123':[] });
  });

  it('removes the expense property when a category is removed', () => {
    const state = expenses({ '123': [], '456': [] }, { type: CATEGORY_REMOVE, payload: { id: '456' } });
    expect(state).toEqual({ '123': [] });
  });

  it('adds an expense to a category', () => {
    const state = expenses({ '123': [] }, {
      type: EXPENSE_CREATE,
      payload: { categoryId: '123', name: 'pizza', price: 4 }
    });
    expect(state).toEqual({ '123': [{ name: 'pizza', price: 4 }] });
  });
});