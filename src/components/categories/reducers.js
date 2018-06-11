export const CATEGORIES_LOAD = 'CATEGORIES_LOAD';
export const CATEGORY_ADD = 'CATEGORY_ADD';
export const CATEGORY_REMOVE = 'CATEGORY_REMOVE';
export const CATEGORY_UPDATE = 'CATEGORY_UPDATE';
export const EXPENSE_CREATE = 'EXPENSE_CREATE';
export const EXPENSE_DELETE = 'EXPENSE_DELETE';

export function categories(state = [], { type, payload }) {
  switch (type) {
    case CATEGORIES_LOAD:
      return payload;
    case CATEGORY_ADD:
      return [...state, payload];
    case CATEGORY_UPDATE:
      return state.map(category => category.id === payload.id ? payload : category);
    case CATEGORY_REMOVE:
      return state.filter(category => category !== payload);
    default: 
      return state;
  }
}

export function expensesByCategory(state = {}, { type, payload }) {
  switch (type) {
    case CATEGORIES_LOAD:
      return payload.reduce((map, category) => {
        map[category.id] = category.expenses;
        return map;
      }, {});
    case EXPENSE_CREATE:
      return {
        ...state,
        [payload.id]: []
      };
    case EXPENSE_DELETE: {
      const copy = { ...state };
      delete copy[payload.id];
      return copy;
    }
    default:
      return state;
  }
}