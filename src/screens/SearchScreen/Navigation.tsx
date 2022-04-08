import {Dimensions} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import colors from '../../constants/colors';
import CustomScreen from './CustomScreen';
import Images from '../../assets/Images';

const Tab = createMaterialTopTabNavigator();

const screens = [
  {
    name: 'todo',
    data: [
      {
        id: 1,
        title: 'Velvet Mattes Sunkiss',
        image: Images.product2,
        brand: 'Max Factor',
        price: '70.000',
        color: 'brown',
      },
      {
        id: 2,
        title: 'Velvet Mattes Sunkiss',
        image: Images.product1,
        brand: 'Max Factor',
        price: '70.000',
        color: 'blue',
      },
      {
        id: 3,
        title: 'Velvet Mattes Sunkiss',
        image: Images.product2,
        brand: 'Max Factor',
        price: '70.000',
        color: 'yellow',
      },
      {
        id: 4,
        title: 'Velvet Mattes Sunkiss',
        image: Images.product2,
        brand: 'Max Factor',
        price: '70.000',
        color: 'yellow',
      },
      {
        id: 5,
        title: 'Velvet Mattes Sunkiss',
        image: Images.product2,
        brand: 'Max Factor',
        price: '70.000',
        color: 'yellow',
      },
      {
        id: 6,
        title: 'Velvet Mattes Sunkiss',
        image: Images.product2,
        brand: 'Max Factor',
        price: '70.000',
        color: 'yellow',
      },
    ],
  },
  {
    name: 'Lapiz Labial',
    data: [
      {
        id: 1,
        title: 'Velvet Mattes Sunkiss',
        image: Images.product2,
        brand: 'Max Factor',
        price: '70.000',
        color: 'brown',
      },
      {
        id: 2,
        title: 'Velvet Mattes Sunkiss',
        image: Images.product1,
        brand: 'Max Factor',
        price: '70.000',
        color: 'blue',
      },
      {
        id: 3,
        title: 'Velvet Mattes Sunkiss',
        image: Images.product2,
        brand: 'Max Factor',
        price: '70.000',
        color: 'yellow',
      },
      {
        id: 4,
        title: 'Velvet Mattes Sunkiss',
        image: Images.product2,
        brand: 'Max Factor',
        price: '70.000',
        color: 'yellow',
      },
      {
        id: 5,
        title: 'Velvet Mattes Sunkiss',
        image: Images.product2,
        brand: 'Max Factor',
        price: '70.000',
        color: 'yellow',
      },
      {
        id: 6,
        title: 'Velvet Mattes Sunkiss',
        image: Images.product2,
        brand: 'Max Factor',
        price: '70.000',
        color: 'yellow',
      },
    ],
  },
  {
    name: 'Base',
    data: [
      {
        id: 1,
        title: 'Velvet Mattes Sunkiss',
        image: Images.product2,
        brand: 'Max Factor',
        price: '70.000',
        color: 'brown',
      },
      {
        id: 2,
        title: 'Velvet Mattes Sunkiss',
        image: Images.product1,
        brand: 'Max Factor',
        price: '70.000',
        color: 'blue',
      },
      {
        id: 3,
        title: 'Velvet Mattes Sunkiss',
        image: Images.product2,
        brand: 'Max Factor',
        price: '70.000',
        color: 'yellow',
      },
      {
        id: 4,
        title: 'Velvet Mattes Sunkiss',
        image: Images.product2,
        brand: 'Max Factor',
        price: '70.000',
        color: 'yellow',
      },
      {
        id: 5,
        title: 'Velvet Mattes Sunkiss',
        image: Images.product2,
        brand: 'Max Factor',
        price: '70.000',
        color: 'yellow',
      },
      {
        id: 6,
        title: 'Velvet Mattes Sunkiss',
        image: Images.product2,
        brand: 'Max Factor',
        price: '70.000',
        color: 'yellow',
      },
    ],
  },
  {
    name: 'Cejar',
    data: [
      {
        id: 1,
        title: 'Velvet Mattes Sunkiss',
        image: Images.product2,
        brand: 'Max Factor',
        price: '70.000',
        color: 'brown',
      },
      {
        id: 2,
        title: 'Velvet Mattes Sunkiss',
        image: Images.product1,
        brand: 'Max Factor',
        price: '70.000',
        color: 'blue',
      },
      {
        id: 3,
        title: 'Velvet Mattes Sunkiss',
        image: Images.product2,
        brand: 'Max Factor',
        price: '70.000',
        color: 'yellow',
      },
      {
        id: 4,
        title: 'Velvet Mattes Sunkiss',
        image: Images.product2,
        brand: 'Max Factor',
        price: '70.000',
        color: 'yellow',
      },
      {
        id: 5,
        title: 'Velvet Mattes Sunkiss',
        image: Images.product2,
        brand: 'Max Factor',
        price: '70.000',
        color: 'yellow',
      },
      {
        id: 6,
        title: 'Velvet Mattes Sunkiss',
        image: Images.product2,
        brand: 'Max Factor',
        price: '70.000',
        color: 'yellow',
      },
    ],
  },
  {
    name: 'Espejo',
    data: [
      {
        id: 1,
        title: 'Velvet Mattes Sunkiss',
        image: Images.product2,
        brand: 'Max Factor',
        price: '70.000',
        color: 'brown',
      },
      {
        id: 2,
        title: 'Velvet Mattes Sunkiss',
        image: Images.product1,
        brand: 'Max Factor',
        price: '70.000',
        color: 'blue',
      },
      {
        id: 3,
        title: 'Velvet Mattes Sunkiss',
        image: Images.product2,
        brand: 'Max Factor',
        price: '70.000',
        color: 'yellow',
      },
      {
        id: 4,
        title: 'Velvet Mattes Sunkiss',
        image: Images.product2,
        brand: 'Max Factor',
        price: '70.000',
        color: 'yellow',
      },
      {
        id: 5,
        title: 'Velvet Mattes Sunkiss',
        image: Images.product2,
        brand: 'Max Factor',
        price: '70.000',
        color: 'yellow',
      },
      {
        id: 6,
        title: 'Velvet Mattes Sunkiss',
        image: Images.product2,
        brand: 'Max Factor',
        price: '70.000',
        color: 'yellow',
      },
    ],
  },
  {
    name: 'unas',
    data: [
      {
        id: 1,
        title: 'Velvet Mattes Sunkiss',
        image: Images.product2,
        brand: 'Max Factor',
        price: '70.000',
        color: 'brown',
      },
      {
        id: 2,
        title: 'Velvet Mattes Sunkiss',
        image: Images.product1,
        brand: 'Max Factor',
        price: '70.000',
        color: 'blue',
      },
      {
        id: 3,
        title: 'Velvet Mattes Sunkiss',
        image: Images.product2,
        brand: 'Max Factor',
        price: '70.000',
        color: 'yellow',
      },
      {
        id: 4,
        title: 'Velvet Mattes Sunkiss',
        image: Images.product2,
        brand: 'Max Factor',
        price: '70.000',
        color: 'yellow',
      },
      {
        id: 5,
        title: 'Velvet Mattes Sunkiss',
        image: Images.product2,
        brand: 'Max Factor',
        price: '70.000',
        color: 'yellow',
      },
      {
        id: 6,
        title: 'Velvet Mattes Sunkiss',
        image: Images.product2,
        brand: 'Max Factor',
        price: '70.000',
        color: 'yellow',
      },
    ],
  },
  {
    name: 'Cabello',
    data: [
      {
        id: 1,
        title: 'Velvet Mattes Sunkiss',
        image: Images.product2,
        brand: 'Max Factor',
        price: '70.000',
        color: 'brown',
      },
      {
        id: 2,
        title: 'Velvet Mattes Sunkiss',
        image: Images.product1,
        brand: 'Max Factor',
        price: '70.000',
        color: 'blue',
      },
      {
        id: 3,
        title: 'Velvet Mattes Sunkiss',
        image: Images.product2,
        brand: 'Max Factor',
        price: '70.000',
        color: 'yellow',
      },
      {
        id: 4,
        title: 'Velvet Mattes Sunkiss',
        image: Images.product2,
        brand: 'Max Factor',
        price: '70.000',
        color: 'yellow',
      },
      {
        id: 5,
        title: 'Velvet Mattes Sunkiss',
        image: Images.product2,
        brand: 'Max Factor',
        price: '70.000',
        color: 'yellow',
      },
      {
        id: 6,
        title: 'Velvet Mattes Sunkiss',
        image: Images.product2,
        brand: 'Max Factor',
        price: '70.000',
        color: 'yellow',
      },
    ],
  },
];

const Navigation = () => {
  return (
    <Tab.Navigator
      style={{
        height: Dimensions.get('window').height,
      }}
      screenOptions={{
        tabBarActiveTintColor: colors.primaryColor,
        tabBarInactiveTintColor: colors.secondaryColor,
        tabBarLabelStyle: {
          fontSize: 10,
        },
        tabBarIndicatorStyle: {width: 0, height: 0, elevation: 0},
        tabBarStyle: {
          backgroundColor: colors.mainColor,
          elevation: 0,
        },
        tabBarScrollEnabled: true,
      }}
    >
      <Tab.Group
        screenOptions={{
          tabBarItemStyle: {width: 80},
        }}
      >
        {screens.map((screen, i) => (
          <Tab.Screen
            key={i}
            name={screen.name}
            component={CustomScreen}
            initialParams={{data: screen.data}}
          />
        ))}
      </Tab.Group>
    </Tab.Navigator>
  );
};

export default Navigation;
