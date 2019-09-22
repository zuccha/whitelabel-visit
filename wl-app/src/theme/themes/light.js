const colors = {
  accent: '#A61A2E',
  background1: '#FFFFFF',
  background2: '#F8F8F8',
  background3: '#F0F0F0',
  background4: '#DDDDDD',
  border: '#D8D8D8',
  text1: '#000000',
  text2: '#303030',
  text3: '#515151',
};

export default {
  colors,
  header: {
    tintColor: colors.text1,
    backgroundColor: colors.background1,
  },
  statusBar: {
    barStyle: 'dark-content',
    backgroundColor: colors.background1,
  },
  navbar: {
    backgroundColor: colors.background1,
    activeTintColor: colors.accent,
    inactiveTintColor: colors.text2,
  },
};
