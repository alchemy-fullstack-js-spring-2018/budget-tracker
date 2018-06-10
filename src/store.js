import { createStore, combineReducers } from 'redux';
import { categories, lineItemByCategory } from './components/budget/reducers';

const rootReducer = combineReducers({
  categories,
  lineItemByCategory
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

