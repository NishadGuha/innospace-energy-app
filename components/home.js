import React from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, Dimensions, Image } from 'react-native'
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

    const pressHandlerNews = () => {
        navigation.navigate('News')
    }

    const pressHandlerUsageLog = () => {
        console.log('Usage Log')
        navigation.navigate('Form')
    }

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

    const yLabelIterator = yLabel(checkMaxArr(data_1, data_2));
    
    return (
        <LinearGradient
            colors={['#ff4b1f', '#1fddff']}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 1}}
            style={styles.gradient}
        >
        <View style={styles.container}>
            {/* <Text style={styles.text}>Smart Home Energy Manager</Text> */}
            <Image
                style={styles.image}
                resizeMode="cover"
                source={{ uri: "https://images.assetsdelivery.com/compings_v2/amin268/amin2681807/amin268180700301.jpg" }}
            />
            <Card style={{flex: 1, width: 100, borderRadius: 10}}>
            <Card.Title>Overall Energy Usage in the last six months</Card.Title>
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
            <View style={styles.view}>
                <TouchableOpacity style={styles.button} onPress={pressHandlerDevices}>
                <FontAwesome
                    name={"plug"}
                    size={30}
                    color="#000000" 
                />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={pressHandlerNews}>
                <FontAwesome
                    name={"th-list"}
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
                <TouchableOpacity onPress={pressHandlerUsageLog}>
                <FontAwesome
                    name={"edit"}
                    size={30}
                    color="#000000" 
                />
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
        justifyContent: 'center', 
        alignItems: 'center',
    },
    gradient: {
        width: '100%',
        height: '100%',
    },
    bottomButton: {
        backgroundColor: '#fff',
        height: 60,
        width: 60,
        justifyContent: 'center', 
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 10,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        justifyContent: 'center', 
        alignItems: 'center',
        position: 'relative',
        textAlign: 'center',
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
    }
})

