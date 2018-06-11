import { CATEGORIES_LOAD, CATEGORY_ADD, CATEGORY_REMOVE, CATEGORY_UPDATE } from './reducers';
import { loadCategories, addCategory, removeCategory, updateCategory } from './actions';

import { EXPENSE_CREATE, EXPENSE_UPDATE, EXPENSE_DELETE } from './reducers';
import { loadExpenses } from './actions';

describe('Categories Actions', () => {

  it('Creates a Load Action', () => {
    const { type, payload } = loadCategories();
    expect(type).toBe(CATEGORIES_LOAD);
    expect(payload.length).toBe(2);
  });
  
  it('Create and Add Action', () => {
    const category = { name: 'Perfect Car', budget: 10000 };
  
    const { type, payload } = addCategory(category);
    expect(type).toBe(CATEGORY_ADD);
    const { name, budget, id, timestamp } = payload;
    expect(name).toBe(category.name);
    expect(budget).toBe(category.budget);
    expect(id).toBeTruthy();
    expect(timestamp).toBeTruthy();
  });
  
  it('Create a Remove Action', () => {
    const category = { name: 'Perfect Golf Swing', budget: 500 };
  
    const action = removeCategory(category);
    expect(action).toEqual({
      type: CATEGORY_REMOVE,
      payload: category
    });
  });
  
  it('Creat an Update Action', () => {
    const category = { name: 'Perfect Dog', budget: 100 };
    const action = updateCategory(category);
    expect(action).toEqual({
      type: CATEGORY_UPDATE,
      payload: category
    });
  });

});

describe('Expenses Actions', () => {
  
  it('Create an Add Action', () => {
    const parentId = 123;
    const data = { name: 'Expense', price: 50 };

    const { type, payload } = addExpense(parentId, data);
    expect(type).toBe(EXPENSE_CREATE);

    const { categoryId, expense } = payload;
    expect(categoryId).toBe(parentId);

    const { id, timestamp, name, price } = expense;
    expect(id).toBeTruthy();
    expect(expense.categoryId).toBe(parentId);
    expect(timestamp).toBeTruthy();
    expect(name).toBe(data.name);
    expect(price).toBe(data.price);
  });

});
