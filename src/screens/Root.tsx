import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreens from './MainScreens';
import DetailsProductScreen from './DetailsProductScreen';

const Stack = createStackNavigator();

const Root = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="MainScreens" component={MainScreens} />
      <Stack.Screen name="DetailsProduct" component={DetailsProductScreen} />
    </Stack.Navigator>
  );
};

export default Root;
