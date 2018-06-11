export const PLACES_LOAD = 'PLACES_LOAD';
//export const PLACES_ADD = 'FRUIT_ADD';

export function places(state = [], { type, payload }) {
  switch (type) {
    case PLACES_LOAD:
      return payload;
    default:
      return state;
  }
}