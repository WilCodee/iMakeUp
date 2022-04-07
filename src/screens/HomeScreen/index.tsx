import React from 'react';
import Layout from '../../components/Layout';
import Card from './components/Card';
import Images from '../../assets/Images';

const HomeScreen = () => {
  return (
    <Layout title="Inicio">
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
    </Layout>
  );
};

export default HomeScreen;
