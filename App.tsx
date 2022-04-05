import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './src/screens/HomeScreen';
import {Icon} from 'react-native-elements';
import colors from './src/constants/colors';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
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
                color={
                  icon.focused ? colors.primaryColor : colors.secondaryColor
                }
                tvParallaxProperties
              />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={HomeScreen}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: icon => (
              <Icon
                name="search"
                size={icon.size}
                color={
                  icon.focused ? colors.primaryColor : colors.secondaryColor
                }
                tvParallaxProperties
              />
            ),
          }}
        />
        <Tab.Screen
          name="Tester"
          component={HomeScreen}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: icon => (
              <Icon
                name="face"
                size={icon.size}
                color={
                  icon.focused ? colors.primaryColor : colors.secondaryColor
                }
                tvParallaxProperties
              />
            ),
          }}
        />
        <Tab.Screen
          name="My Looks"
          component={HomeScreen}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: icon => (
              <Icon
                name="bookmark"
                type="feather"
                size={icon.size}
                color={
                  icon.focused ? colors.primaryColor : colors.secondaryColor
                }
                tvParallaxProperties
              />
            ),
          }}
        />
        <Tab.Screen
          name="Tutorials"
          component={HomeScreen}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: icon => (
              <Icon
                name="video"
                type="octicon"
                size={icon.size}
                color={
                  icon.focused ? colors.primaryColor : colors.secondaryColor
                }
                tvParallaxProperties
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
