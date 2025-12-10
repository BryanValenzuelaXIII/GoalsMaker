import React from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView, Button } from "react-native";
import LoginInfo from '../Components/LoginInfo'
import {useDispatch, useSelector} from 'react-redux';
import {increament, decrement} from '../store/userSlice'


const AuthenticationScreen = function({navigation}){

    const contador = useSelector(state => state.counter);
    const dispatcher = useDispatch();
    console.log("Counter is", contador);

    return(
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
        <View style= {styles.container}>

            <View style= {styles.square}>
                <LoginInfo navigation={navigation} />
            </View>
            <View>
                <Button 
                title="increment"
                onPress={() => dispatcher(increament())}
                />
                <Button 
                title="decrement"
                onPress={() => dispatcher(decrement())}
                />
                <Text>
                    {contador.value}
                </Text>
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