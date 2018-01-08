import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator, TabNavigator} from 'react-navigation';
import index from './index.js';
import home from './Components/home.js';
import program from './Components/program.js';
import map from './Components/map.js';
import settings from './Components/settings.js';
import network from './Components/network.js';
import login from './Components/login.js'
import { Ionicons } from '@expo/vector-icons';

const Tab = TabNavigator({
  Home: {
    screen: home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-home' : 'ios-home-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Program: {
    screen: program,
  },
  Map: {
    screen: map
  },
  Settings: {
    screen: settings
  },
  Network: {
    screen: network
  },
}, {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});


const RootNavigator = StackNavigator({
  Login: {
    screen: login,
  },
  Home: {
    screen: Tab,
  },
  Details: {
    screen: index,
  },
});

export default RootNavigator;