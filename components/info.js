import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import deviceList from '../consts/deviceList'

export default function Info({ navigation, route }) {

    const device = deviceList.find(x => x.id == 'f625e473-1a69-4e80-86c3-757380c7023b');

    let deviceData = [];
    Object.keys(device).forEach(x => {
        if(x != 'id' && x != 'avatar') {
            deviceData.push({
                key: `The ${x} is ${device[x]}`,
            })
        }
    });

    return (
        <View style={styles.container}>
            <FlatList
                data={deviceData}
                renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
            />
        </View>            
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})


