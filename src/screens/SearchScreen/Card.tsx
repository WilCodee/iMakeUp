import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import colors from '../../constants/colors';
import {Icon} from 'react-native-elements';

const Card = ({
  title,
  image,
  brand,
  price,
  color,
}: {
  title: string;
  image: any;
  brand: string;
  price: string;
  color: string;
}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: colors.colorLight,
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
      }}
    >
      <View style={{flexDirection: 'row'}}>
        <Image
          source={image}
          style={{width: 65, height: 60}}
          resizeMode="contain"
        />
        <View style={{marginLeft: 10}}>
          <Text style={{fontWeight: 'bold', color: 'black'}}>{title}</Text>
          <Text style={{color: colors.secondaryColor}}>{brand}</Text>
          <Text style={{color: colors.secondaryColor}}>${price}</Text>
        </View>
      </View>
      <View
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Icon
          name="keyboard-arrow-right"
          size={30}
          color={colors.secondaryColor}
          tvParallaxProperties
        />
        <View
          style={{
            backgroundColor: color,
            borderRadius: 5,
            height: 25,
            width: 25,
          }}
        ></View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
