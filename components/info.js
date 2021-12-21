import React, { useState } from 'react'
import { StyleSheet, Text, Modal, View, FlatList, Dimensions, TouchableOpacity, Pressable, Alert } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import deviceList from '../consts/deviceList'
import { LineChart } from "react-native-chart-kit";
import { LinearGradient } from 'expo-linear-gradient';


export default function Info({ navigation }) {

    const device = deviceList.find(x => x.id == navigation.state.params.device);

    const [modalVisible, setModalVisible] = useState(false);

    let deviceData = [];
    Object.keys(device).forEach(x => {
        if (x == 'name') {
            deviceData.push({
                key: `Device: ${device[x]}`,
            })
        }
        if (x != 'id' && x != 'avatar' && x != 'name') {
            deviceData.push({
                key: `The ${x} is ${device[x]}`,
            })
        }
    });

    return (
        <LinearGradient
            colors={['#7F7FD5', '#86A8E7', '#91EAE4']}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 1}}
            style={styles.gradient}
        >
        <View style={styles.container}>
            {/* <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.", 5);
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
            <Card style={{flex: 1, width: 100}}>
                <Card.Title>Usage in the last six months</Card.Title>
                <Card.Divider/>
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
                    width={313} // from react-native
                    height={220}
                    yAxisSuffix="kWh"
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={{
                    backgroundColor: "#e26a00",
                    backgroundGradientFrom: "#fb8c00",
                    backgroundGradientTo: "#ffa726",
                    decimalPlaces: 2, // optional, defaults to 2dp
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
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Button style={styles.button} title="Request appliance upgrade"/>
            </TouchableOpacity>
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


