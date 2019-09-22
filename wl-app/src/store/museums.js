import { combineReducers } from 'redux';
import baseUrl from '../baseUrl';


/**
 * API
 */

const fetchMuseums = async () => {
  const response = await fetch(`${baseUrl}/museums`);
  return await response.json();
};


/**
 * Types
 */

const FetchRequest = 'museums/fetch/request';
const FetchSuccess = 'museums/fetch/success';
const FetchFailure = 'museums/fetch/failure';


/**
 * Reducer
 */

const reduceData = (state = null, { type, payload })=> {
  switch (type) {
    case FetchSuccess:
      return payload;
    case FetchFailure:
      return null;
    default:
      return state;
  }
};

const reduceStatus = (state = 'initial', { type }) => {
  switch (type) {
    case FetchRequest:
      return 'loading';
    case FetchSuccess:
      return 'success';
    case FetchFailure:
      return 'failure';
    default:
      return state;
  }
};

const reduceMuseums = combineReducers({
  data: reduceData,
  status: reduceStatus,
});


/**
 * Selectors
 */

const selectMuseums = state => state.museums.data;

const selectMuseumsStatus = state => state.museums.status;


/**
 * Thunk
 */

const createThunkFetchMuseums = () => dispatch => {
  dispatch({ type: FetchRequest });
  fetchMuseums()
    .then(museums => { dispatch({ type: FetchSuccess, payload: museums }); })
    .catch(() => { dispatch({ type: FetchFailure }); });
};


/**
 * Export
 */

export {
  reduceMuseums,
  selectMuseums,
  selectMuseumsStatus,
  createThunkFetchMuseums,
};
