import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, Alert, TextInput, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [keepSignedIn, setKeepSignedIn] = useState(false);

  const onPressHandler = () => {
    navigation.goBack();
  }

  const navigation = useNavigation();



  const login = () => {

    var data = {
      username: username,
      password: password
    };

    var requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
      redirect: 'follow'
    };

    fetch("https://6896-112-134-159-114.ngrok-free.app/auth/login", requestOptions
    )
      .then(response => response.json())
      .then(data => {
        if (data.status == "success") {
          const token = data.token; 
          console.log(token)
          AsyncStorage.setItem('token', token);
         
          // Password and username are valid
          navigation.navigate('Drawer', { token: token });
          setUsername("");
          setPassword("");
        } else {
          // Invalid password or username
          alert("Invalid Username or Password!!!");
        }
      })
      .catch(error => {
        // Handle any network or fetch errors
        console.error(error);
        alert("An error occurred. Please try again.");
      });

    // navigation.navigate('Drawer');
  }

  const handleForgotPassword = () => {
    navigation.navigate('ResetPassword');

  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/tea.png')} style={styles.backgroundImage} />
      <Image
        source={require('../assets/logo.png')}
        style={{ width: 260, height: 90, top: -15 }}
      />

      <Text style={styles.Title}>SmartAgro Dashboard</Text>
      <Text style={styles.heading}>SIGN IN</Text>
      <Text style={styles.username}>USERNAME</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setUsername(text)}
        value={username}
        placeholder="Enter name"
        placeholderTextColor="black"
      />

      <Text style={styles.username}>PASSWOARD</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setPassword(text)}
        value={password}
        placeholder="Enter Password"
        placeholderTextColor="black"
      />

      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={keepSignedIn}
          onValueChange={setKeepSignedIn}
          style={styles.checkbox} />
        <Text style={styles.keepSignedIn}>Keep me signed in</Text>
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={login}>
        <Text style={styles.loginButtonText}>SIGN IN</Text>
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
  username: {
    fontSize: 18,
    color: "rgba(255, 255, 255, 0.5)",
    right: 117,
    bottom: -24,
    marginBottom: 32,
    fontWeight: 'bold',



  },
  Title: {
    fontSize: 24,
    color: "white",
    textAlign: 'center',
    top: -10,
    marginBottom: 32,

  },
  backgroundImage: {
    flex: 5,
    resizeMode: 'cover',
    top: -80,
    right: -180,
    // bottom:100,
    position: 'absolute',
    width: "200%",
    flexDirection: 'column'
  },


  heading: {
    fontSize: 29,
    fontWeight: 'bold',
    color: "white",
    right: 120,
    textDecorationLine: "underline",
    textDecorationColor: "blue",
    bottom: -25,
    marginBottom: 32,
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

    fontSize: 18


  },
  forgotPassword: {
    color: "rgba(255, 255, 255, 0.5)",
    marginBottom: 16,
    fontSize: 18,
    right: 90,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  checkbox: {
    marginRight: 170,
  },
  keepSignedIn: {
    fontSize: 17,
    right: 167,
    fontWeight: "bold",
    color: "rgba(255, 255, 255, 0.5)"
  },
  loginButton: {
    backgroundColor: '#1161ee',
    borderRadius: 25,
    paddingHorizontal: 100,
    paddingVertical: 16,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});


