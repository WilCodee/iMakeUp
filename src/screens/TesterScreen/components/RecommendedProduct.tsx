import {View, Text, Image, ImageSourcePropType} from 'react-native';
import React from 'react';
import colors from '../../../constants/colors';

const RecommendedProduct = ({
  img,
  productName,
  productBrand,
}: {
  img: ImageSourcePropType;
  productName: string;
  productBrand: string;
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: colors.colorLight,
        paddingVertical: 5,
        paddingRight: 10,
        borderRadius: 5,
        marginRight: 10,
      }}
    >
      <Image
        source={img}
        style={{width: 45, height: 40}}
        resizeMode="contain"
      />
      <View style={{marginLeft: 10}}>
        <Text style={{fontSize: 8, fontWeight: 'bold', color: 'black'}}>
          {productName}
        </Text>
        <Text style={{fontSize: 8, color: colors.secondaryColor}}>
          {productBrand}
        </Text>
        <Text style={{fontSize: 8, color: colors.primaryColor}}>
          Recomendado
        </Text>
      </View>
    </View>
  );
};

export default RecommendedProduct;
