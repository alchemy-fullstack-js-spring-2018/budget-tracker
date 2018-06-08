import { createStore, combineReducers } from 'redux';
import { categories, expenseByCategory } from './components/categories/reducers';

const rootReducer = combineReducers({
  categories,
  expenseByCategory
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;