const colors = {
  accent: '#0078BF',
  background1: '#2B2B2B',
  background2: '#313335',
  background3: '#3C3F41',
  background4: '#515456',
  border: '#646464',
  text1: '#FFFFFF',
  text2: '#BBBBBB',
  text3: '#999999',
};

export default {
  colors,
  header: {
    tintColor: colors.text1,
    backgroundColor: colors.background1,
  },
  statusBar: {
    barStyle: 'light-content',
    backgroundColor: colors.background1,
  },
  navbar: {
    backgroundColor: colors.background1,
    activeTintColor: colors.accent,
    inactiveTintColor: colors.text2,
  },
};
