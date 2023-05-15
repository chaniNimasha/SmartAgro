import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, SafeAreaView, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

class Map extends Component {
  render() {
    return (
      <SafeAreaView style={styles.body}>

        <Text style={styles.text}>
          Your Farms
        </Text>
        <View style={styles.container}>
          <MapView
            style={styles.mapStyle}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}>

            <Marker
              coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
              title={'Marker Title'}
              description={'Marker Description'}
            />
          </MapView>
        </View>
      </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({

  body: {
    flex: 1,
    backgroundColor: '#000928'

  },
  container: {
    top:20,

    alignItems: 'center',
    
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  text: {
    fontSize: 28,
    fontWeight: 'bold',
    margin: 10,
    color: 'white',
    top:15
  },
});

export default Map;