import {
  budget,
  BUDGET_LOAD,
  BUDGET_ADD,
  BUDGET_UPDATE,
  BUDGET_REMOVE} from './reducers';

it('has a default value of empty array', () => {
  const state = budget(undefined, {});
  expect(state).toEqual([]);
});

const paycheck = {
  date: new Date('12/04/2018'),
  description: 'paycheck',
  amount: 500.34
};

const rent = {
  date: new Date('06/30/2018'),
  description: 'rent',
  amount: -435.89
};

it('loads a budget', () => {
  const state = budget([], { type: BUDGET_LOAD, payload: [paycheck, rent] });
  expect(state).toEqual([paycheck, rent]);
});

it('add a lineItem', () => {
  const prevState = [];
  const state = budget(prevState, { type: BUDGET_ADD, payload: paycheck });
  expect(state).toEqual([paycheck]);
  expect(state).not.toBe(prevState);
});