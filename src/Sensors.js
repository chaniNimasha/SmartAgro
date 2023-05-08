import React from 'react';
import {
    Text,
    SafeAreaView, 
    Image,
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

const products = [
    {pic: SoiTemperature, Sensor: "Soil Temperature", value:"100", average:"70%", val: 100 },
    {pic: SoilMoisture, Sensor: "Soil Moisture", value:"50", average:"70%", val: 50 },
    {pic: ambientTemperature, Sensor: "Ambient Temperature", value:"50", average:"70%", val: 50 },
    {pic: airHumidity, Sensor: "Relative Air Humidity", value:"50", average:"70%", val: 50 },
    {pic: soilPhValue, Sensor: "Soil PH Value", value:"50", average:"70%", val: 50 },
    {pic: soilConductivity, Sensor: "Soil Electrical Conductivity", value:"50", average:"70%", val: 50 },
    {pic: soilNitrogen, Sensor: "Soil Nitrogen", value:"50", average:"70%", val: 50 },
    {pic: soilPhosphorus, Sensor: "Soil Phosphorus", value:"50", average:"70%", val: 50 },
    {pic: soilPotassium, Sensor: "Soil Potassium", value:"50", average:"70%", val: 50 },
    {pic: rainfall, Sensor: "Rainfall", value:"50", average:"70%", val: 50 },


];
export default function Sensors({ navigation }) {

    const onPressHandler = () => {
        // navigation.navigate('Screen_A');
        navigation.goBack();
    }


    

    return (
     <SafeAreaView style={styles.body}>
        <Text style={styles.text}>
                Your Sensors (Real-Time)
            </Text>
        <FlatList 
        numColumns={2}
        data = {products}
        keyExtractor={(item, index) => index.toString()}
        renderItem={( {item} ) =>(<SensorItems product={item}/>)}>

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
        color: 'white'
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

