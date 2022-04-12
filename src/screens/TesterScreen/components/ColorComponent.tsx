import {View, Text} from 'react-native';
import React from 'react';

const ColorComponent = ({color}: {color: string}) => {
  return (
    <View
      style={{
        alignItems: 'center',
        marginRight: 10,
      }}
    >
      <View
        style={{
          backgroundColor: color,
          width: 30,
          height: 30,
          borderRadius: 30,
        }}
      ></View>
      <Text style={{fontSize: 10}}>{color}</Text>
    </View>
  );
};

export default ColorComponent;
