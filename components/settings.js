import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button } from 'react-native'
import settingsOptions from '../consts/settingsOptions'
import { Divider } from 'react-native-elements';


export default function Settings() {
    return (
        <View>
            <FlatList
                data={settingsOptions}
                renderItem={({item}) => <TouchableOpacity style={styles.item}>
                                            <Text style={styles.text}>{item.key}</Text>
                                            <Divider orientation="horizontal" />
                                        </TouchableOpacity>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 10,
        height: 44,
        justifyContent: 'center',
        alignItems: 'left',
        textAlign: 'left',
    },
    text: {
        fontSize: 25,
        paddingTop: 10,
        paddingBottom: 10,
    }
})
