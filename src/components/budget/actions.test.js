import { BUDGET_LOAD, BUDGET_ADD, BUDGET_UPDATE, BUDGET_REMOVE } from './reducers';
import { loadBudget } from './actions';

it('creates a load action', () => {
  const { type, payload } = loadBudget();
  expect(type).toBe(BUDGET_LOAD);
  expect(payload.length).toBe(3);
});