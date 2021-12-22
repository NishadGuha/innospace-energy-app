import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import newsList from '../consts/newsList'
import { LinearGradient } from 'expo-linear-gradient';

export default function news() {
    return (
        <LinearGradient
            colors={['#ff4b1f', '#1fddff']}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 1}}
            style={styles.gradient}
        >
        <View>
        {
            newsList.map((u, i) => {
                return (
                <Card key={i}>
                    <TouchableOpacity onPress={() => alert("Opens News Website!")}>
                        <View key={i} style={styles.device}>
                            <Image
                                style={styles.image}
                                resizeMode="cover"
                                source={{ uri: u.avatar }}
                            />
                        </View>
                        <Card.Divider/>
                        <Text>
                            {u.title}
                        </Text>
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
        width: 313,
        height: 220,
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
