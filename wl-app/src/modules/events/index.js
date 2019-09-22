import EventsOverview from './views/EventsOverview';

const moduleConfig = {
  id: 'events',
  title: 'Events',
  icon: 'calendar',
  stack: {
    initialRouteName: 'EventsOverview',
    routes: {
      EventsOverview,
    },
  },
};

export default moduleConfig;
