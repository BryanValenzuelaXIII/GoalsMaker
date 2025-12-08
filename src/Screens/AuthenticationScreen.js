import React from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView } from "react-native";
import LoginInfo from '../Components/LoginInfo'

const AuthenticationScreen = function({navigation}){


    return(
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
        <View style= {styles.container}>

            <View style= {styles.square}>
                <LoginInfo navigation={navigation} />
            </View>
        </View>
        </KeyboardAvoidingView>
    )
}

export default AuthenticationScreen;

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        backgroundColor: 'cyan',
        justifyContent: 'center', //vertical
        alignItems: 'center' // horizontal
    },
    square: {
        backgroundColor: 'white',
        opacity: 0.7,
        justifyContent: 'center',
        //alignContent: 'center',
        //alignItems: 'center',
        width: '90%',
        flex: 0.7,
        borderRadius: 20
    }
})