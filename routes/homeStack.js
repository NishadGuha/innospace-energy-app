import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from '../components/home';
import Devices from '../components/devices';
import Info from '../components/info';

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
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);