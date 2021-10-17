import React from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, Dimensions } from 'react-native'
import FontAwesome from "react-native-vector-icons/FontAwesome"
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";

export default function Home({ navigation}) {

    const pressHandler = () => {
        navigation.navigate('Devices')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Smart Home Energy Manager</Text>
            <LineChart
                data={{
                labels: ["January", "February", "March", "April", "May", "June"],
                datasets: [
                    {
                    data: [
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100
                    ]
                    }
                ]
                }}
                width={Dimensions.get("window").width} // from react-native
                height={220}
                yAxisLabel="$"
                yAxisSuffix="k"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                backgroundColor: "#D9AFD9",
                backgroundGradientFrom: "#D9AFD9",
                backgroundGradientTo: "#97D9E1",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                    borderRadius: 16
                },
                propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "#ffa726"
                }
                }}
                bezier
                style={{
                marginVertical: 8,
                borderRadius: 16
                }}
            />
            <View style={styles.view}>
                <TouchableOpacity style={styles.button} onPress={pressHandler}>
                <FontAwesome
                    name={"laptop"}
                    size={30}
                    color="#000000" 
                />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={pressHandler}>
                <FontAwesome
                    name={"gear"}
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
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 36
    },
    view: {
        width: parent.width,
        alignItems: 'center',
    },
    container: {
    },
})

