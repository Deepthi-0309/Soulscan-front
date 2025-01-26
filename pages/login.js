import { Text, StyleSheet, View,Button ,TouchableOpacity , TextInput} from 'react-native'
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export const Login =({navigation})=>  {
    
    const handleSubmit =()=>{

        // api call to backend for authentication of user 


        navigation.navigate('mainpage')
    }


    return (
        <View style={styles.container}>
        <Text style={styles.logo}>SoulScan</Text>
        <View style={styles.inputView}>
            <TextInput
                style={styles.inputText}
                placeholder="Username"
                placeholderTextColor="#ccc"
                autoFocus
            />
        </View>
        <View style={styles.inputView}>
            <TextInput
                style={styles.inputText}
                placeholder="Password"
                placeholderTextColor="#ccc"
                secureTextEntry
            />
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit}>
            <Text style={styles.loginText}>Log In</Text>
        </TouchableOpacity>
    </View>
    )
  
}

const styles = StyleSheet.create({
   
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0', // peaceful color
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'black', // or any color you prefer
        marginBottom: 40,
    },
    inputView: {
        width: '80%',
        backgroundColor: '#e0e0e0', // lighter color for input background
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: 'center',
        padding: 20,
    },
    inputText: {
        height: 50,
        color: 'black', // or any color you prefer
    },
    loginBtn: {
        width: '80%',
        backgroundColor: '#4CAF50', // peaceful color for the button
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
    },
    loginText: {
        color: 'white',
    },
}) 