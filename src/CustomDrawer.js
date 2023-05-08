import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import DateTime from "./DateTime";
import Header from "./Header";


const CustomDrawer = (props) => {

    return (
      
        <View style = {{flex: 1, backgroundColor: 'rgba( 26, 32, 53, 0.9)', }}>
          
        <DrawerContentScrollView 
            {...props}>
                <Image source={require('../assets/logo.png')} style={styles.logo}/>
       <View>
        <View style ={{marginBottom:32}}>
       <Text style={styles.Title}>Smart Agro</Text>
       
          <DateTime>
            
          </DateTime>
          
          </View>
            </View>
      
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
           
            </View>
            
    )
}
const styles = StyleSheet.create({

    Title: {
      fontSize: 26,
      color: "white",
      textAlign: 'center',
      top: -10,
      padding:20,
      fontFamily:'Sansita'
  
    },
    logo: {
        width: 260, 
        height: 90, 
        top: -5, 
        left:10
    },
    

  


  
 
  
  });

export default CustomDrawer