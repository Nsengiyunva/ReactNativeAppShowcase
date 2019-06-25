import { createAppContainer, createStackNavigator } from 'react-navigation';
import SignInNavigator from './SignIn';
import SplashScreen from './SplashScreen';
import GuideScreens from './GuideScreens';
import BottomMenuScreen from '../components/BottomMenu/BottomMenu';
import EditAccountScreen from './EditAccount';
import AccountDetails from './AccountDetails';
import CreateAccount from './CreateAccount'

const navigator = createStackNavigator({
  Splash: SplashScreen,
  Guide: GuideScreens,
  SignIn: SignInNavigator,
  EditAccount: EditAccountScreen,
  CreateAccount,
  AccountDetails,
  BottomMenu: BottomMenuScreen
}, {
  defaultNavigationOptions: {
    // screen: '',
    header: null
  },
  // initialRouteName: 'Splash'
});

export default createAppContainer(navigator);
