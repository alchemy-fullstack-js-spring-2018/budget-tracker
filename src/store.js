import { createStore, combineReducers } from 'redux';
import { games } from './components/games/reducers';

const rootReducer = combineReducers({
  games
});
  
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
  
export default store;