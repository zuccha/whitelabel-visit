import React from 'react';
import { ScrollView, View } from 'react-native';
import SectionHeader from '../../../../components/SectionHeader';
import theme from '../../../../theme';
import TransportCard from './TransportCard';

const TransportsOverview = () => (
  <View style={styles.wrapper}>
    <ScrollView contentContainerStyle={styles.container}>
      <SectionHeader title='Getting around' />
      <TransportCard name='By foot' icon='walk' />
      <TransportCard name='By bike' icon='bike' />
      <TransportCard name='By car' icon='car' />
      <SectionHeader title='Public transport' />
      <TransportCard name='Bus & Tram' icon='tram' />
      <TransportCard name='Train' icon='train' />
      <TransportCard name='Boat' icon='ship-wheel' />
      <SectionHeader title='Private services' />
      <TransportCard name='Taxi' icon='taxi' />
      <TransportCard name='Car rental' icon='car-key' />
      </ScrollView>
  </View>
);

TransportsOverview.navigationOptions = {
  headerTitle: 'Transports',
};

export default TransportsOverview;

const styles = {
  wrapper: {
    flexGrow: 1,
    backgroundColor: theme.colors.background3,
  },
  container: {
    flexGrow: 1,
  },
};
