import HikesOverview from './views/HikesOverview';

const moduleConfig = {
  id: 'hiking',
  title: 'Hiking',
  icon: 'hiking',
  stack: {
    initialRouteName: 'HikesOverview',
    routes: {
      HikesOverview,
    },
  },
};

export default moduleConfig;
