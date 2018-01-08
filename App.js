import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator, TabNavigator} from 'react-navigation';
import index from './index.js';
import home from './Components/home.js';
import program from './Components/program.js';
import map from './Components/map.js';
import settings from './Components/settings.js';
import network from './Components/network.js';
import single from './Components/singleEvent.js';
import singleMap from './Components/singleMap.js'
import { MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons';

const Tab = TabNavigator({
  Home: {
    screen: home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor, focused }) => (
        <MaterialCommunityIcons
          name={'home'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Program: {
    screen: program,
    navigationOptions: {
      tabBarLabel: 'Program',
      tabBarIcon: ({ tintColor, focused }) => (
        <MaterialCommunityIcons
          name={'calendar-blank'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    }
  },
  Map: {
    screen: map,
    navigationOptions: {
      tabBarLabel: 'Map',
      tabBarIcon: ({ tintColor, focused }) => (
        <MaterialCommunityIcons
          name={'map-marker'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    }
  },
  Settings: {
    screen: settings,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({ tintColor, focused }) => (
        <MaterialCommunityIcons
          name={'settings'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    }
  },
  Network: {
    screen: network,
    navigationOptions: {
      tabBarLabel: 'Network',
      tabBarIcon: ({ tintColor, focused }) => (
        <MaterialIcons
          name={'people'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    }
  },
}, {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#ffffff',
    showIcon: true,
    showLabel: false,
    indicatorStyle: {
      borderBottomColor: '#ffffff',
      borderBottomWidth: 2
    },
    style:{
      backgroundColor: '#ff0037'
    }
  },
});


const RootNavigator = StackNavigator({
  Home: {
    screen: Tab,
  },
  Details: {
    screen: index,
  },
  Single: {
    screen : single
  },
  SingleMap: {
    screen : singleMap
  }
});

export default RootNavigator;