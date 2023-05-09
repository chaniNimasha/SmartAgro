import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Header = () => {

  const navigation = useNavigation();
  
  return (

    <View style={{ flexDirection: 'row', marginTop: 5, alignItems: 'flex-end' }}>
      <TouchableOpacity onPress={() =>
        Alert.alert('Alert Title', 'My Alert Msg2', [
          { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel', },
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ])
      }>
        <Image
          source={require('../assets/notification.png')}
          style={styles.profilebtn} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() =>
        Alert.alert('LOGOUT', 'Do You Want To Logout?', [
          { text: 'NO', onPress: () => console.log('Cancel Pressed'), style: 'cancel', },
          { text: 'YES', onPress: ()=> navigation.navigate('Login')}
        ])
      }>
        <Image
          source={require('../assets/logout.png')}
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