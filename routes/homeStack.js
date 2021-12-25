import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { StyleSheet, Text, View, Button, TouchableOpacity, Dimensions, Image } from 'react-native'
import Home from '../components/home';
import Devices from '../components/devices';
import Info from '../components/info';
import Settings from '../components/settings';
import News from '../components/news';
import Form from '../components/form';

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
    },
    News: {
        screen: News,
    },
    Form: {
        screen: Form,
    },
}

const options = {
    navigationOptions: {
      headerBackground: () => (
        <Image
            style={styles.image}
            resizeMode="cover"
            source={{ uri: "https://images.assetsdelivery.com/compings_v2/amin268/amin2681807/amin268180700301.jpg" }}
        />
      ),
    }
};

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
})

const HomeStack = createStackNavigator(screens, options);

export default createAppContainer(HomeStack);