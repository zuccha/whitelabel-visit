import React, { useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import Failure from '../../../../components/Failure';
import Loading from '../../../../components/Loading';
import SectionHeader from '../../../../components/SectionHeader';
import theme from '../../../../theme';
import EventCategory from './EventCategory';
import EventCard from './EventCard';

const EventsOverview = ({ events, eventsStatus, fetchEvents }) => {
  useEffect(() => {
    if (eventsStatus === 'initial') {
      fetchEvents();
    }
  }, [eventsStatus, fetchEvents]);

  if (eventsStatus === 'initial' || eventsStatus === 'loading') {
    return <Loading />;
  }

  if (eventsStatus === 'failure') {
    return <Failure onRetry={fetchEvents} />;
  }

  return (
    <View style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.container}>
        <SectionHeader title='Categories'/>
        <View style={styles.categories}>
          <EventCategory category='art' style={styles.category} />
          <EventCategory category='conference' style={styles.category} />
          <EventCategory category='fair' style={styles.category} />
          <EventCategory category='sport' style={styles.category} />
        </View>
        <SectionHeader title='Highlights' />
        {events.map(event => (
          <EventCard
            key={event.name}
            event={event}
          />
        ))}
      </ScrollView>
    </View>
  );
};

EventsOverview.navigationOptions = {
  headerTitle: 'Events',
};

export default EventsOverview;

const styles = {
  wrapper: {
    flexGrow: 1,
    backgroundColor: theme.colors.background3,
  },
  container: {
    flexGrow: 1,
  },
  categories: {
    paddingHorizontal: 2,
    paddingVertical: 6,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
    backgroundColor: theme.colors.background2,
  },
  category: {
    width: '50%',
    borderWidth: 2,
    borderColor: theme.colors.background2,
  },
};
