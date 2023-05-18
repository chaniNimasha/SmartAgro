import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Pressable,
    SafeAreaView,
    TextInput,
    TouchableOpacity
} from 'react-native';

import Mailer from 'react-native-mail';

export default function FeedBacks({ navigation }) {

    const [problem, setProblem] = useState('');
    const [message, setMessage] = useState('');
    const onPressHandler = () => {
        // navigation.navigate('Screen_A');
        navigation.goBack();
    }
    const submit = () => {
        Mailer.mail({
            subject: 'Email Subject',
            recipients: ['chaninimasha123@gmail.com', 'dushmanthi.uliyanage@gmail.com'],
            body: '<b>Email body</b>',
            isHTML: true
        }, (error, event) => {
            if (error) {
                console.log('Error: ', error);
            } else {
                console.log('Email sent successfully');
            }
        });

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
                    <TouchableOpacity style={styles.submit} onPress={submit}>
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
        color: 'blue',
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
        fontSize: 18

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