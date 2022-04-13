import {StackNavigationProp} from '@react-navigation/stack';
import {ImageSourcePropType} from 'react-native';

export interface DetailParamsType {
  nameProductScreen: string;
  photos: ImageSourcePropType[];
  colors: string[];
  nameProduct: string;
  brand: string;
  details: string;
  benefits: string;
}

interface MainScreensType {
  screen: string;
}

export type ScreensListTypeParams = StackNavigationProp<{
  DetailsProduct: DetailParamsType;
  MainScreens: MainScreensType;
}>;
