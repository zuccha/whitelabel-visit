import TransportsOverview from './views/TransportsOverview';

const moduleConfig = {
  id: 'transports',
  title: 'Transports',
  icon: 'tram',
  stack: {
    initialRouteName: 'TransportsOverview',
    routes: {
      TransportsOverview,
    },
  },
};

export default moduleConfig;
