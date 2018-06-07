export const BUDGET_LOAD = 'BUDGET_LOAD';
export const BUDGET_ADD = 'BUDGET_ADD';
export const BUDGET_UPDATE = 'BUDGET_UPDATE';
export const BUDGET_REMOVE = 'BUDGET_REMOVE';

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