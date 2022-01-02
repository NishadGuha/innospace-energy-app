import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import deviceList from '../consts/deviceList'
import { LinearGradient } from 'expo-linear-gradient';


export default function Devices({ navigation}) {

    const pressHandlerDeviceInfo = (id) => {
        navigation.navigate('Info', { device: id })
    }

    return (
        <LinearGradient
            colors={['#ff4b1f', '#1fddff']}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 1}}
            style={styles.gradient}
        >
        <View style={styles.container}>
        {
            deviceList.map((u, i) => {
                return (
                <Card style={styles.cardContainerStyle} key={i}>
                <Card.Title>{u.name}</Card.Title>
                <Card.Divider/>
                    <TouchableOpacity onPress={() => pressHandlerDeviceInfo(u.id)}>
                        <View key={i} style={styles.device}>
                            <Image
                                style={styles.image}
                                resizeMode="cover"
                                source={{ uri: u.avatar }}
                            />
                        </View>
                    </TouchableOpacity>
                </Card>
                )
            })
        }
        </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    device: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    name: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    gradient: {
        width: '100%',
        height: '100%',
    },
    container: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    cardContainerStyle: {
        padding: 10,
        backgroundColor: 'white',
        borderWidth:0,
        marginBottom:10,
        marginLeft:10,
        marginRight:10,
        borderColor:'#808080',
        marginTop:50,
        elevation: 10,
    }
})
