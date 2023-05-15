import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Pressable,
} from 'react-native';

import MapboxGL from '@rnmapbox/maps'
import { HeaderTitle } from '@react-navigation/elements';
MapboxGL.setWellKnownTileServer('Mapbox');

const tokenmapbox = "pk.eyJ1Ijoia2F2aW5kYW4iLCJhIjoiY2xobjRmdmFjMGN6aTNkbmdtZGl5aHNrZSJ9.L6UlWROkkZYYxCt9tlGFHw"
MapboxGL.setAccessToken(tokenmapbox);

export default function Mapbox({ navigation }) {

    const onPressHandler = () => {
        // navigation.navigate('Screen_A');
        navigation.goBack();
    }
    const coordinatesexample = [78.9629, 20.5937]

    return (
        
            <MapboxGL.MapView style={{
                flex: 1,
                
            }}>

                <MapboxGL.Camera
                    zoomLevel={15}
                    centerCoordinate={coordinatesexample}
                />
                <MapboxGL.PointAnnotation
                    id='point'
                    coordinate={coordinatesexample}
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