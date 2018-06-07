import { GAMES_LOAD } from './reducers';
import { loadGames } from './actions';

it('creates a load action', () => {
  const { type, payload } = loadGames();
  expect(type).toBe(GAMES_LOAD);
  expect(payload.length).toBe(4); //expects games array to be four in length.
});