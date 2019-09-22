import React from 'react';
import { Text } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import { mapCategoryToColor, mapCategoryToLabel } from './utils';

const EventCategory = ({ category, style }) => (
  <Touchable style={[styles.container, style, { backgroundColor: mapCategoryToColor(category) }]}>
    <Text style={styles.label}>
      {mapCategoryToLabel(category)}
    </Text>
  </Touchable>
);

export default EventCategory;

const styles = {
  container: {
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
};
