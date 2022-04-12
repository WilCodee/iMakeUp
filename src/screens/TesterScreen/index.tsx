import {View, Text, Image, FlatList} from 'react-native';
import React from 'react';
import colors from '../../constants/colors';
import Images from '../../assets/Images';
import Buttons from '../../components/Buttons';
import * as IconCompent from './components/Icons';
import Icons from '../../assets/Icons';
import ColorComponent from './components/ColorComponent';
import RecommendedProduct from './components/RecommendedProduct';

const DATA = [
  {id: 0, icon: 'palette'},
  {id: 1, img: Icons.lips},
  {id: 3, img: Icons.eyebrow},
  {id: 2, icon: 'remove-red-eye'},
  {id: 4, img: Icons.eyebrow},
  {id: 5, icon: 'wb-sunny'},
];

const COLORDATA = [
  {id: 0, color: 'red'},
  {id: 1, color: 'yellow'},
  {id: 3, color: 'brown'},
  {id: 2, color: 'black'},
  {id: 4, color: 'pink'},
  {id: 5, color: 'blue'},
];

const RECOMMENDEDPRODUCT = [
  {
    id: 0,
    img: Images.product1,
    productName: 'Velvet Mattes Sunkiss',
    productBrand: 'Max Factor',
  },
  {
    id: 1,
    img: Images.product1,
    productName: 'Velvet Mattes Sunkiss',
    productBrand: 'Max Factor',
  },
  {
    id: 3,
    img: Images.product1,
    productName: 'Velvet Mattes Sunkiss',
    productBrand: 'Max Factor',
  },
  {
    id: 2,
    img: Images.product1,
    productName: 'Velvet Mattes Sunkiss',
    productBrand: 'Max Factor',
  },
  {
    id: 4,
    img: Images.product1,
    productName: 'Velvet Mattes Sunkiss',
    productBrand: 'Max Factor',
  },
  {
    id: 5,
    img: Images.product1,
    productName: 'Velvet Mattes Sunkiss',
    productBrand: 'Max Factor',
  },
];

const TesterScreen = () => {
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
          Probador
        </Text>
      </View>

      <View
        style={{
          alignItems: 'center',
          marginHorizontal: 10,
        }}
      >
        <View style={{position: 'relative'}}>
          <Image
            source={Images.womanTester}
            style={{width: 370, height: 570}}
            resizeMode="contain"
          />

          <View
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
              width: '100%',
              position: 'absolute',
              bottom: 28,
            }}
          >
            <View
              style={{
                marginLeft: 20,
                marginVertical: 10,
              }}
            >
              <FlatList
                data={COLORDATA}
                style={{marginBottom: 7}}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => <ColorComponent color={item.color} />}
              />
              <FlatList
                data={RECOMMENDEDPRODUCT}
                style={{marginBottom: 7}}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (
                  <RecommendedProduct
                    img={item.img}
                    productBrand={item.productBrand}
                    productName={item.productName}
                  />
                )}
              />
              <FlatList
                data={DATA}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (
                  <IconCompent.default icon={item.icon} img={item.img} />
                )}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'center',
          }}
        >
          <Buttons.Default
            title="Guardar Look"
            icon="bookmark"
            style={{
              width: '48%',
            }}
          />
          <Buttons.Default
            title="Buscar Tienda"
            icon="shopping-cart"
            style={{
              width: '48%',
              marginLeft: 10,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default TesterScreen;
