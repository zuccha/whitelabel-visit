import React from 'react';
import { Image, Text, View } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import theme from '../../../../theme';

const MuseumCard = ({ museum, style }) => (
  <Touchable foreground={Touchable.Ripple('#FFFFFF')}>
    <View style={[styles.container, style]}>
      <Image style={styles.image} source={{ uri: museum.image }} />
      <View style={styles.caption}>
        <Text style={styles.name}>{museum.name}</Text>
        <Text style={styles.city}>{museum.city}</Text>
      </View>
    </View>
  </Touchable>
);

export default MuseumCard;

const styles = {
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  caption: {
    width: '100%',
    height: 42,
    paddingHorizontal: 4,
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    zIndex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
  },
  city: {
    color: 'white',
    fontSize: 13,
  },
};
