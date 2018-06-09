export const CATEGORIES_LOAD = 'CATEGORIES_LOAD';
export const CATEGORY_ADD = 'CATEGORY_ADD';
export const CATEGORY_UPDATE = 'CATEGORY_UPDATE';
export const CATEGORY_REMOVE = 'CATEGORY_REMOVE';
export const BUDGET_LOAD = 'BUDGET_LOAD';
export const BUDGET_ADD = 'BUDGET_ADD';
export const BUDGET_UPDATE = 'BUDGET_UPDATE';
export const BUDGET_REMOVE = 'BUDGET_REMOVE';

// export const getBudget = state => state.budget;
// export const getCategory = state => state.budgetByCategory;
// export const getBudgetByCategory = (categoryId, state) => getCategory(state)[categoryId];

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

export function budget(state = [], { type, payload }) {
  switch (type) {
    case BUDGET_LOAD:
      return payload;
    case BUDGET_ADD:
      return [...state, payload];
    case BUDGET_UPDATE:
      return state.map(lineItem => lineItem.id === payload.id ? payload : lineItem);
    case BUDGET_REMOVE:
      return state.filter(lineItem => lineItem !== payload);
    default:
      return state;
  }
}

// export function budgetByCategory(state = {}, { type, payload }) {
//   switch (type) {
//     case BUDGET_ADD:
//       return {
//         ...state,
//         [payload.id]: []
//       };
//     default:
//       return state;
//   }
// }