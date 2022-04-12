import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import colors from '../../../constants/colors';
import {useNavigation} from '@react-navigation/core';

import {ScreensListTypeParams} from '../../../types/navigation/index';
import Images from '../../../assets/Images';

interface Props {
  title: string;
  subtitle: string;
  time: string;
  productImg: ImageSourcePropType;
  brandImg: ImageSourcePropType;
}

const Card = ({title, subtitle, time, productImg, brandImg}: Props) => {
  const {navigate} = useNavigation<ScreensListTypeParams>();

  const goToDetails = () => {
    navigate('DetailsProduct', {
      nameProductScreen: 'Velvet Mattes',
      photos: [Images.product1, Images.product2],
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
      onPress={goToDetails}
      style={{
        backgroundColor: colors.colorLight,
        borderRadius: 15,
        padding: 10,
        marginBottom: 20,
      }}
    >
      <View style={{flexDirection: 'row', marginBottom: 10}}>
        <Image
          source={brandImg}
          style={{width: 40, height: 40, borderRadius: 5}}
          resizeMode="contain"
        />
        <View style={{marginLeft: 8}}>
          <Text style={{fontWeight: 'bold'}}>{title}</Text>
          <Text>{time}</Text>
        </View>
      </View>
      <View>
        <Text style={{fontWeight: 'bold', marginBottom: 10}}>{subtitle}</Text>
        <Image
          source={productImg}
          style={{alignSelf: 'center', width: 250, height: 150}}
          resizeMode="contain"
        />
      </View>
    </TouchableOpacity>
  );
};

export default Card;
