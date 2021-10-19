import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import deviceList from '../consts/deviceList'
import { LinearGradient } from 'expo-linear-gradient';


export default function Devices({ navigation}) {

    const formNavigator = (id) => {
        navigation.navigate('Info', { device: id })
    }

    return (
        <LinearGradient
            colors={['#7F7FD5', '#86A8E7', '#91EAE4']}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 1}}
            style={styles.gradient}
        >
        <View>
        {
            deviceList.map((u, i) => {
                return (
                <Card key={i}>
                <Card.Title>{u.name}</Card.Title>
                <Card.Divider/>
                    <TouchableOpacity onPress={() => formNavigator(u.id)}>
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
    }
})
