import React, { useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import Failure from '../../../../components/Failure';
import Loading from '../../../../components/Loading';
import theme from '../../../../theme';
import HikeCard from './HikeCard';

const HikesOverview = ({ hikes, hikesStatus, fetchHikes }) => {
  useEffect(() => {
    if (hikesStatus === 'initial') {
      fetchHikes();
    }
  }, [hikesStatus, fetchHikes]);

  if (hikesStatus === 'initial' || hikesStatus === 'loading') {
    return <Loading />;
  }

  if (hikesStatus === 'failure') {
    return <Failure onRetry={fetchHikes} />;
  }

  return (
    <View style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.container}>
        {hikes.map(hike => (
          <HikeCard key={hike.name} hike={hike} />
        ))}
      </ScrollView>
    </View>
  );
};

HikesOverview.navigationOptions = {
  headerTitle: 'Hikes',
};

export default HikesOverview;

const styles = {
  wrapper: {
    flexGrow: 1,
    backgroundColor: theme.colors.background3,
  },
  container: {
    flexGrow: 1,
  },
};
