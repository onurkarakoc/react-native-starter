import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import ListScreen from './screens/ListScreen';
import ComponentsScreen from './screens/ComponentsScreen';


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

const App =  createAppContainer(navigator);

export default App;
