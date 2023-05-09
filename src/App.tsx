import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from './DrawerNavigator';
import Login from './Login';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Drawer" component={DrawerNavigator} options={{headerShown: false}}/>
        </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;