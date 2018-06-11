import { categories, CATEGORIES_LOAD, CATEGORY_ADD, CATEGORY_REMOVE, CATEGORY_UPDATE, expensesByCategory, EXPENSE_ADD, getExpensesByCategory } from './reducers';
it('has a default value of empty array', () => {
  const state = categories(undefined, {});
  expect(state).toEqual([]);
});

const category1 = {
  id: 1,
  name: 'Meat',
  timestamp: '11/15/1990',
  budget: 50
};

const category2 = {
  id: 2,
  name: 'Produce',
  timestamp: '6/10/2018',
  budget: 60
};

it('loads category', () => {
  const state = categories([], { type:CATEGORIES_LOAD, payload: [category1, category2] });
  expect(state).toEqual([category1, category2]);
});

it('add a category', () => {
  const prevState = [];
  const state = categories(prevState, { type: CATEGORY_ADD, payload: category2 });
  expect(state).toEqual([category2]);
  expect(state).not.toBe(prevState);
});

it('removes a category', () => {
  const state = categories([category1, category2], {  type: CATEGORY_REMOVE, payload: category2  });
  expect(state).toEqual([category1]);
});

it('updates a category', () => {
  const state = categories([{ id: 1, name: 'Meat', timestamp: '11/15/1990', budget: 50 }],
    {
      type: CATEGORY_UPDATE,
      payload: { id: 1, name: 'Meat', timestamp: '11/15/1990', budget: 30 }
    }
  );
  expect(state).toEqual([{ id: 1, name: 'Meat', timestamp: '11/15/1990', budget: 30 }]);

});

describe(' expensesByCategory reducer', () => {

  it('has a default value of empty object', () => {
    const state = expensesByCategory(undefined, {});
    expect(state).toEqual({});
  });

  it('adds an entry on category add', () => {
    const state = expensesByCategory({}, { type: CATEGORY_ADD, payload: { id: 123 } });
    expect(state).toEqual({ 123: [] });
  });

  it('removes an expense on Category remove', () => {
    const state = expensesByCategory({ 123: [], 456: [] }, { type: CATEGORY_REMOVE, payload: { id: 123 } });
    expect(state).toEqual({ 456: [] });
  });

  it('creates expenses for all loaded categories', () => {
    const state = expensesByCategory({}, { 
      type: CATEGORIES_LOAD, 
      payload: [{ 
        id: 123, 
        expenses: [
          { text: 'one' }, 
          { text: 'two' }
        ] 
      }, {
        id: 456,
        expenses: []
      }] 
    });
    expect(state).toEqual({ 
      123: [{ text: 'one' }, { text: 'two' }],
      456: []
    });
  });

  it('adds a expense to a category', () => {
    const state = expensesByCategory({ 123: [{ text: 'one' }] }, {
      type: EXPENSE_ADD,
      payload: {
        categoryId: 123,
        expense: { text: 'two' }
      }
    });

    expect(state).toEqual({ 123: [{ text: 'one' }, { text: 'two' }] });
  });

  // it('updates an expense on a category', () => {

  // });

});

describe('selectors', () => {

  it('gets expenses for a category id', () => {
    const expenses = [{ text: 'one' }];
    const state = {
      expensesByCategory: {
        123: expenses
      }
    };
    const selected = getExpensesByCategory(123, state);
    expect(selected).toBe(expenses);
  });
});