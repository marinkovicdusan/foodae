import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

import Asiatisch from '../screens/restaurant/asiatisch/asiatisch';
import Chinesisch from '../screens/restaurant/asiatisch/chinesisch/chinesisch';
import Chinesisch20 from '../screens/restaurant/asiatisch/chinesisch/preise/20';
import Chinesisch30 from '../screens/restaurant/asiatisch/chinesisch/preise/30';
import Chinesischalles from '../screens/restaurant/asiatisch/chinesisch/preise/alles';

import Döner from '../screens/restaurant/döner/döner';

import Fastfood from '../screens/restaurant/fastfood/fastfood';
import Fastfood10 from '../screens/restaurant/fastfood/preise/10';
import Fastfood20 from '../screens/restaurant/fastfood/preise/20';
import Fastfood30 from '../screens/restaurant/fastfood/preise/30';
import Fastfoodalles from '../screens/restaurant/fastfood/preise/alles';

import Italienisch from '../screens/restaurant/italienisch/italienisch';
//Pasta
import Pasta from '../screens/restaurant/italienisch/pasta/pasta';
import Pasta20 from '../screens/restaurant/italienisch/pasta/preise/20';
import Pasta30 from '../screens/restaurant/italienisch/pasta/preise/30';
import Pastaalles from '../screens/restaurant/italienisch/pasta/preise/alles';
//Pizza
import Pizzaalles from '../screens/restaurant/italienisch/pizza/preise/alles';

import Alles from '../screens/restaurant/alles/alles';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Links: LinksScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,

  //Asiatisch
  asiatisch: Asiatisch,
  chinesisch: Chinesisch, //Chinesisch
  chinesisch20: Chinesisch20,
  chinesisch30: Chinesisch30,
  chinesischalles: Chinesischalles,

  //Fastfood
  fastfood: Fastfood,
  fastfood10: Fastfood10,
  fastfood20: Fastfood20,
  fastfood30: Fastfood30,
  fastfoodalles: Fastfoodalles,

  //Döner
  döner: Döner,

  //Italienisch
  italienisch: Italienisch,
  pasta: Pasta, // Pasta
  pasta20: Pasta20,
  pasta30: Pasta30,
  pastaalles: Pastaalles,
  pizzaalles: Pizzaalles,
  alles: Alles
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Restaurants',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Informationen',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
});
