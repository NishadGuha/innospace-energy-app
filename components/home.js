import React from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import FontAwesome from "react-native-vector-icons/FontAwesome"

export default function Home({ navigation}) {

    const pressHandler = () => {
        navigation.navigate('Devices')
    }

    return (
        <View>
            <Text style={styles.text}>Home Page!</Text>
            <View style={styles.view}>
                <TouchableOpacity style={styles.button} onPress={pressHandler}>
                <FontAwesome
                    name={"laptop"}
                    size={30}
                    color="#000000" 
                />
                </TouchableOpacity>
            </View>
        </View>
    )
}

// width: parent.width
const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        color: '#000',
        textAlign: 'center'
    },
    button: {
        backgroundColor: '#fff',
        height: 60,
        width: 60,
        padding: 10,
        borderRadius: 10,
        margin: 10,
        textAlign: 'center',
        position: 'relative',
        flex: 1,
        justifyContent: 'center',
        marginBottom: 36
    },
    view: {
        width: parent.width,
        alignItems: 'center',
    }
})

