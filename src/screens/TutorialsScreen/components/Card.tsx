import {
  View,
  Text,
  ImageSourcePropType,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import colors from '../../../constants/colors';

const Card = ({
  title,
  subtitle,
  thumbnail,
}: {
  title: string;
  subtitle: string;
  thumbnail: ImageSourcePropType;
}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: colors.colorLight,
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginBottom: 10,
      }}
    >
      <View
        style={{
          width: Dimensions.get('window').width * 0.87,
          marginBottom: 10,
        }}
      >
        <Image
          source={thumbnail}
          style={{
            width: '100%',
            borderRadius: 10,
          }}
          resizeMode="contain"
        />
      </View>
      <Text style={{color: 'black', fontWeight: 'bold'}}>{title}</Text>
      <Text style={{color: colors.secondaryColor}}>{subtitle}</Text>
    </TouchableOpacity>
  );
};

export default Card;
