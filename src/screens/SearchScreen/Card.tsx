import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import colors from '../../constants/colors';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/core';
import {ScreensListTypeParams} from '../../types/navigation';
import Images from '../../assets/Images';

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
  const {navigate} = useNavigation<ScreensListTypeParams>();

  const handlePress = () => {
    navigate('DetailsProduct', {
      nameProductScreen: 'Gucii Gang',
      photos: [
        Images.product1,
        Images.product2,
        Images.product1,
        Images.product2,
      ],
      colors: ['red', 'blue', 'pink', 'yellow'],
      nameProduct: 'Velvet Mattes Sunkiss',
      brand: 'Max Factor',
      details:
        'La barra de labios Velvet Matte está diseñada para crear un labio mate llamativo con una sensación de terciopelo.',

      benefits:
        'Acabado satinado mate suave.La fórmula mate está impregnada de aceites y mantecas para una sensación de hidratación aterciopelada.',
    });
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
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
