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

describe('lineItemsByCategory reducer', () => {

  it('has a default value of empty object', () => {
    const state = lineItemByCategory(undefined, {});
    expect(state).toEqual({});
  });
  
  it('add a line item to a category', () => {
    const state = lineItemByCategory({}, { type: CATEGORY_ADD, payload: { id: 123 } });
    expect(state).toEqual({ 123: [] });
  });

  it('delete a line item to a category', () => {
    const state = lineItemByCategory({ 123: [], 1717: [] }, { type: CATEGORY_REMOVE, payload: { id: 123 } });
    expect(state).toEqual({ 1717: [] });
  });

  it('creates a line item for all loaded categories', () => {
    const state = lineItemByCategory({}, { 
      type: CATEGORIES_LOAD,
      payload: [{
        id: 123,
        lineItems: [
          { description: 'rent', amount: 600 },
          { description: 'good', amount: 200 }
        ]
      }, {
        id: 1717,
        lineItems: []
      }] 
    });
    expect(state).toEqual({ 
      123: [
        { description: 'rent', amount: 600 },
        { description: 'good', amount: 200 }
      ],
      1717: []
    });
  });

});