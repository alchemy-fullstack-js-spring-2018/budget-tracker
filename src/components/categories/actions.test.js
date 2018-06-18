import { CATEGORIES_LOAD, CATEGORY_ADD, CATEGORY_REMOVE, CATEGORY_UPDATE, EXPENSE_ADD } from './reducers';
import { loadCategories, addCategory, removeCategory, updateCategory, addExpense } from './actions';

describe.skip('actions tests', () => {

  it('creates a load action', () => {
    const { type, payload } = loadCategories();
    expect(type).toBe(CATEGORIES_LOAD);
    expect(payload.length).toBe(2); //expects games array to be two in length.
  });

  it(' create an add action', () => {
    const category = { name: 'meat', budget: 50 };

    const { type, payload } = addCategory(category);
    expect(type).toBe(CATEGORY_ADD);

    const { name, budget, id, timestamp } = payload;
    expect(name).toBe(category.name);
    expect(budget).toBe(category.budget);
    expect(id).toBeTruthy();
    expect(timestamp).toBeTruthy();
  });

  it('create a remove action', () => {
    const category = { name: 'meat', budget: 50 };

    const action = removeCategory(category);
    expect(action).toEqual({
      type: CATEGORY_REMOVE,
      payload: category
    });
  });

  it(' creates an update action', () => {
    const category = { name: 'meat', budget: 50 };
    const action = updateCategory(category);
    expect(action).toEqual({ 
      type: CATEGORY_UPDATE,
      payload: category
    });
  });

  it('create an add expense', () => {
    const parentId = 123;
    const data = { text: 'heres some text' };

    const { type, payload } = addExpense(parentId, data);
    expect(type).toBe(EXPENSE_ADD);

    const { categoryId, expense } = payload;
    expect(categoryId).toBe(parentId);

    const { text, id, timestamp } = expense;
    expect(text).toBe(data.text);
    expect(id).toBeTruthy();
    expect(timestamp).toBeTruthy();


  });

  it('create an add expense', () => {
    const parentId = 123;
    const data = { text: '20% of budget' };

    const { type, payload } = addExpense(parentId, data);
    expect(type).toBe(EXPENSE_ADD);

    const { categoryId, expense } = payload;
    expect(categoryId).toBe(parentId);

    const { text, id, timestamp } = expense;
    expect(text).toBe(data.text);
    expect(id).toBeTruthy();
    expect(timestamp).toBeTruthy();

  });
});