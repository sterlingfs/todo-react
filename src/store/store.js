import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reducers from '../reducers/reducers';
import middleware from '../middleware/api';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 
const enhancers = composeEnhancers(applyMiddleware(...middleware));
const store = createStore(combineReducers(reducers), {}, enhancers);

export default store;
