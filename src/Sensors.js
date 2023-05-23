import React, { useEffect } from 'react';
import {
    Text,
    SafeAreaView,
    RefreshControl,
    StyleSheet
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import SensorItems from './SensorItems';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SoiTemperature = require('../assets/soilTemp.png')
const SoilMoisture = require('../assets/soilMoist.png')
const ambientTemperature = require('../assets/ambientTemp.png')
const airHumidity = require('../assets/airHumidity.png')
const soilPhValue = require('../assets/soilPH.png')
const soilConductivity = require('../assets/soilConduct.png')
const soilNitrogen = require('../assets/n.png')
const soilPhosphorus = require('../assets/p.png')
const soilPotassium = require('../assets/k.png')
const rainfall = require('../assets/rain.png')

const getToken = async () => {
    try {
        const token = await AsyncStorage.getItem('token');
        return token;
    } catch (error) {
        console.error(error);
        return null;
    }
};

let data = [
    { pic: SoiTemperature, Sensor: "Soil Temperature", value: "", average: "70%", val: '', name: "sTemp", unit: "°C" },
    { pic: SoilMoisture, Sensor: "Soil Moisture", value: "", average: "70%", val: '', name: "sMois", unit: "%" },
    { pic: ambientTemperature, Sensor: "Ambient Temperature", value: "", average: "70%", val: '', name: "temp", unit: "°C" },
    { pic: airHumidity, Sensor: "Relative Air Humidity", value: '', average: "70%", val: '', name: "hum", unit: "%" },
    { pic: soilPhValue, Sensor: "Soil PH Value", value: "", average: "70%", val: '', name: "ph", unit: " " },
    { pic: soilConductivity, Sensor: "Soil Electrical Conductivity", value: "", average: "70%", val: '', name: "sec", unit: "mS/cm" },
    { pic: soilNitrogen, Sensor: "Soil Nitrogen", value: "", average: "70%", val: '', name: "n", unit: "ppm" },
    { pic: soilPhosphorus, Sensor: "Soil Phosphorus", value: "", average: "70%", val: '', name: "p", unit: "ppm" },
    { pic: soilPotassium, Sensor: "Soil Potassium", value: "", average: "70%", val: '', name: "k", unit: "ppm" },
    { pic: rainfall, Sensor: "Rainfall", value: "", average: "70%", val: '', name: "r", unit: "mm" },
]

export default function Sensors({ navigation }) {

    const onPressHandler = () => {
        // navigation.navigate('Screen_A');
        navigation.goBack();
    }

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);


    useEffect(() => {
        const fetchData = async () => {
            const token = await getToken();

            if (token) {
                const requestOptions = {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                };

                fetch("https://8e8b-112-134-155-12.ngrok-free.app/sensors",
                    requestOptions
                ).then(Response => Response.json())
                    .then(Response => {
                        console.log(Response)
                        data.forEach((element, idx) => {

                            if (element.name == "sTemp") {

                                data[idx].value = Response.data.sTemp
                                data[idx].val = Response.data.sTemp

                            }
                            else if (element.name == "sMois") {

                                data[idx].value = Response.data.sMois
                                data[idx].val = Response.data.sMois

                            }

                            else if (element.name == "temp") {

                                data[idx].value = Response.data.temp
                                data[idx].val = Response.data.temp

                            }

                            else if (element.name == "hum") {

                                data[idx].value = Response.data.hum
                                data[idx].val = Response.data.hum
                            }

                            else if (element.name == "ph") {

                                data[idx].value = Response.data.ph
                                data[idx].val = Response.data.ph

                            }

                            else if (element.name == "sec") {

                                data[idx].value = Response.data.sec
                                data[idx].val = Response.data.sec

                            }

                            else if (element.name == "n") {

                                data[idx].value = Response.data.n
                                data[idx].val = Response.data.n

                            }

                            else if (element.name == "p") {

                                data[idx].value = Response.data.p
                                data[idx].val = Response.data.p

                            }

                            else if (element.name == "k") {

                                data[idx].value = Response.data.k
                                data[idx].val = Response.data.k
                            }

                            else if (element.name == "r") {

                                data[idx].value = Response.data.r
                                data[idx].val = Response.data.r

                            }
                        })

                        
                    
                    })
            }
        }
        fetchData();
    })

    return (
        <SafeAreaView style={styles.body}>
            <Text style={styles.text}>
                Your Sensors (Real-Time)
            </Text>
            <FlatList
                numColumns={2}
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (<SensorItems product={item} />)}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }>
            </FlatList>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({

    body: {
        flex: 1,
        backgroundColor: '#000928'
    },

    chart: {
        position: "absolute",
        marginTop: 180,
        marginLeft: 18
    },

    text: {
        fontSize: 25,
        fontWeight: 'bold',
        margin: 10,
        color: 'white',
        top: 15,
        marginBottom:20,
    },

    square: {
        backgroundColor: "#001837",
    },

    text1: {
        position: 'absolute',
        color: 'rgba(164, 164, 164, 0.7)',
        marginTop: 110,
        marginLeft: 100
    },

    text2: {
        position: "absolute",
        color: 'rgba(164, 164, 164, 0.7)',
        marginTop: 340,
        marginLeft: 50
    }
})

