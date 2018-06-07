import {
  CATEGORIES_LOAD,
  CATEGORY_ADD,
  CATEGORY_UPDATE,
  CATEGORY_REMOVE } from './reducers';

const categories = [
  { name: 'groceries', budget: 300 },
  { name: 'movies', budget: 20 },
  { name: 'gas', budget: 30 }
];

export const loadCategories = () => ({
  type: CATEGORIES_LOAD,
  payload: categories
});