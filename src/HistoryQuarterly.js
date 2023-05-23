import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, View, SafeAreaView, Text } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getToken = async () => {
    try {
        const token = await AsyncStorage.getItem('token');
        return token;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export default function HistoryQuarterly({ navigation }) {
    const [sensorData, setSensorData] = useState(null);
    const [pageTitle, setPageTitle] = useState('');


    useEffect(() => {
        const fetchData = async () => {
            const token = await getToken();

            if (token) {
                const requestOptions = {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJpZF8wMDAzIiwidXNlcm5hbWUiOiJ1c2VyMDAzIiwibmFtZSI6IkJhbGFuZ29kYSIsImVtYWlsIjoic2x0dEBnbWFpbC5jb20ifQ.fXZRFmmAClZXY7gEUc_oW3tZSlmMYE04QzCPyxkh-FA`
                        // 'Authorization': `Bearer ${token}`
                    }
                };

                fetch('https://8e8b-112-134-155-12.ngrok-free.app/sensors/history?duration=quarterly', requestOptions)
                    .then(response => response.json())
                    .then(data => {
                        const tempArray = [];
                        const humArray = [];
                        const sTempArray = [];
                        const sMoisArray = [];
                        const secArray = [];
                        const phArray = [];
                        const nArray = [];
                        const pArray = [];
                        const kArray = [];
                        const rArray = [];

                        data.data.forEach(item => {
                            tempArray.push(item.temp);
                            humArray.push(item.hum);
                            sTempArray.push(item.sTemp);
                            sMoisArray.push(item.sMois);
                            secArray.push(item.sec);
                            phArray.push(item.ph);
                            nArray.push(item.n);
                            pArray.push(item.p);
                            kArray.push(item.k);
                            rArray.push(item.r);
                        });

                        setSensorData({
                            
                            qtemp: tempArray,
                            qhum: humArray,
                            qsTemp: sTempArray,
                            qsMois: sMoisArray,
                            qsec: secArray,
                            qph: phArray,
                            qn: nArray,
                            qp: pArray,
                            qk: kArray,
                            qr: rArray
                        });


                        if (data.data.length > 0) {
                            const latestDatetime = data.data[9].datetime;
                            setPageTitle(`Sensor History (Quarterly) (Latest Update On ${latestDatetime})`);
                          }
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });
            }
        };

        fetchData();
    }, []);

    const chartConfig = {
        backgroundColor: '#365f8b',
        backgroundGradientFrom: '#335c88',
        backgroundGradientTo: '#335c88',
        decimalPlaces: 2,
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
            borderRadius: 16
        }
    };

    const renderGraph = (data, title) => {
        if (!data || data.length === 0) {
            return (
                <View style={styles.noDataContainer}>
                    <Text style={styles.noDataText}>No data available</Text>
                </View>
            );
        }

        return (
            <View style={styles.container}>
                <Text style={styles.graphname}>{title}</Text>
                <LineChart
                    data={{
                        labels: Array.from({ length: data.length }, (_, i) => (i + 1).toString()),
                        datasets: [
                            {
                                data
                            }
                        ]
                    }}
                    width={Dimensions.get('window').width - 20}
                    height={180}
                    chartConfig={chartConfig}
                    padding={30}
                />
            </View>
        );
    };

    const onPressHandler = () => {
        navigation.toggleDrawer();
    };

    return (
        <ScrollView>
            <SafeAreaView style={styles.body}>
                <Text style={styles.text}>{pageTitle}</Text>
                {renderGraph(sensorData?.qtemp, 'Temperature Analysis (°C)')}
                {renderGraph(sensorData?.qhum, 'Humidity Analysis (%)')}
                {renderGraph(sensorData?.qsTemp, 'Soil Temperature Analysis (°C)')}
                {renderGraph(sensorData?.qsMois, 'Soil Moisture Analysis (%)')}
                {renderGraph(sensorData?.qsec, 'Soil EC Analysis (mS/cm)')}
                {renderGraph(sensorData?.qph, 'Soil PH Analysis')}
                {renderGraph(sensorData?.qn, 'Soil Nitrogen Analysis (ppm)')}
                {renderGraph(sensorData?.qp, 'Soil Phosphorus Analysis (ppm)')}
                {renderGraph(sensorData?.qk, 'Soil Potassium Analysis (ppm)')}
                {renderGraph(sensorData?.qr, 'rain Fall Analysis (mm)')}
            </SafeAreaView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000928'
    },
    container: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: 'white'
    },
    graphname: {
        fontSize: 18,
        textAlign: 'center',
        marginVertical: 10,
        color: 'white'
    },
    noDataContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    noDataText: {
        fontSize: 16,
        color: '#333333',
        marginTop: 20
    }
});
