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