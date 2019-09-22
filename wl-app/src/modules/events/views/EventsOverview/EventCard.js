import React from 'react';
import { Text, View } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import Icon from 'react-native-vector-icons/MaterialIcons';
import format from 'date-fns/format';
import theme from '../../../../theme';
import { mapCategoryToColor } from './utils';

const EventCard = ({ event }) => (
  <Touchable foreground={Touchable.Ripple('#FFFFFF')}>
    <View style={styles.container}>
      <View style={[styles.date, { backgroundColor: mapCategoryToColor(event.category) }]}>
        <Text style={styles.day}>{format(event.dateStart, 'dd')}</Text>
        <Text style={styles.month}>{format(event.dateStart, 'MMM')}</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.name}>{event.name}</Text>
        <Text style={styles.location}>{event.location}</Text>
      </View>
      <Icon name="keyboard-arrow-right" color={theme.colors.text3} size={32} />
    </View>
  </Touchable>
);

export default EventCard;

const styles = {
  container: {
    height: 96,
    width: '100%',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: theme.colors.border,
    backgroundColor: theme.colors.background2,
  },
  date: {
    height: 64,
    width: 64,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  day: {
    color: 'white',
    fontWeight: 'bold',
  },
  month: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  info: {
    height: '100%',
    paddingHorizontal: 12,
    flex: 1,
  },
  name: {
    color: theme.colors.text1,
    fontSize: 15,
    fontWeight: '500',
  },
  location: {
    color: theme.colors.text1,
    marginTop: 4,
  },
};
