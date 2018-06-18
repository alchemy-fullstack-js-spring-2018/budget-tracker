import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { error, loading } from '../components/app/reducers';
import { categories, expensesByCategory } from '../components/categories/reducers';

const rootReducer = combineReducers({
  error,
  loading,
  categories,
  expensesByCategory
});

const logger = () => next => action => {
  const result = next(action);
  return result;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      logger,
      thunk
    )
  )
);

export default store;