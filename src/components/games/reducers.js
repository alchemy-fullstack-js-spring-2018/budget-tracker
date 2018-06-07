export const GAMES_LOAD = 'GAMES_LOAD';
export const GAMES_ADD = 'GAMES_ADD';

export function games(state = [], { type, payload }) {
  switch (type) {
    case GAMES_LOAD:
      return payload;
    case GAMES_ADD:
      return [...state, payload];
    default: 
      return state;
  }
}