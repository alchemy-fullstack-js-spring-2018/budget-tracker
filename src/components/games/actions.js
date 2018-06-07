import { GAMES_LOAD, GAME_ADD, GAME_REMOVE } from './reducers';
import shortid from 'shortid';

const games = [
  {name: 'Armello', developer: 'League of Geeks', price: '19.99' },
  {name: 'Guild Wars 2', developer: 'Arenanet', price: '29.99' },
  {name: 'Battle Chef Brigade', developer: 'Trinket Studios', price: '19.99' },
  {name: 'Dead In Vinland', developer: 'CCCP', price: '19.99' },
];

export const loadGames = () => ({
  type: GAMES_LOAD,
  payload: games
});

export const addGame = game => {
  game.id = shortid.generate();
  game.timestamp = new Date();

  return {
    type: GAME_ADD,
    payload: game
  };

};