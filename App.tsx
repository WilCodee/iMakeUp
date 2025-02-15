import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Screens from './src/screens/Root';

const App = () => {
  return (
    <NavigationContainer>
      <Screens />
    </NavigationContainer>
  );
};

export default App;
