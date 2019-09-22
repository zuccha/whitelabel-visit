import React from 'react';
import { Button, Text, View } from 'react-native';
import theme from '../theme';

const Failure = ({ onRetry }) => (
  <View style={styles.container}>
    <Text style={styles.message}>There has been an error.</Text>
    <Button title={'Retry'} onPress={onRetry} color={theme.colors.accent} />
  </View>
);

export default Failure;

const styles = {
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.background3,
  },
  message: {
    color: theme.colors.text1,
    fontSize: 16,
    marginBottom: 4,
  },
};
