import { combineReducers } from 'redux';
import baseUrl from '../baseUrl';


/**
 * API
 */

const fetchEvents = async () => {
  const response = await fetch(`${baseUrl}/events`);
  return await response.json();
};


/**
 * Types
 */

const FetchRequest = 'events/fetch/request';
const FetchSuccess = 'events/fetch/success';
const FetchFailure = 'events/fetch/failure';


/**
 * Reducer
 */

const reduceData = (state = null, { type, payload })=> {
  switch (type) {
    case FetchSuccess:
      return payload.map(event => ({
        ...event,
        dateStart: new Date(event.dateStart),
        dateEnd: new Date(event.dateEnd),
      }));
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

const reduceEvents = combineReducers({
  data: reduceData,
  status: reduceStatus,
});


/**
 * Selectors
 */

const selectEvents = state => state.events.data;

const selectEventsStatus = state => state.events.status;


/**
 * Thunk
 */

const createThunkFetchEvents = () => dispatch => {
  dispatch({ type: FetchRequest });
  fetchEvents()
    .then(events => { dispatch({ type: FetchSuccess, payload: events }); })
    .catch(() => { dispatch({ type: FetchFailure }); });
};


/**
 * Export
 */

export {
  reduceEvents,
  selectEvents,
  selectEventsStatus,
  createThunkFetchEvents,
};
