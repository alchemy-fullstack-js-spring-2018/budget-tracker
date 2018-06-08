export const CATEGORIES_LOAD = 'CATEGORIES_LOAD';
export const CATEGORY_ADD = 'CATEGORY_ADD';
export const CATEGORY_REMOVE = 'CATEGORY_REMOVE';
export const CATEGORY_UPDATE = 'CATEGORY_UPDATE';

export const EXPENSES_LOAD = 'EXPENSES_LOAD';
export const EXPENSE_CREATE = 'EXPENSE_CREATE';
export const EXPENSE_UPDATE = 'EXPENSE_UPDATE';

export function categories(state = [], { type, payload }) {
  switch (type) {
    case CATEGORIES_LOAD:
      return payload;
    case CATEGORY_ADD:
      return [...state, payload];
    case CATEGORY_REMOVE:
      return state.filter(category => category !== payload);
    case CATEGORY_UPDATE:
      return state.map(category => category.id === payload.id ? payload : category);
    default:
      return state;
  }
}

export function expenses(state = [], { type, payload }) {
  switch (type) {
    case EXPENSES_LOAD:
      return payload;
    case EXPENSE_CREATE:
      return [...state, payload];
    case EXPENSE_UPDATE:
      return state.map(expense => expense.id === payload.id ? payload : expense);
    default:
      return state;
  }
}
