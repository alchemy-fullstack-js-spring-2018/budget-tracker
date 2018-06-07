export const GAMES_LOAD = 'GAMES_LOAD';
export const GAMES_ADD = 'GAMES_ADD';
export const GAMES_REMOVE = 'GAMES_REMOVE';

export function games(state = [], { type, payload }) {
  switch (type) {
    case GAMES_LOAD:
      return payload;
    case GAMES_ADD:
      return [...state, payload];
    case GAMES_REMOVE:
      return state.filter(game => game !== payload);
    default: 
      return state;
  }
}