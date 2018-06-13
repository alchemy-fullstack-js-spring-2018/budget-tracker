export const CATEGORIES_LOAD = 'CATEGORIES_LOAD';
export const CATEGORY_ADD = 'CATEGORY_ADD';
export const CATEGORY_REMOVE = 'CATEGORY_REMOVE';
export const CATEGORY_UPDATE = 'CATEGORY_UPDATE';
export const EXPENSE_ADD = 'EXPENSE_ADD';
export const EXPENSE_REMOVE = 'EXPENSE_REMOVE';
export const EXPENSE_UPDATE = 'EXPENSE_UPDATE';

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
    case CATEGORY_ADD:
      return {
        ...state,
        [payload.id]: []
      };
    case CATEGORY_REMOVE: {
      const copy = { ...state };
      delete copy[payload.id];
      return copy;
    }
    case EXPENSE_ADD: {
      return {
        ...state,
        [payload.categoryId]: [
          ...state[payload.categoryId],
          payload.expense
        ]
      };
    }
    case EXPENSE_UPDATE:
      return {
        ...state,
        [payload.categoryId]:
          state[payload.categoryId].map(expense => expense.id === payload.expense.id ? payload.expense : expense)
      };
    case EXPENSE_REMOVE:{
      return {
        ...state,
        [payload.categoryId]:
        state[payload.categoryId].filter(expense => expense.id !== payload.expense.id)
      };}
    default:
      return state;
  } 
}