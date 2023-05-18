import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    Linking
} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';



export default function Complaints({ navigation }) {
    const [chosenOption, setChosenOption] = useState('Software');
    const options = [
        { label: 'Software', value: 'Software' },
        { label: 'Hardware', value: 'Hardware' },
        { label: 'Other', value: 'Other' },
    ];
    const [problem, setProblem] = useState('');
    const [message, setMessage] = useState('');
    const onPressHandler = () => {
        // navigation.navigate('Screen_A');
        navigation.goBack();
    }
    
        
        
    return (
        <SafeAreaView style={styles.body}>
            <View>
                <Text style={styles.text}>
                    Complaints
                </Text>
                <Text style={styles.text1}>
                    Let us know...
                </Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.problem}>Problem  </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={text => setProblem(text)}
                        value={problem}
                        placeholder="Enter the problem"
                        placeholderTextColor="white" />
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                    <Text style={styles.problem}>Type      </Text>

                    <RadioForm
                        style={styles.radio}
                        radio_props={options}
                        buttonSize={15}

                        labelStyle={{
                            fontSize: 18,
                            left: 15,
                            color: 'white',
                            marginBottom: 30
                        }}

                        onPress={(value) => {
                            setChosenOption(value);
                        }}


                    />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.problem}>Message</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={text => setMessage(text)}
                        value={message}
                        placeholder="Enter the Message"
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
    radio: {
        paddingHorizontal: 16,
        marginBottom: 16,
        top: 80,
        flexDirection: 'column',



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