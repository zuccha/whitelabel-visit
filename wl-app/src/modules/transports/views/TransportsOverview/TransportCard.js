import React from 'react';
import { Text, View } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '../../../../theme';

const TransportCard = ({ name, icon }) => (
  <Touchable style={styles.touchable}>
    <View style={styles.container}>
      <Icon name={icon} size={16} color={theme.colors.text2} style={styles.icon} />
      <Text style={styles.name}>{name}</Text>
    </View>
  </Touchable>
);

export default TransportCard;

const styles = {
  touchable: {
    backgroundColor: theme.colors.background2,
  },
  container: {
    height: 42,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  name: {
    fontSize: 16,
    color: theme.colors.text2,
  },
  icon: {
    paddingRight: 16,
  },
};
