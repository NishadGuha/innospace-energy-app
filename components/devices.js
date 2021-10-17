import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import deviceList from '../consts/deviceList'

export default function Devices({ navigation}) {

    const formNavigator = (id) => {
        navigation.navigate('Info', { device: id })
    }

    return (
        <View>
            <Card>
            <Card.Title>List of devices</Card.Title>
            <Card.Divider/>
            {
                deviceList.map((u, i) => {
                return (
                    <TouchableOpacity onPress={formNavigator(u.id)}>
                    <View key={i} style={styles.device}>
                    <Text style={styles.name}>{u.name}</Text>
                    <Image
                        style={styles.image}
                        resizeMode="cover"
                        source={{ uri: u.avatar }}
                    />
                    </View>
                    </TouchableOpacity>
                );
                })
            }
            </Card>
        </View>
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
})