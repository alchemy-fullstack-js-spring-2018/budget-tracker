import { 
  categories, 
  CATEGORIES_LOAD, 
  CATEGORY_ADD, 
  CATEGORY_REMOVE,
  CATEGORY_UPDATE } from './reducers';
  
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
  
it('updates a fruit', () => {
  const state = categories(
    [{ id: 1, timestamp: new Date(), name: 'Monthly Utilities', budget: 200 }], 
    { 
      type: CATEGORY_UPDATE, 
      payload: { id: 1, timestamp: new Date(), name: 'Monthly Utilities', budget: 220 }
    }
  );
  expect(state).toEqual([{ id: 1, timestamp: new Date(), name: 'Monthly Utilities', budget: 220 }]);
});
  
it('removes a fruit', () => {
  const state = categories([utilities, groceries], { type: CATEGORY_REMOVE, payload: utilities });
  expect(state).toEqual([groceries]);
});