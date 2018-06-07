export const GAMES_LOAD = 'GAMES_LOAD';
export const GAME_ADD = 'GAME_ADD';
export const GAME_REMOVE = 'GAME_REMOVE';

export function games(state = [], { type, payload }) {
  switch (type) {
    case GAMES_LOAD:
      return payload;
    case GAME_ADD:
      return [...state, payload];
    case GAME_REMOVE:
      return state.filter(game => game !== payload);
    default: 
      return state;
  }
}