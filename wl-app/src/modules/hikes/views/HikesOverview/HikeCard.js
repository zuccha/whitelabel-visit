import React from 'react';
import { Image, Text, View } from 'react-native';
import Touchable from 'react-native-platform-touchable';

const mapDifficultyToLabel = difficulty => ({
  easy:          'Easy',
  hard:          'Hard',
  medium:        'Medium',
}[difficulty] || 'Easy');

const mapDifficultyToColor = difficulty => ({
  easy:          'green',
  hard:          'red',
  medium:        'orange',
}[difficulty] || 'green');

const HikeCard = ({ hike }) => (
  <Touchable foreground={Touchable.Ripple('#FFFFFF')}>
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{hike.name}</Text>
        <View style={[
          styles.difficultyContainer,
          { backgroundColor: mapDifficultyToColor(hike.difficulty) },
        ]}>
          <Text style={styles.difficulty}>
            {mapDifficultyToLabel(hike.difficulty)}
          </Text>
        </View>
      </View>
      <Image style={styles.image} source={{ uri: hike.image }} />
    </View>
  </Touchable>
);

export default HikeCard;

const styles = {
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameContainer: {
    height: 32,
    width: '100%',
    paddingHorizontal: 12,
    position: 'absolute',
    bottom: 0,
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  name: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left',
    textTransform: 'uppercase',
  },
  image: {
    height: 180,
    width: '100%',
  },
  difficultyContainer: {
    width: 64,
    paddingVertical: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  difficulty: {
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: 'white',
  },
};
