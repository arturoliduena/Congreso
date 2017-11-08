import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator, TabNavigator} from 'react-navigation';
import index from './index.js';
import home from './Components/home.js';
import program from './Components/program.js';
import map from './Components/map.js';
import settings from './Components/settings.js';
import network from './Components/network.js'

const HomeScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
  </View>
);

const DetailsScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Details Screen</Text>
  </View>
);

const Tab = TabNavigator({
  Home: {
    screen: home,
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
  Home: {
    screen: Tab,
  },
  Details: {
    screen: index,
  },
});

export default RootNavigator;