import { games, GAMES_LOAD, GAMES_ADD } from './reducers';

it('has a default value of empty array', () => {
  const state = games(undefined, {});
  expect(state).toEqual([]);
});

const armello = {
  name: 'Armello',
  developer: 'League of Geeks'
};

const guild = {
  name: 'Guild Wars 2',
  developer: 'Arenanet'
};

it('loads games', () => {
  const state = games([], { type:GAMES_LOAD, payload: [armello, guild] });
  expect(state).toEqual([armello, guild]);
});

it('add a game', () => {
  const prevState = [];
  const state = games(prevState, { type: GAMES_ADD, payload: guild });
  expect(state).toEqual([guild]);
  expect(state).not.toBe(prevState);
});