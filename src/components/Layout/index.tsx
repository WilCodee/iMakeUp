import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import React from 'react';
import colors from '../../constants/colors';
import {Icon} from 'react-native-elements';

interface Props {
  title: string;
  children: React.ReactNode;
  search?: boolean;
}

const Layout = ({title, children, search}: Props) => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          backgroundColor: colors.colorLight,
          paddingTop: 15,
          paddingBottom: 10,
          paddingHorizontal: 15,
        }}
      >
        <Text
          style={{
            color: colors.primaryColor,
            fontSize: 28,
            fontWeight: 'bold',
            marginBottom: 10,
          }}
        >
          {title}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              width: search ? '91%' : '100%',
              flexDirection: 'row',
              backgroundColor: colors.mainColor,
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingVertical: 5,
              paddingHorizontal: 10,
              borderRadius: 10,
            }}
          >
            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center'}}
            >
              <Icon
                tvParallaxProperties
                name="search"
                size={18}
                color={colors.secondaryColor}
              />
              <TextInput
                placeholder="Buscar"
                style={{width: '90%', marginVertical: -10}}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon
                tvParallaxProperties
                name="mic"
                color={colors.secondaryColor}
                size={18}
              />
            </TouchableOpacity>
          </View>
          {search && (
            <Icon
              tvParallaxProperties
              name="sort"
              size={25}
              color={colors.secondaryColor}
            />
          )}
        </View>
      </View>
      {children}
    </View>
  );
};

export default Layout;
