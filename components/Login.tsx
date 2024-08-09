import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Octicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

export default function Login() {
    const [username, SetUserName] = useState("")
    const [password, setPassword] = useState("")
    const [isloading, setIsLoading] = useState(false)

   
  return (
   <View style={styles.container}>
        <View style={styles.formInputWrapper}>
            <Octicons name="person" size={20} color={"#0005"} />
            <TextInput cursorColor={"#000"} 
            style={styles.input} 
            value={username}
            onChangeText={username => SetUserName(username)}
            placeholder="User Name" />
        </View>
        <View style={styles.formInputWrapper}>
            <Octicons name="lock" size={20} color={"#0005"} />
            <TextInput cursorColor={"#000"} 
            style={styles.input} 
            value={password}
            onChangeText={password => setPassword(password)}
            secureTextEntry={true}
            placeholder="Password" />
        </View>
        <View style={styles.buttonWrapper}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Log in</Text>
            </TouchableOpacity>
        </View>
   </View>
  );
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    formInputWrapper : {
        width: '90%',
        height: 55,
        backgroundColor: '#f7f9ef',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 6,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 8,
        marginBottom: 10,
    },
    input : {
        width: '90%',
        height: '100%',
        marginLeft: 10,
    },
    buttonWrapper: {
        width: '90%',
        marginTop: 10,
    },
    button: {
        padding: 10,
        backgroundColor: '#6200ee',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    }
})