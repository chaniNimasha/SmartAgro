import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Pressable,
} from 'react-native';

import MapboxGL from '@rnmapbox/maps'
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


MapboxGL.setWellKnownTileServer('Mapbox');





const tokenmapbox = "pk.eyJ1Ijoia2F2aW5kYW4iLCJhIjoiY2xodGtrYnQwMGlmcjNlcDVxMzM5aDB5cyJ9.qyUH96l72HnKRbxbbvJALg"
MapboxGL.setAccessToken(tokenmapbox);

export default function Mapbox({ navigation }) {

    const onPressHandler = () => {
        // navigation.navigate('Screen_A');
        navigation.goBack();
    }

    const [coordinatesExample, setCoordinatesExample] = useState([78.9629, 20.5937]);


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


                fetch("https://6896-112-134-159-114.ngrok-free.app/farm/locations",
                    requestOptions
                ).then(Response => Response.json())
                    .then(Response => {
                        // data = Response.data
                        if (Response.data && Response.data.farm_latitude && Response.data.farm_longitude) {
                            const latitude = Response.data.farm_latitude;
                            const longitude = Response.data.farm_longitude;

                            // Update the coordinatesexample with the fetched values
                            const updatedCoordinates = [longitude, latitude];
                            setCoordinatesExample(updatedCoordinates);
                        }
                    })
                    .catch(error => {
                        console.log("Error:", error);
                    });

                
            }
        }
        fetchData();
        
    })
   



    return (

        <MapboxGL.MapView style={{
            flex: 1,

        }}>

            <MapboxGL.Camera
                zoomLevel={15}
                centerCoordinate={coordinatesExample}
            />
            <MapboxGL.PointAnnotation
                id='point'
                coordinate={coordinatesExample}
            />
        </MapboxGL.MapView>


    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        margin: 10,
    }
})