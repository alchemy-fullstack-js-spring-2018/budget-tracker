import { BUDGET_LOAD, BUDGET_ADD, BUDGET_UPDATE, BUDGET_REMOVE } from './reducers';
import { loadBudget, addLineItem, updateLineItem, removeLineItem } from './actions';

it('creates a load action', () => {
  const { type, payload } = loadBudget();
  expect(type).toBe(BUDGET_LOAD);
  expect(payload.length).toBe(3);
});

it('creates a add action', () => {
  const paycheck = { 
    date: new Date('12/04/2018'),
    description: 'paycheck',
    amount: 500.34
  };

  const { type, payload } = addLineItem(paycheck);
  expect(type).toBe(BUDGET_ADD);
  const { date, description, amount, id } = payload;
  expect(date).toEqual(paycheck.date);
  expect(description).toBe(paycheck.description);
  expect(amount).toBe(paycheck.amount);
  expect(id).toBeTruthy();
});

it('creates a date on add', () => {
  const paycheck = { 
    date: null,
    description: 'paycheck',
    amount: 500.34
  };

  const { payload } = addLineItem(paycheck);
  const { date } = payload;
  expect(date).toBeTruthy();
});

it('creates an update action', () => {
  const rent = { 
    date: new Date('12/04/2017'),
    description: 'rent',
    amount: -302.64
  };

  const action = updateLineItem(rent);
  expect(action).toEqual({
    type: BUDGET_UPDATE,
    payload: rent
  });
});

it('creates a remove action', () => {
  const rent = { 
    date: new Date('12/04/2017'),
    description: 'rent',
    amount: -302.64
  };

  const action = removeLineItem(rent);
  expect(action).toEqual({
    type: BUDGET_REMOVE,
    payload: rent
  });
});