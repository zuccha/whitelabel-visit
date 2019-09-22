import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import modules from './modules';
import theme from './theme';

const defaultNavigationOptions = {
  headerTintColor: theme.header.tintColor,
  headerStyle: {
    backgroundColor: theme.header.backgroundColor,
  },
};

const createAppNavigator = () => {
  // Create `routeConfigs`, with one route for each module.
  const routeConfigs = {};
  modules.forEach(module => {
    // Create navigation stack for the module.
    const ModuleStack = createStackNavigator(
      module.stack.routes,
      {
        initialRouteName: module.stack.initialRouteName,
        defaultNavigationOptions,
      }
    );
    // Set tab bar label and icon.
    ModuleStack.navigationOptions = {
      tabBarLabel: module.title,
      tabBarIcon: ({ tintColor }) => (
        <Icon name={module.icon} color={tintColor} size={20} style={{ marginTop: 8 }}/>
      ),
    };
    // Add current module's stack to `routeConfigs` for the bottomtab navigator.
    routeConfigs[module.id] = ModuleStack;
  });

  // Create bottom tab navigator with react-navigation.
  const BottomTabNavigator = createBottomTabNavigator(
    routeConfigs,
    {
      initialRouteName: modules[0].id,
      tabBarOptions: {
        activeTintColor: theme.navbar.activeTintColor,
        inactiveTintColor: theme.navbar.inactiveTintColor,
        style: {
          backgroundColor: theme.navbar.backgroundColor,
        },
      },
    },
  );

  // Create react-navigation app container.
  return createAppContainer(BottomTabNavigator);
};

export default createAppNavigator();
