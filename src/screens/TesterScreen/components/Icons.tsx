import {View, Text, Image, ImageSourcePropType} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-elements';
import colors from '../../../constants/colors';

const Icons = ({icon, img}: {icon?: string; img?: ImageSourcePropType}) => {
  return (
    <View
      style={{
        backgroundColor: colors.colorLight,
        padding: 8,
        marginRight: 8,
        borderRadius: 5,
      }}
    >
      {icon && <Icon name={icon} size={40} color="#000" tvParallaxProperties />}
      {img && (
        <Image
          source={img}
          style={{width: 40, height: 40}}
          resizeMode="contain"
        />
      )}
    </View>
  );
};

export default Icons;
