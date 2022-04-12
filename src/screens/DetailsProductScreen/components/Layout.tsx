import {View, Text, TouchableOpacity} from 'react-native';
import React, {ReactNode} from 'react';
import {Icon} from 'react-native-elements';
import colors from '../../../constants/colors';
import {useNavigation} from '@react-navigation/core';

const Layout = ({
  nameProductScreen,
  children,
}: {
  nameProductScreen: string;
  children: ReactNode;
}) => {
  const {goBack} = useNavigation();

  const handlePress = () => {
    goBack();
  };

  return (
    <View style={{paddingVertical: 10, paddingHorizontal: 20}}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={handlePress}>
          <Icon
            tvParallaxProperties
            name="west"
            color={colors.secondaryColor}
            size={20}
          />
        </TouchableOpacity>
        <Text style={{width: '90%', textAlign: 'center'}}>
          {nameProductScreen}
        </Text>
      </View>
      <View>{children}</View>
    </View>
  );
};

export default Layout;
