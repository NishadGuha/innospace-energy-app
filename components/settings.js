import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button } from 'react-native'
import settingsOptions from '../consts/settingsOptions'


export default function Settings() {
    return (
        <View>
            <FlatList
                data={settingsOptions}
                renderItem={({item}) => <TouchableOpacity style={styles.item}><Button title={item.key}/></TouchableOpacity>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
})
