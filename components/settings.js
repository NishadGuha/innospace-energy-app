import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button } from 'react-native'
import settingsOptions from '../consts/settingsOptions'
import { Divider, Card } from 'react-native-elements';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import { LinearGradient } from 'expo-linear-gradient';


export default function Settings({ navigation }) {

    const handleSubmit = (screen) => {
        console.log(screen);
        if (screen === "Report a problem") {
            navigation.navigate('Report_Form');
        }
    }

    return (
        <LinearGradient
            colors={['#ff4b1f', '#1fddff']}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 1}}
            style={styles.gradient}
        >
        <View style={styles.container}>
            <FlatList
                data={settingsOptions}
                renderItem={({item}) => <TouchableOpacity style={styles.item} onPress={() => handleSubmit(item.key)}>
                                            <Card style={styles.card}>
                                            <Card.Title>{item.key}</Card.Title>
                                            </Card>
                                        </TouchableOpacity>}
            />
        </View>
        <Text style={styles.credit}>Developed by Nishad Guha</Text>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 10,
        height: '100%',
        justifyContent: 'space-between',
        alignItems: 'left',
        textAlign: 'left',
        width: '100%',
    },
    text: {
        fontSize: 25,
        paddingTop: 10,
        paddingBottom: 10,
    },
    card: {
        padding: 10,
        backgroundColor: 'white',
        borderWidth:0,
        marginBottom:10,
        marginLeft:10,
        marginRight:10,
        borderColor:'#808080',
        marginTop:50,
        elevation: 10,
    },
    gradient: {
        width: '100%',
        height: '100%',
    },
    credit: {
        color: '#585c59',
        position: 'relative',
        marginTop: 200,
        textAlign: 'center',
    }
})
