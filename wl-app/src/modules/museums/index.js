import MuseumsOverview from './views/MuseumsOverview';

const moduleConfig = {
  id: 'museums',
  title: 'Museums',
  icon: 'bank',
  stack: {
    initialRouteName: 'MuseumsOverview',
    routes: {
      MuseumsOverview,
    },
  },
};

export default moduleConfig;
