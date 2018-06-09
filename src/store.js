import { createStore, combineReducers } from 'redux';
import { categories, expensesByItem } from './components/reducer';

const rootReducer = combineReducers({
  categories,
  expensesByItem
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENTION__ && window.__REDUX_DEVTOOLS_EXTENTION__()
);

export default store;
