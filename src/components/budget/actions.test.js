import { BUDGET_LOAD, BUDGET_ADD, BUDGET_UPDATE, BUDGET_REMOVE } from './reducers';
import { loadBudget, addLineItem } from './actions';

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