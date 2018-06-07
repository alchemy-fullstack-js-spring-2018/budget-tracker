import {
  games
} from './reducers';

it('has a default value of empty array', () => {
  const state = games(undefined, {});
  expect(state).toEqual([]);
});