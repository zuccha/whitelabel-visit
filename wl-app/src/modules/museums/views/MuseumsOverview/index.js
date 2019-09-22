import { connect } from 'react-redux';
import { selectMuseums, selectMuseumsStatus, createThunkFetchMuseums } from '../../../../store/museums';
import MuseumsOverview from './MuseumsOverview';

const mapStateToProps = state => ({
  museums: selectMuseums(state),
  museumsStatus: selectMuseumsStatus(state),
});

const mapDispatchToProps = {
  fetchMuseums: createThunkFetchMuseums,
};

export default connect(mapStateToProps, mapDispatchToProps)(MuseumsOverview);
