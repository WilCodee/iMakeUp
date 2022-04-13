import React from 'react';

import {RouteProp, useNavigation, useRoute} from '@react-navigation/core';
import Layout from './components/Layout';
import {DetailParamsType, ScreensListTypeParams} from '../../types/navigation';
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';
import colors from '../../constants/colors';
import {Icon} from 'react-native-elements';

const DetailsProductScreen = () => {
  const {navigate} = useNavigation<ScreensListTypeParams>();
  const {params} = useRoute<RouteProp<Record<string, DetailParamsType>>>();

  const handlePress = () => {
    navigate('MainScreens', {screen: 'Tester'});
  };

  return (
    <ScrollView>
      <Layout nameProductScreen={params.nameProductScreen}>
        <View>
          <SwiperFlatList
            showPagination
            paginationActiveColor={colors.secondaryColor}
            paginationDefaultColor={colors.mainColor}
            paginationStyleItem={{width: 8, height: 8}}
            style={{
              marginVertical: 10,
            }}
          >
            <View
              style={{
                backgroundColor: colors.colorLight,
                width: Dimensions.get('screen').width * 0.9,
                height: 250,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
              }}
            >
              <Image
                source={params.photos[1]}
                style={{
                  width: 200,
                  height: 150,
                }}
                resizeMode="contain"
              />
            </View>
            <View
              style={{
                backgroundColor: colors.colorLight,
                width: Dimensions.get('screen').width * 0.9,
                height: 250,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
              }}
            >
              <Image
                source={params.photos[1]}
                style={{
                  width: 200,
                  height: 150,
                }}
                resizeMode="contain"
              />
            </View>
            <View
              style={{
                backgroundColor: colors.colorLight,
                width: Dimensions.get('screen').width * 0.9,
                height: 250,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
              }}
            >
              <Image
                source={params.photos[1]}
                style={{
                  width: 200,
                  height: 150,
                }}
                resizeMode="contain"
              />
            </View>
          </SwiperFlatList>
        </View>

        <View style={{flexDirection: 'row', marginTop: 20}}>
          {params.colors.map((color, i) => (
            <View
              key={i}
              style={{
                width: 20,
                height: 20,
                borderRadius: 20,
                marginRight: 10,
                backgroundColor: color,
              }}
            ></View>
          ))}
        </View>

        <View style={{marginTop: 20}}>
          <Text style={{fontWeight: 'bold', color: colors.primaryColor}}>
            {params.nameProduct}
          </Text>
          <Text style={{fontWeight: 'bold', color: '#000'}}>
            {params.brand}
          </Text>
          <Text style={{}}>{params.details}</Text>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={{fontWeight: 'bold', color: colors.primaryColor}}>
            Beneficios
          </Text>
          <Text>{params.benefits}</Text>
        </View>
      </Layout>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 20,
        }}
      >
        <TouchableOpacity
          onPress={handlePress}
          style={{
            width: '90%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.primaryColor,
            paddingVertical: 10,
            borderRadius: 10,
          }}
        >
          <Icon name="face" color={colors.colorLight} tvParallaxProperties />
          <Text style={{color: colors.colorLight}}>Pruebatelo</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default DetailsProductScreen;
