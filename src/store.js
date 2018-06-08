import { createStore, combineReducers } from 'redux';
import { budget } from './components/budget/reducers';

const rootReducer = combineReducers({
  budget
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

