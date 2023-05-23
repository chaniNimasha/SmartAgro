import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    Alert
} from 'react-native';
import Mailer from 'react-native-mail';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function FeedBacks({ navigation }) {

    const [problem, setProblem] = useState('');
    const [message, setMessage] = useState('');
    const onPressHandler = () => {
        // navigation.navigate('Screen_A');
        navigation.goBack();
    }

    const getToken = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            return token;
        } catch (error) {
            console.error(error);
            return null;
        }
    };
    const sendFeedback = async () => {
        const token = await getToken();

        const data = {
            problem: problem,
            message: message
        };

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        };

        fetch('https://8e8b-112-134-155-12.ngrok-free.app/feedback', requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log('Complaint submitted successfully', result);
                Alert.alert('Success', 'Complaint submitted successfully.');
                setProblem('');
                setMessage('');
            })
            .catch(error => {
                console.error('Error submitting complaint', error);
                Alert.alert('Error', 'Failed to submit complaint. Please try again.');
            });
        setTimeout(() => {
            sendEmail();
        }, 2000);
    };

    const sendEmail = () => {
        const email = {
            subject: problem,  
            recipients: ['chaninimasha123@gmail.com'],  // Replace with your recipient email address

            body: message,  
            isHTML: true,  
        };

        Mailer.mail(email, (error, event) => {
            if (error) {
                Alert.alert('Error', 'Could not send email. Please check your email configuration.');
            } else {
                Alert.alert('Success', 'Email sent successfully.');
            }
        });
        setMessage("");
        setProblem("");
    };

    return (
        <SafeAreaView style={styles.body}>
            <View>
                <Text style={styles.text}>
                    Welcom To Feedback Section
                </Text>
                <Text style={styles.text1}>
                    Send us your feedback!
                </Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.problem}>Heading  </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={text => setProblem(text)}
                        value={problem}
                        placeholder="Enter the heading"
                        placeholderTextColor="white" />
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.problem}>Message</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={text => setMessage(text)}
                        value={message}
                        placeholder="Message"
                        placeholderTextColor="white" />
                </View>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity style={styles.submit} onPress={sendFeedback}>
                        <Text style={styles.submitButtonText}>SUBMIT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#000928'

    },
    text: {
        fontSize: 28,
        fontWeight: 'bold',
        margin: 10,
        color: 'white',
        top: 15,
    },
    text1: {
        fontSize: 28,
        fontWeight: 'bold',
        margin: 10,
        color: '#1161ee',
        top: 15,
        textAlign: 'center'
    },
    problem: {
        fontSize: 18,
        color: "rgba(255, 255, 255, 0.5)",
        top: 50,
        padding: 30,

    },
    input: {
        width: '65%',
        height: 60,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.1)',
        paddingHorizontal: 16,
        marginBottom: 16,
        top: 60,
        fontSize: 18,
        color:'white'
    },

    submit: {
        backgroundColor: '#1161ee',
        borderRadius: 25,
        paddingHorizontal: 80,
        paddingVertical: 20,
        width: "60%",
        alignContent: 'center',
        alignItems: 'center',
        top: 100

    },
    submitButtonText: {
        color: '#fff',
        fontSize: 16,
        alignItems: 'center'
    },
})