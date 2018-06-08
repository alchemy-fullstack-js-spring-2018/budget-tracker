import { createStore, combineReducers } from 'redux';
import { places } from './components/places/Place';

//oops!  included accidentally.leaving for next part of lab
// function reducer(state =[], { type }) {
//   switch(type) {
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state = -1;
//     default:
//       return state;
//   }
// }

const rootReducer = combineReducers({ 
  places
});

const store = createStore(
  rootReducer,
  window.__REDUX__DEVTOOLS__EXTENSION__ && window.__REDUX__DEVTOOLS__EXTENSION__()
);

export default store;