import { CATEGORIES_LOAD, CATEGORY_ADD, CATEGORY_REMOVE, CATEGORY_UPDATE, EXPENSE_ADD } from './reducers';
import shortid from 'shortid';

const categories = [
  { name: 'Produce', budget: 50 },
  { name: 'Meat', budget: 60 }
];

export const loadCategories = () => ({
  type: CATEGORIES_LOAD,
  payload: categories
});

export const addCategory = category => {
  category.id = shortid.generate();
  category.timestamp = new Date();

  return {
    type: CATEGORY_ADD,
    payload: category
  };

};
export const removeCategory = category => ({ 
  type: CATEGORY_REMOVE,
  payload: category
});

export const updateCategory = category => ({
  type: CATEGORY_UPDATE,
  payload: category
});

// export const addExpense = ( categoryId, expense ) => dispatch => {
//   postExpense(categoryId, expense)
//     .then(saved => {
//       dispatch({
//         type:EXPENSE_ADD,
//         payload: {
//           categoryId,
//           expense:saved
//         }
//       });
//     });
// };