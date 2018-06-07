export const CATEGORIES_LOAD = 'CATEGORIES_LOAD';
export const CATEGORIES_ADD = 'CATEGORIES_ADD';
export const CATEGORIES_REMOVE = 'CATEGORIES_REMOVE';

export function categories(state = [], {type, payload}) {
    switch (type) {
        case CATEGORIES_LOAD:
            return payload;
        case CATEGORIES_ADD:
            return [...state, payload];
        case CATEGORIES_REMOVE:
            return state.filter(category => category !== payload);
        default:
            return state;
    }
}