import { createStore, combineReducers } from 'redux';
import { categories, expensesByCategory } from './components/budget/reducers/reducers';

const rootReducer = combineReducers({
  categories,
  expensesByCategory
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;