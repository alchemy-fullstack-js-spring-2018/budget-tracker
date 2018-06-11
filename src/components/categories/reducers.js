export const CATEGORIES_LOAD = 'CATEGORIES_LOAD';
export const CATEGORY_ADD = 'CATEGORIES_ADD';
export const CATEGORY_REMOVE = 'CATEGORIES_REMOVE';
export const EXPENSE_ADD = 'EXPENSE_ADD';

export const getCategories = state => state.categories;
export const getExpenses = state => state.expensesByCategory;
export const getExpensesByCategory = (categoryId, state) => getExpenses(state)[categoryId];

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

export function expensesByCategory(state = {}, { type, payload }) {
  switch (type) {
    case CATEGORIES_LOAD:
      return payload.reduce((map, category) => {
        map[category.id] = category.expenses;
        return map;
      }, {});
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
    default:
      return state;
  }
}