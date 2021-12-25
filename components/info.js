import React, { useState } from 'react'
import { StyleSheet, Text, Modal, View, FlatList, Dimensions, TouchableOpacity, Pressable, Alert } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import deviceList from '../consts/deviceList'
import { LineChart } from "react-native-chart-kit";
import { LinearGradient } from 'expo-linear-gradient';


export default function Info({ navigation }) {

    const device = deviceList.find(x => x.id == navigation.state.params.device);

    const data_1 = [
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100
    ];

    const data_2 = [
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100
    ];

    function convertToIntArray(data) {
        var array = [];
        for (var i = 0; i < data.length; i++) {
            array.push(parseInt(data[i]));
        }
        return array;
    }

    function checkMaxArr(arr_1, arr_2) {
        var arr_1_parsed = convertToIntArray(arr_1);
        var arr_2_parsed = convertToIntArray(arr_2);
        var max = Math.max(...arr_1_parsed);
        var max2 = Math.max(...arr_2_parsed);
        if (max > max2) {
            return arr_1_parsed;
        } else {
            return arr_2_parsed;
        }
    }

    function* yLabel (data) {
        var min = Math.min( ...data );
        var max = Math.max( ...data );
        var labels = [0];

        for (var i = min; i <= max; i++) {
            if (i % 10 === 0) {
                labels.push(i);
            }
        }
        yield* labels;
    }

    const yLabelIterator = yLabel(checkMaxArr(data_1, data_2));

    let deviceData = [];
    Object.keys(device).forEach(x => {
        if (x == 'name') {
            deviceData.push({
                key: `${device[x]}`,
            })
        }
        if (x != 'id' && x != 'avatar' && x != 'name') {
            if (x == 'maxPower') {
                deviceData.push({
                    key: `You can run this device upto a power of ${device[x]} W`,
                })
            } else if (x == 'maxTime') {
                deviceData.push({
                    key: `This device can used safely for a constant period of ${device[x]} minutes`,
                })
            } else if (x == 'costPerHour') {
                deviceData.push({
                    key: `This device costs € ${device[x]} per hour to run`,
                })
            }
        }
    });

    const triggerModal = () => {
        setModalVisible(true)
    }

    return (
        <LinearGradient
            colors={['#ff4b1f', '#1fddff']}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 1}}
            style={styles.gradient}
        >
        <View style={styles.container}>
            <Card style={{flex: 1, width: 100}}>
                <Card.Title>Usage in the last six months</Card.Title>
                <Card.Divider/>
                <LineChart
                    data={{
                    labels: ["Jan", "Feb", "Mar", "April", "May", "June"],
                    datasets: [
                        {
                            data: data_1,
                            strokeWidth: 4,
                            color: (opacity = 1) => `rgba(255,0,0,${opacity})`,
                        },
                        {
                            data: data_2,
                            strokeWidth: 2,
                            color: (opacity = 1) => `rgba(0,0,255, ${opacity})`,
                        }
                    ]
                    }}
                    width={313} // from react-native
                    height={220}
                    formatYLabel={() => yLabelIterator.next().value}
                    yAxisInterval={10} // optional, defaults to 1
                    chartConfig={{
                    backgroundColor: "#D9AFD9",
                    backgroundGradientFrom: "#D9AFD9",
                    backgroundGradientTo: "#97D9E1",
                    decimalPlaces: 0, // optional, defaults to 2dp
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
                <View style={styles.legend}>
                    <Card.Title>Energy in kWh</Card.Title>  
                    <View style={styles.legend_item1}></View><Text style={styles.legend_text}>Average</Text>
                    <View style={styles.legend_item2}></View><Text style={styles.legend_text}>Current</Text>
                </View>
            </Card>
            <View>
                <FlatList
                    data={deviceData}
                    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                />
            </View>
            <Button style={styles.button} onPress={() => { alert("Appliance Upgrade Requested!")}} title="Request appliance upgrade"/>
        </View>
        </LinearGradient>         
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
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    gradient: {
        width: '100%',
        height: '100%',
    },
    button: {
        borderRadius: 10,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        elevation: 2
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    buttonOpen: {
        borderRadius: 10,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonClose: {
        backgroundColor: "#2196F3",
        borderRadius: 10,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    legend: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    legend_item1: {
        width: 20,
        height: 10,
        backgroundColor: 'red',
    },
    legend_item2: {
        width: 20,
        height: 10,
        backgroundColor: 'blue',
    },
})


