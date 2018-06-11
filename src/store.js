import { createStore, combineReducers } from 'redux';
import { places } from './components/places/reducers';


const rootReducer = combineReducers({ 
  places
});

const store = createStore(
  rootReducer,
  window.__REDUX__DEVTOOLS__EXTENSION__ && window.__REDUX__DEVTOOLS__EXTENSION__()
);

export default store;