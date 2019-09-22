import React, { useEffect } from 'react';
import { Dimensions, ScrollView, Text, View } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import Failure from '../../../../components/Failure';
import Loading from '../../../../components/Loading';
import SectionHeader from '../../../../components/SectionHeader';
import theme from '../../../../theme';
import MuseumCard from './MuseumCard';

const MuseumsOverview = ({ museums, museumsStatus, fetchMuseums }) => {
  useEffect(() => {
    if (museumsStatus === 'initial') {
      fetchMuseums();
    }
  }, [museumsStatus, fetchMuseums]);

  if (museumsStatus === 'initial' || museumsStatus === 'loading') {
    return <Loading />;
  }

  if (museumsStatus === 'failure') {
    return <Failure onRetry={fetchMuseums} />;
  }

  return (
    <View style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.container}>
        <SectionHeader title='Discover' />
        <View style={styles.museums}>
          {museums.map(museum => (
            <MuseumCard
              key={museum.name}
              museum={museum}
              style={styles.museum}
            />
          ))}
          <Touchable style={[styles.museum, styles.more]}>
            <Text style={styles.moreText}>See All</Text>
          </Touchable>
          {museums.length % 2 === 0 && <View style={styles.museum} />}
        </View>
      </ScrollView>
    </View>
  );
};

MuseumsOverview.navigationOptions = {
  headerTitle: 'Museums',
};

export default MuseumsOverview;

const styles = {
  wrapper: {
    flexGrow: 1,
    backgroundColor: theme.colors.background3,
  },
  container: {
    flexGrow: 1,
  },
  museums: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    flexGrow: 1,
    flexWrap: 'wrap',
    padding: 1,
  },
  museum: {
    height: Dimensions.get('window').width / 2 - 2,
    width: Dimensions.get('window').width / 2 - 2,
    paddingHorizontal: 2,
    marginVertical: 2,
  },
  more: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.background4,
  },
  moreText: {
    color: theme.colors.text3,
    fontWeight: 'bold',
  },
};
