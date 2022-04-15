import {View, Text, ImageSourcePropType} from 'react-native';
import React from 'react';
import Card from './Card';
import colors from '../../../constants/colors';

const LayoutLooks = ({
  title,
  data,
}: {
  title: string;
  data: {
    id: number;
    title: string;
    image: ImageSourcePropType;
    brand: string;
    price: string;
    color: string;
  }[];
}) => {
  return (
    <View style={{marginBottom: 20}}>
      <Text style={{marginBottom: 10}}>{title}</Text>

      <View style={{borderRadius: 20, backgroundColor: colors.colorLight}}>
        {data.map((item, i) => (
          <Card
            key={i}
            index={i}
            title={item.title}
            brand={item.brand}
            color={item.color}
            price={item.price}
            image={item.image}
          />
        ))}
      </View>
    </View>
  );
};

export default LayoutLooks;
