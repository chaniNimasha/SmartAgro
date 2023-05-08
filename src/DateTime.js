import  React, { useState , useEffect } from 'react'
import {
    View,
    Text,
    StyleSheet,
  } from 'react-native';

export const DateTime = () => {

    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <View>
            <Text style = {styles.textStyle}> {date.toLocaleTimeString()}</Text>
            <Text style = {styles.textStyle}> {date.toLocaleDateString()}</Text>

        </View>
    )
}


const styles = StyleSheet.create({
textStyle: {
    textAlign: 'center',
    fontSize: 18,
    color:'white',
  
   
  },
})
export default DateTime