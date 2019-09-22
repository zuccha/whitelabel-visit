import { connect } from 'react-redux';
import { selectEvents, selectEventsStatus, createThunkFetchEvents } from '../../../../store/events';
import EventsOverview from './EventsOverview';

const mapStateToProps = state => ({
  events: selectEvents(state),
  eventsStatus: selectEventsStatus(state),
});

const mapDispatchToProps = {
  fetchEvents: createThunkFetchEvents,
};

export default connect(mapStateToProps, mapDispatchToProps)(EventsOverview);
