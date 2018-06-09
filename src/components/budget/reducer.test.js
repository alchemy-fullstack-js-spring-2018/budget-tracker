import {
  categories,
  lineItemByCategory,
  getLineItemByCategory,
  CATEGORIES_LOAD,
  CATEGORY_ADD,
  CATEGORY_UPDATE,
  CATEGORY_REMOVE,
  LINEITEM_ADD } from './reducers';


describe('categories reducer', () => {

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

