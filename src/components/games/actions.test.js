import { GAMES_LOAD, GAME_ADD, GAME_REMOVE } from './reducers';
import { loadGames, addGame, removeGame } from './actions';

it('creates a load action', () => {
  const { type, payload } = loadGames();
  expect(type).toBe(GAMES_LOAD);
  expect(payload.length).toBe(4); //expects games array to be four in length.
});

it(' create an add action', () => {
  const game = { name: 'Armello', developer: 'League of Geeks', price: '19.99' };

  const { type, payload } = addGame(game);
  expect(type).toBe(GAME_ADD);
  const { name, developer, price, id, timestamp } = payload;
  expect(name).toBe(game.name);
  expect(developer).toBe(game.developer);
  expect(price).toBe(game.price);
  expect(id).toBeTruthy();
  expect(timestamp).toBeTruthy();
});

it('create a remove action', () => {
  const game = { name: 'Armello', developer: 'League of Geeks', price: '19.99' };

  const action = removeGame(game);
  expect(action).toEqual({
    type: GAME_REMOVE,
    payload: game
  });
});