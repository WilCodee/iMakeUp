import React from 'react';
import Layout from '../../components/Layout';
import Card from './components/Card';
import Images from '../../assets/Images';
import {ScrollView} from 'react-native';
import colors from '../../constants/colors';

const HomeScreen = () => {
  return (
    <Layout title="Inicio">
      <ScrollView
        style={{
          backgroundColor: colors.mainColor,
          paddingTop: 10,
          paddingHorizontal: 15,
        }}
      >
        <Card
          productImg={Images.product1}
          brandImg={Images.productBrand}
          title="Max Factor"
          time="20 min"
          subtitle="Prueba el nueva Lash Crown Mascara"
        />
        <Card
          productImg={Images.product2}
          brandImg={Images.productBrand}
          title="Max Factor"
          time="20 min"
          subtitle="Prueba el nueva Lash Crown Mascara"
        />
        <Card
          productImg={Images.product1}
          brandImg={Images.productBrand}
          title="Max Factor"
          time="20 min"
          subtitle="Prueba el nueva Lash Crown Mascara"
        />
      </ScrollView>
    </Layout>
  );
};

export default HomeScreen;
