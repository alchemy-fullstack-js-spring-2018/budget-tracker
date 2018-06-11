export const CATEGORIES_LOAD = 'CATEGORIES_LOAD';
export const CATEGORY_ADD = 'CATEGORIES_ADD';
export const CATEGORY_REMOVE = 'CATEGORIES_REMOVE';

export function categories(state = [], { type, payload }) {
  switch (type) {
    case CATEGORIES_LOAD:
      return payload;
    case CATEGORY_ADD:
      return [...state, payload];
    case CATEGORY_REMOVE:
      return state.filter(category => category !== payload);
    default:
      return state;
  }
}