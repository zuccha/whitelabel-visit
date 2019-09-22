import React  from 'react';
import { Text, View } from 'react-native';
import theme from '../theme';

const SectionHeader = ({ title }) => (
  <View style={styles.container}>
    <Text style={styles.title}>
      {title}
    </Text>
  </View>
);

export default SectionHeader;

const styles = {
  container: {
    height: 42,
    marginTop: 8,
    paddingHorizontal: 10,
    justifyContent: 'center',
    backgroundColor: theme.colors.background1,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  title: {
    fontSize: 15,
    fontWeight: '500',
    color: theme.colors.text2,
  },
};
