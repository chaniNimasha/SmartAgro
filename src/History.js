import React from 'react';
import { Dimensions, StyleSheet, View, SafeAreaView, Text } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

export default function History({ navigation }) {

    const data1 = {
        
        labels: ['14:29', '14:30', '14:31', '14:32', '14:33', '14:34'],
        datasets: [
            {
                data: [0, 0, 0, 0, 0, 0],
            },
        ],
    };

    const data2 = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                data: [0, 0, 0, 0, 0, 0],
            },
        ],
    };

    const data3 = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                data: [40, 15, 8, 35, 12, 5],
            },
        ],
    };

    

    const chartConfig = {
        
        backgroundColor: '#365f8b',
        backgroundGradientFrom: '#335c88',
        backgroundGradientTo: '#335c88',
        decimalPlaces: 2,
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
            borderRadius: 16,
            
        },
        
    };

    const onPressHandler = () => {
        // navigation.navigate('Screen_B');
        navigation.toggleDrawer();
    }

    return (
        <SafeAreaView style={styles.body}>
            <Text style={styles.text}>
                Sensor History ( Latest Update On 2023-03-13 14:34:01 )
            </Text>
        <View style={styles.container}>
        <Text style={{size:20, color:'white', marginBottom:-18}}>
                Temperature Analysis (Celcius)
            </Text>
            <LineChart style={{padding:25}}
                data={data1}
                width={Dimensions.get('window').width - 20}
                height={180}
                chartConfig={chartConfig}
                padding={30}
            />
            <Text style={{size:20, color:'white', marginBottom:-18}}>
                Humidity Analysis (%)
            </Text>
            <LineChart style={{padding:25}} 
                data={data2}
                width={Dimensions.get('window').width - 20}
                height={180}
                chartConfig={chartConfig}
            />
             <Text style={{size:20, color:'white', marginBottom:-18}}>
               Soil Temperature Analysis (Celcius)
            </Text>
            <LineChart style={{padding:25}}
                data={data1}
                width={Dimensions.get('window').width - 20}
                height={180}
                chartConfig={chartConfig}
            />
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
       padding:20,
        marginVertical: 20,
        
      },

      body: {
        flex: 1,
        backgroundColor: '#000928'

    },

    text: {
        fontSize: 28,
        fontWeight: 'bold',
        margin: 10,
        color: 'white',
        top:15,
    },
});

