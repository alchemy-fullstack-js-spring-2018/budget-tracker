import { games, GAMES_LOAD } from './reducers';

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