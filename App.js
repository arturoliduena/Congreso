import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator, TabNavigator} from 'react-navigation';
import index from './index.js'
import newscreen from './newscreen.js'

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
    screen: index,
  },
  Notifications: {
    screen: index,
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
  newscreen: {
    screen: newscreen
  }
});

export default RootNavigator;