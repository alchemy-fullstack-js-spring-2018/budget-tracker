export const GAMES_LOAD = 'GAMES_LOAD';

export function games(state = [], { type, payload }) {
  switch (type) {
    case GAMES_LOAD:
      return payload;
    default: 
      return state;
  }
}