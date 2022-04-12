import {View, Text, TouchableOpacity, ViewStyle, StyleProp} from 'react-native';
import React from 'react';
import colors from '../../constants/colors';
import {Icon} from 'react-native-elements';

interface PropsType {
  title: string;
  icon: string;
  // style: StyleProp<ViewStyle>;
  style: any;
}

const Default = ({title, icon, style}: PropsType) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primaryColor,
        paddingVertical: 10,
        borderRadius: 10,
        ...style,
      }}
    >
      <Icon name={icon} color={colors.colorLight} tvParallaxProperties />
      <Text style={{color: colors.colorLight}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Default;
