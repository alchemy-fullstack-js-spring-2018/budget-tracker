import {
  categories,
  CATEGORIES_LOAD,
  CATEGORY_ADD,
  CATEGORY_UPDATE,
  CATEGORY_REMOVE } from './reducers';
  // budget,
  // BUDGET_LOAD,
  // BUDGET_ADD,
  // BUDGET_UPDATE,
  // BUDGET_REMOVE 


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

// it('budget has a default value of empty array', () => {
//   const state = budget(undefined, {});
//   expect(state).toEqual([]);
// });

// const paycheck = {
//   date: new Date('12/04/2018'),
//   description: 'paycheck',
//   amount: 500.34
// };

// const rent = {
//   date: new Date('06/30/2018'),
//   description: 'rent',
//   amount: -435.89
// };

// it('loads a budget', () => {
//   const state = budget([], { type: BUDGET_LOAD, payload: [paycheck, rent] });
//   expect(state).toEqual([paycheck, rent]);
// });

// it('add a lineItem', () => {
//   const prevState = [];
//   const state = budget(prevState, { type: BUDGET_ADD, payload: paycheck });
//   expect(state).toEqual([paycheck]);
//   expect(state).not.toBe(prevState);
// });

// it('updates a lineItem', () => {
//   const newRent = {
//     id: 1,
//     date: new Date('01/01/2020'),
//     description: 'MORE RENT!',
//     amount: -1000.01
//   };

//   const state = budget([{ id: 1, ...rent }], { type: BUDGET_UPDATE, payload: newRent });
//   expect(state).toEqual([newRent]);
// });

// it('removes a lineItem', () => {
//   const state = budget([paycheck, rent], { type: BUDGET_REMOVE, payload: rent });
//   expect(state).toEqual([paycheck]);
// });