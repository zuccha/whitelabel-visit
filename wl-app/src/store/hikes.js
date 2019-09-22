import { combineReducers } from 'redux';
import baseUrl from '../baseUrl';


/**
 * API
 */

const fetchHikes = async () => {
  const response = await fetch(`${baseUrl}/hikes`);
  return await response.json();
};


/**
 * Types
 */

const FetchRequest = 'hikes/fetch/request';
const FetchSuccess = 'hikes/fetch/success';
const FetchFailure = 'hikes/fetch/failure';


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

const reduceHikes = combineReducers({
  data: reduceData,
  status: reduceStatus,
});


/**
 * Selectors
 */

const selectHikes = state => state.hikes.data;

const selectHikesStatus = state => state.hikes.status;


/**
 * Thunk
 */

const createThunkFetchHikes = () => dispatch => {
  dispatch({ type: FetchRequest });
  fetchHikes()
    .then(hikes => { dispatch({ type: FetchSuccess, payload: hikes }); })
    .catch((e) => {
      console.log('xxx e', e);
      dispatch({ type: FetchFailure }); });
};


/**
 * Export
 */

export {
  reduceHikes,
  selectHikes,
  selectHikesStatus,
  createThunkFetchHikes,
};
