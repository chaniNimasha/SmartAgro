import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity,} from 'react-native';
const ResetPassword = () => {
  const [emailAddress, email] = useState('');

  const handleResetPassword = () => {
    // handle reset password logic
  };

  return (
    <View style={styles.container}>
    <Image source={require('../assets/tea.png')} style={styles.backgroundImage} />
    <Image
      source={ require('../assets/logo.png') }
      style={{ width: 260, height: 90,top:-15 }}
    />
     
     <Text style={styles.Title}>Smart Agro</Text>
      <Text style={styles.heading}>Forgot Your Password ?</Text>
      
      <TextInput
        style={styles.input}
        onChangeText={text => email(text)}
        value={emailAddress}
        placeholder="Enter your Email"
        placeholderTextColor="black"
      />
       
      <TouchableOpacity style={styles.resetButton} onPress={handleResetPassword}>
        <Text style={styles.resetButtonText}>RESET PASSWORD</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  
  Title:{ fontSize: 24,
   color:"white",
   textAlign:'center',
   top:-10,
    marginBottom: 32,

  },
  backgroundImage: {
    flex: 5,
    resizeMode:'cover',
    top:-80,
    right:-180,
    position: 'absolute',
    width: "200%",
    flexDirection: 'column'
  },

  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    color:"white",
    textDecorationColor:"blue",
    bottom:-2,
    marginBottom: 32,
    textAlign:'center',
 
  },
  input: {
    width: '80%',
    height: 60,
    borderWidth: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 30,
    paddingHorizontal: 16,
    marginBottom: 16,
    top: 20,
    color:"white", 
  },
 
  resetButton: {
    backgroundColor: '#1161ee',
    borderRadius: 25,
    paddingHorizontal: 100,
    paddingVertical: 16,
    top: 45,

  },
  resetButtonText: {
    color: '#fff',
    fontSize: 16,
  },

});

export default ResetPassword;
