import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Pie from 'react-native-pie';

class SensorItems extends React.Component {
    render() {
        const { pic, Sensor, value, average, val } = this.props.product
        return (
            <View style={styles.body}>

                <Image style={styles.image} source={pic}></Image>
                <Text style={styles.sensorname}>{Sensor}</Text>
                <Text style={styles.value}>{value} %</Text>
                <Text style={styles.averageval}>Σ Average: {average}</Text>
                <View style={{ alignItems: 'center', marginTop: 90}}>
                    <Pie style={styles.pie}
                        radius={75}
                        innerRadius={70}
                        sections={[
                            {
                                percentage: [val],
                                color: 'green',
                            },
                        ]}
                        backgroundColor="#ddd"
                        

                    />
                    <View style={styles.gauge} >
                        <Text style={styles.gaugeText}> {value}% </Text>
                    </View>
                </View>
            </View>

        )
    }
}
const styles = StyleSheet.create({
    body: {
        width: '44%',
        height: 300,

        marginHorizontal: '3%',
        borderWidth: 0.75,
        borderColor: "#001837",
        marginVertical: '3%',
        backgroundColor: "#001837",
        marginBottom: 10

    },

    image: {
        width: 70,
        height: 70,
        position: "absolute",
        marginTop: -8,
        marginLeft: -8

    },

    sensorname: {
        position: 'absolute',
        color: 'rgba(164, 164, 164, 0.7)',
        marginTop: 15,
        marginLeft: 80,
        fontSize: 15
    },

    value: {
        position: 'absolute',
        color: 'rgba(164, 164, 164, 0.7)',
        marginTop: 55,
        marginLeft: 80,
        fontSize: 15
    },

    averageval: {
        position: 'absolute',
        color: 'rgba(164, 164, 164, 0.7)',
        marginTop: 260,
        marginLeft: 20,
        fontSize: 15

    },

    gauge: {
        position: 'absolute',
        width: 100,
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
      },
      
      gaugeText: {
        backgroundColor: 'transparent',
        color: 'white',
        fontSize: 24,
        
      },
      
})

export default SensorItems;