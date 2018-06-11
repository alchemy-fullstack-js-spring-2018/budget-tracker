export const CATEGORIES_LOAD = 'CATEGORIES_LOAD';
export const CATEGORIES_ADD = 'CATEGORIES_ADD';
export const CATEGORIES_UPDATE = 'CATEGORIES_UPDATE';
export const CATEGORIES_REMOVE = 'CATEGORIES_REMOVE';
export const EXPENSE_ADD = 'EXPENSE_ADD';

export const getCategories = state => state.categories;
export const getExpenses = state => state.expensesByItem;
export const getExpenseByCategory = (categoryId, state) => getExpenses(state)[categoryId];



export function categories(state = [], { type, payload }) {
  switch (type) {
    case CATEGORIES_LOAD:
      return payload;
    case CATEGORIES_ADD:
      return [...state, payload];
    case CATEGORIES_UPDATE:
      return state.map(category => category.id === payload.id ? payload : category);
    case CATEGORIES_REMOVE:
      return state.filter(category => category !== payload);
    default:
      return state;
  }
}

export function expensesByItem(state = {}, { type, payload }) {
  switch (type) {
    case CATEGORIES_LOAD:
      return payload.reduce((map, category) => {
        map[category.id] = category.expenses;
        return map;
      }, {});
    case CATEGORIES_ADD:
      return {
        ...state,
        [payload.id]: []
      };
    case CATEGORIES_REMOVE: {
      const copy = { ...state };
      delete copy[payload.id];
      return copy;
    }
    case EXPENSE_ADD:{
      return {
        ...state,
        [payload.categoryId]: [
          ...state[payload.categoryId],
          payload.expense
        ]
      };
    }
    default:
      return state;
  }
}
