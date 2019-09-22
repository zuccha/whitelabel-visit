import { connect } from 'react-redux';
import { selectHikes, selectHikesStatus, createThunkFetchHikes } from '../../../../store/hikes';
import HikesOverview from './HikesOverview';

const mapStateToProps = state => ({
  hikes: selectHikes(state),
  hikesStatus: selectHikesStatus(state),
});

const mapDispatchToProps = {
  fetchHikes: createThunkFetchHikes,
};

export default connect(mapStateToProps, mapDispatchToProps)(HikesOverview);
