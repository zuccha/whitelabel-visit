import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reduceEvents } from './events';
import { reduceHikes } from './hikes';
import { reduceMuseums } from './museums';


const rootReducer = combineReducers({
  events: reduceEvents,
  hikes: reduceHikes,
  museums: reduceMuseums,
});

const initialState = {};

const enhancers = compose(
  applyMiddleware(thunkMiddleware),
);

const store = createStore(rootReducer, initialState, enhancers);

export default store;
