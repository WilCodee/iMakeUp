import {ScrollView} from 'react-native';
import React from 'react';
import Layout from '../../components/Layout';
import colors from '../../constants/colors';
import Images from '../../assets/Images';
import LayoutLooks from './components/LayoutLooks';

const MYLOOKS = [
  {
    title: 'Para el Trabajo',
    data: [
      {
        id: 1,
        title: 'Velvet Mattes Sunkiss',
        image: Images.product2,
        brand: 'Max Factor',
        price: '70.000',
        color: 'brown',
      },
      {
        id: 2,
        title: 'Velvet Mattes Sunkiss',
        image: Images.product1,
        brand: 'Max Factor',
        price: '70.000',
        color: 'blue',
      },
      {
        id: 3,
        title: 'Velvet Mattes Sunkiss',
        image: Images.product2,
        brand: 'Max Factor',
        price: '70.000',
        color: 'yellow',
      },
    ],
  },
  {
    title: 'Para la Casa',
    data: [
      {
        id: 1,
        title: 'Velvet Mattes Sunkiss',
        image: Images.product2,
        brand: 'Max Factor',
        price: '70.000',
        color: 'brown',
      },
      {
        id: 2,
        title: 'Velvet Mattes Sunkiss',
        image: Images.product1,
        brand: 'Max Factor',
        price: '70.000',
        color: 'blue',
      },
      {
        id: 3,
        title: 'Velvet Mattes Sunkiss',
        image: Images.product2,
        brand: 'Max Factor',
        price: '70.000',
        color: 'yellow',
      },
    ],
  },
  {
    title: 'Para la Iglesia',
    data: [
      {
        id: 1,
        title: 'Velvet Mattes Sunkiss',
        image: Images.product2,
        brand: 'Max Factor',
        price: '70.000',
        color: 'brown',
      },
      {
        id: 2,
        title: 'Velvet Mattes Sunkiss',
        image: Images.product1,
        brand: 'Max Factor',
        price: '70.000',
        color: 'blue',
      },
      {
        id: 3,
        title: 'Velvet Mattes Sunkiss',
        image: Images.product2,
        brand: 'Max Factor',
        price: '70.000',
        color: 'yellow',
      },
    ],
  },
];

const MyLooksScreen = () => {
  return (
    <Layout title="Mis Looks">
      <ScrollView
        style={{
          backgroundColor: colors.mainColor,
          paddingTop: 10,
          paddingHorizontal: 15,
        }}
      >
        {MYLOOKS.map((look, i) => (
          <LayoutLooks key={i} title={look.title} data={look.data} />
        ))}
      </ScrollView>
    </Layout>
  );
};

export default MyLooksScreen;
