import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import colors from '../../../constants/colors';

interface Props {
  title: string;
  subtitle: string;
  time: string;
  productImg: ImageSourcePropType;
  brandImg: ImageSourcePropType;
}

const Card = ({title, subtitle, time, productImg, brandImg}: Props) => {
  return (
    <TouchableOpacity
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
