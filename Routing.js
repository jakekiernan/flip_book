import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { HomeScreen, ReadScreen } from './views';

const Navigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Read: { screen: ReadScreen },
});

export const Main = createAppContainer(Navigator);
