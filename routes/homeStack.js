import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from '../components/home';
import Devices from '../components/devices';
import Info from '../components/info';
import Settings from '../components/settings';

const screens = {
    Home: {
        screen: Home,
    },
    Devices: {
        screen: Devices,
    },
    Info: {
        screen: Info,
    },
    Settings: {
        screen: Settings,
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);