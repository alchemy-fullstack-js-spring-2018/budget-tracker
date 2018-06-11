import { CATEGORIES_LOAD, CATEGORY_ADD, CATEGORY_UPDATE, CATEGORY_REMOVE } from './reducers';
import { loadCategories, addCategory, updateCategory, removeCategory } from './actions';

describe.skip('actions test', () => {

  it('creates a load action', () => {
    const { type, payload } = loadCategories();
    expect(type).toBe(CATEGORIES_LOAD);
    expect(payload.length).toBe(3);
  });

  it('creates add action', () => {
    const category = { name: 'budget4', budget: 6000 };

    const { type, payload } = addCategory(category);
    expect(type).toBe(CATEGORY_ADD);

    const { name, budget, id, timestamp } = payload;
    expect(name).toBe(category.name);
    expect(budget).toBe(category.budget);
    expect(id).toBeTruthy();
    expect(timestamp).toBeTruthy();
  });

  it('creates an update action', () => {
    const category = { name: 'budget4', budget: 6000 };
    const action = updateCategory(category);
    expect(action).toEqual({
      type: CATEGORY_UPDATE,
      payload: category
    });
  });

  it('creates a remove action', () => {
    const category = { name: 'budget4', budget: 6000 };

    const action = removeCategory(category);
    expect(action).toEqual({
      type: CATEGORY_REMOVE,
      payload: category
    });
  });
});