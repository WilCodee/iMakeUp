import {ScrollView} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import React from 'react';

import Card from './Card';
import colors from '../../constants/colors';

type RootStackParamList = {
  params: {
    data: {
      id: number;
      title: string;
      image: any;
      brand: string;
      price: string;
      color: string;
    }[];
  };
};

type Props = RouteProp<RootStackParamList>;

const CustomScreen = ({route}: {route: Props}) => {
  const data = route.params.data;

  return (
    <ScrollView
      style={{
        backgroundColor: colors.mainColor,
        paddingTop: 10,
        paddingHorizontal: 15,
      }}
    >
      {data?.map(d => (
        <Card
          key={d.id}
          title={d.title}
          image={d.image}
          brand={d.brand}
          price={d.price}
          color={d.color}
        />
      ))}
    </ScrollView>
  );
};

export default CustomScreen;
