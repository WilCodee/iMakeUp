import {ScrollView} from 'react-native';
import React from 'react';
import Layout from '../../components/Layout';
import colors from '../../constants/colors';
import Card from './components/Card';
import Images from '../../assets/Images';

const TutorialsScreen = () => {
  return (
    <Layout title="Tutoriales">
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          backgroundColor: colors.mainColor,
          paddingTop: 10,
          paddingHorizontal: 15,
        }}
      >
        <Card
          thumbnail={Images.tutorialLips}
          title="Tutorial de Labios"
          subtitle="Aprende a sacarle provecho a tus labios."
        />
        <Card
          thumbnail={Images.tutorialEyes}
          title="Tutorial de Labios"
          subtitle="Aprende a sacarle provecho a tus labios."
        />
        <Card
          thumbnail={Images.tutorialLips}
          title="Tutorial de Labios"
          subtitle="Aprende a sacarle provecho a tus labios."
        />
        <Card
          thumbnail={Images.tutorialEyes}
          title="Tutorial de Labios"
          subtitle="Aprende a sacarle provecho a tus labios."
        />
      </ScrollView>
    </Layout>
  );
};

export default TutorialsScreen;
