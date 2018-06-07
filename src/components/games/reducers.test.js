import { games, GAMES_LOAD, GAME_ADD, GAME_REMOVE } from './reducers';

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
  const state = games(prevState, { type: GAME_ADD, payload: guild });
  expect(state).toEqual([guild]);
  expect(state).not.toBe(prevState);
});

it('removes a game', () => {
  const state = games([armello, guild], {  type: GAME_REMOVE, payload: guild  });
  expect(state).toEqual([armello]);
});