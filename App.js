import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { HomeScreen } from './views/HomeScreen'
import { ReadScreen } from './views/ReadScreen'

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Read: {screen: ReadScreen},
});

const App = createAppContainer(MainNavigator);

export default App;
