import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';

import HomeScreen from './HomeScreen';
import colors from '../constants/colors';
import SearchScreen from './SearchScreen';
import TesterScreen from './TesterScreen';
import MyLooksScreen from './MyLooksScreen';
import TutorialsScreen from './TutorialsScreen';

const Tab = createBottomTabNavigator();

const MainScreens = () => {
  return (
    <Tab.Navigator
      initialRouteName="Tutorials"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: icon => (
            <Icon
              type="feather"
              name="home"
              size={icon.size}
              color={icon.focused ? colors.primaryColor : colors.secondaryColor}
              tvParallaxProperties
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: icon => (
            <Icon
              name="search"
              size={icon.size}
              color={icon.focused ? colors.primaryColor : colors.secondaryColor}
              tvParallaxProperties
            />
          ),
        }}
      />
      <Tab.Screen
        name="Tester"
        component={TesterScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: icon => (
            <Icon
              name="face"
              size={icon.size}
              color={icon.focused ? colors.primaryColor : colors.secondaryColor}
              tvParallaxProperties
            />
          ),
        }}
      />
      <Tab.Screen
        name="My Looks"
        component={MyLooksScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: icon => (
            <Icon
              name="bookmark"
              type="feather"
              size={icon.size}
              color={icon.focused ? colors.primaryColor : colors.secondaryColor}
              tvParallaxProperties
            />
          ),
        }}
      />
      <Tab.Screen
        name="Tutorials"
        component={TutorialsScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: icon => (
            <Icon
              name="video"
              type="octicon"
              size={icon.size}
              color={icon.focused ? colors.primaryColor : colors.secondaryColor}
              tvParallaxProperties
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainScreens;
