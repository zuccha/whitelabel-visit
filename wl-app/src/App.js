import React  from 'react';
import { StatusBar, YellowBox } from 'react-native';
import { Provider } from 'react-redux';
import AppNavigator from './AppNavigator';
import store from './store';
import theme from './theme';

// Suppress warnings triggered by react-navigation and other libraries.
YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
]);

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar
        barStyle={theme.statusBar.barStyle}
        backgroundColor={theme.statusBar.backgroundColor}
      />
      <AppNavigator />
    </Provider>
  );
};

export default App;
