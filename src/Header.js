import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, Alert } from 'react-native';

const Header = () => {
  return (
    
      <View style={{ flexDirection: 'row', marginTop: 5, alignItems: 'flex-end' }}>

        <TouchableOpacity 
        >

          <Image
            source={require('../assets/bell.png')}
            style={styles.profilebtn}
            
          />
        </TouchableOpacity>

        <TouchableOpacity
        >
          <Image
            source={require('../assets/user.png')}
            style={styles.profilebtn}
            
          />

        </TouchableOpacity>
      </View>
    
  );
};

const styles = StyleSheet.create({

  profilebtn: {
    width: 25,
    height: 25,
    margin: 7,
  },

}
);
export default Header;