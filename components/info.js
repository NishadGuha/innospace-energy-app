import React, { useState } from 'react'
import { StyleSheet, Text, Modal, View, FlatList, Dimensions, TouchableOpacity, Pressable, Alert } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import deviceList from '../consts/deviceList'
import { LineChart } from "react-native-chart-kit";
import { LinearGradient } from 'expo-linear-gradient';


export default function Info({ navigation }) {

    const device = deviceList.find(x => x.id == navigation.state.params.device);

    const [modalVisible, setModalVisible] = useState(false);

    const data_1 = [
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

    const yLabelIterator = yLabel(convertToIntArray(data_1));

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
        {/* <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Appliance Upgrade Requested!</Text>
                    <TouchableOpacity
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                    >
                        <Text style={styles.textStyle}>Ok</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal> */}
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
                            strokeWidth: 2,
                            color: (opacity = 1) => `rgba(0,0,255, ${opacity})`,
                        }
                    ]
                    }}
                    width={313} // from react-native
                    height={220}
                    formatYLabel={() => yLabelIterator.next().value}
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={{
                    backgroundColor: "#e26a00",
                    backgroundGradientFrom: "#fb8c00",
                    backgroundGradientTo: "#ffa726",
                    decimalPlaces: 0, // optional, defaults to 2dp
                    color: (opacity = 10) => `rgba(1, 24, 64, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(73, 116, 191, ${opacity})`,
                    style: {
                        borderRadius: 16,
                        backgroundColor: "#D9AFD9",
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
            </Card>
            <View>
                <FlatList
                    data={deviceData}
                    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                />
            </View>
            <Button style={styles.button} onPress={triggerModal} title="Request appliance upgrade"/>
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
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        zIndex: 100
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
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
})


