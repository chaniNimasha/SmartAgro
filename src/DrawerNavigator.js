import React, { useState } from 'react';
import {
    StyleSheet,
    Image,
    View,
} from 'react-native';

import '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler'

import Sensors from './Sensors';

import History from './History';
import Analysis from './Analysis';
import Yield from './Yield';
//import Controllers from './Controllers';
import CustomDrawer from './CustomDrawer';
import Header from './Header';
import FeedBacks from './FeedBacks';
import Complaints from './Complaints';
import mapbox from './mapbox';




const Drawer = createDrawerNavigator();

function DrawerNavigator({ navigation }) {
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{
                headerRight: () => <Header></Header>,
                headerStyle: {
                    backgroundColor: '#000928',
                },

                drawerStyle: {
                    backgroundColor: 'transparent',
                },

                headerTintColor: 'rgba(164, 164, 164, 0.7)',
                headerTitle: '',
                drawerInactiveTintColor: "white",

            }}>

            <Drawer.Screen
                name="Sensors"
                component={Sensors}
                options={{
                    drawerIcon: ({ focused, size }) => (
                        <Image
                            source={require('../assets/sensors.png')}
                            style={[{ height: 23, width: 23 }]}
                        />)
                }}
            />

            <Drawer.Screen
                name="Map"
                headerTitle="Your Farms"
                component={mapbox}
                options={{
                    drawerIcon: ({ focused, size }) => (
                        <Image
                            source={require('../assets/map.png')}
                            style={[{ height: 23, width: 23 }]}
                        />)
                }}
            />

            <Drawer.Screen
                name="History"
                component={History}
                options={{
                    drawerIcon: ({ focused, size }) => (
                        <Image
                            source={require('../assets/history.png')}
                            style={[{ height: 23, width: 23 }]}
                        />)
                }}
            />

            <Drawer.Screen
                name="Analysis"
                component={Analysis}
                options={{
                    drawerIcon: ({ focused, size }) => (
                        <Image
                            source={require('../assets/analysis.png')}
                            style={[{ height: 23, width: 23 }]}
                        />)
                }}
            />

            <Drawer.Screen
                name="Yield"
                component={Yield}
                options={{
                    drawerIcon: ({ focused, size }) => (
                        <Image
                            source={require('../assets/yield.png')}
                            style={[{ height: 23, width: 23 }]}
                        />)
                }}
            />

            {/* <Drawer.Screen
                name="Controllers"
                component={Controllers}
                options={{
                    drawerIcon: ({ focused, size }) => (
                        <Image
                            source={require('../assets/controllers.png')}
                            style={[{ height: 23, width: 23 }]}
                        />)
                }}
            /> */}
            

            <Drawer.Screen
                name="FeedBacks"
                component={FeedBacks}
                options={{
                    drawerIcon: ({ focused, size }) => (
                        
                        <Image
                            source={require('../assets/feedback.png')}
                            style={[{ height: 23, width: 23 }]}
                        />
                    )
                }}
            />

            <Drawer.Screen
                name="Complaints"
                component={Complaints}
                options={{
                    
                    drawerIcon: ({ focused, size }) => (
                        <Image
                            source={require('../assets/bad-review.png')}
                            style={[{ height: 23, width: 23 }]}
                        />)
                }}
            />
         

        </Drawer.Navigator>
    )
}
const styles = StyleSheet.create({
    sideMenuProfileIcon: {
        resizeMode: 'center',
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        alignSelf: 'center',
    },
    iconStyle: {
        width: 15,
        height: 15,
        marginHorizontal: 5,
    },
    customItem: {
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },

});

export default DrawerNavigator;