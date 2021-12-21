import React from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, Dimensions } from 'react-native'
import { Card } from 'react-native-elements'
import FontAwesome from "react-native-vector-icons/FontAwesome"
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
import { LinearGradient } from 'expo-linear-gradient';


export default function Home({ navigation}) {

    const pressHandlerDevices = () => {
        navigation.navigate('Devices')
    }

    const pressHandlerSettings = () => {
        navigation.navigate('Settings')
    }
    
    return (
        <LinearGradient
            colors={['#7F7FD5', '#86A8E7', '#91EAE4']}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 1}}
            style={styles.gradient}
        >
        <View style={styles.container}>
            <Text style={styles.text}>Smart Home Energy Manager</Text>
            <Card style={{flex: 1, width: 100}}>
            <Card.Title>Overall Energy Usage in the last six months</Card.Title>
            <Card.Divider/>
                <LineChart
                    data={{
                    labels: ["Jan", "Feb", "Mar", "April", "May", "June"],
                    datasets: [
                        {
                            data: [
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100
                            ],
                            strokeWidth: 4,
                            color: (opacity = 1) => `rgba(255,0,0,${opacity})`,
                        },
                        {
                            data: [
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100
                            ],
                            strokeWidth: 2,
                            color: (opacity = 1) => `rgba(0,0,255, ${opacity})`,
                        }
                    ]
                    }}
                    width={313} // from react-native
                    height={220}
                    // yAxisSuffix="kWh"
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={{
                    backgroundColor: "#D9AFD9",
                    backgroundGradientFrom: "#D9AFD9",
                    backgroundGradientTo: "#97D9E1",
                    decimalPlaces: 1, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(5, 19, 107, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    style: {
                        borderRadius: 0
                    },
                    propsForDots: {
                        r: "3",
                        strokeWidth: "1",
                        stroke: "#ffa726"
                    }
                    }}
                    bezier
                    style={{
                    marginVertical: 8,
                    borderRadius: 0,
                    }}
                />
                <Card.Divider/>
                <Card.Title>Energy in kWh</Card.Title>
            </Card>
            <View style={styles.view}>
                <TouchableOpacity style={styles.button} onPress={pressHandlerDevices}>
                <FontAwesome
                    name={"laptop"}
                    size={30}
                    color="#000000" 
                />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={pressHandlerSettings}>
                <FontAwesome
                    name={"gear"}
                    size={30}
                    color="#000000" 
                />
                </TouchableOpacity>
            </View>
            <View style={styles.bottomButton}>
                <TouchableOpacity onPress={pressHandlerSettings}>
                    <Button title="Log usage"/>
                </TouchableOpacity>
            </View>
        </View>
        </LinearGradient>
    )
}

// width: parent.width
const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        color: '#000',
        textAlign: 'center',
        marginTop: 10,
        fontFamily: 'TrebuchetMS-Bold',
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
        alignItems: 'center',
        marginBottom: 36
    },
    view: {
        width: parent.width,
        alignItems: 'center',
        flexDirection: 'row',
    },
    container: {
    },
    gradient: {
        width: '100%',
        height: '100%',
    },
    bottomButton: {
        width: '100%',
        justifyContent: 'center', 
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 50,
    }
})

