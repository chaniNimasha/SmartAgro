import React, { useEffect } from 'react';
import {
    Text,
    SafeAreaView,
    RefreshControl,
    StyleSheet
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import SensorItems from './SensorItems';

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

let data = [
    { pic: SoiTemperature, Sensor: "Soil Temperature", value: "", average: "70%", val: '' , name: "sTemp"},
    { pic: SoilMoisture, Sensor: "Soil Moisture", value: "", average: "70%", val: '', name: "sMois" },
    { pic: ambientTemperature, Sensor: "Ambient Temperature", value: "", average: "70%", val: '', name: "temp"},
    { pic: airHumidity, Sensor: "Relative Air Humidity", value: '', average: "70%", val: '', name: "hum" },
    { pic: soilPhValue, Sensor: "Soil PH Value", value: "", average: "70%", val: '', name: "ph" },
    { pic: soilConductivity, Sensor: "Soil Electrical Conductivity", value: "", average: "70%", val: '', name: "sec" },

    { pic: soilNitrogen, Sensor: "Soil Nitrogen", value: "", average: "70%", val: '', name: "n" },
    { pic: soilPhosphorus, Sensor: "Soil Phosphorus", value: "", average: "70%", val: '', name: "p" },
    { pic: soilPotassium, Sensor: "Soil Potassium", value: "", average: "70%", val: '', name: "k" },
    { pic: rainfall, Sensor: "Rainfall", value: "", average: "70%", val: '', name:"r" },
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

        fetch("https://6e2d-112-134-159-90.ngrok-free.app/sensors", {
            method: "GET"
        }).then(Response => Response.json())
            .then(Response => {
                // data = Response.data

                data.forEach((element, idx) => {

                    if (element.name == "sTemp") {
                        
                        data[idx].value = Response.data[2].sTemp
                        data[idx].val = Response.data[2].sTemp
                       
                    }
                    else if (element.name == "sMois") {
                       
                        data[idx].value = Response.data[2].sMois
                        data[idx].val = Response.data[2].sMois
                       
                    }

                    else if (element.name == "temp") {
                       
                        data[idx].value = Response.data[2].temp
                        data[idx].val = Response.data[2].temp
                        
                    }
                    
                    else if (element.name == "hum") {
                       
                        data[idx].value = Response.data[2].hum
                        data[idx].val = Response.data[2].hum
                    }
                    
                    else if (element.name == "ph") {
                        
                        data[idx].value = Response.data[2].ph
                        data[idx].val = Response.data[2].ph
                        
                    }
                    
                    else if (element.name == "sec") {
                        
                        data[idx].value = Response.data[2].sec
                        data[idx].val = Response.data[2].sec
                       
                    }
                    
                    else if (element.name == "n") {
                       
                        data[idx].value = Response.data[2].n
                        data[idx].val = Response.data[2].n
                     
                    }
                    
                    else if (element.name == "p") {
                       
                        data[idx].value = Response.data[2].p
                        data[idx].val = Response.data[2].p
               
                    }
                    
                    else if (element.name == "k") {
                        
                        data[idx].value = Response.data[2].k
                        data[idx].val = Response.data[2].k
                    }
                    
                    else if (element.name == "r") {
                        
                        data[idx].value = Response.data[2].r
                        data[idx].val = Response.data[2].r
                       
                    }

                  
                })

                

                 console.log(data[0].hum)
            })

        console.log("starting Sensors view")
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
        fontSize: 28,
        fontWeight: 'bold',
        margin: 10,
        color: 'white',
        top: 15,
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

