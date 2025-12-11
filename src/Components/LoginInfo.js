import React, { useCallback, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";
import {useDispatch, useSelector} from 'react-redux';
import {storage} from '../utils/createMMKV'


//const AndroidUrl = 'http://10.0.2.2:8000/api/users/login'

const LoginInfo = function({navigation}){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatcher = useDispatch();
    const usuario = useSelector(state => state.user);
    console.log(usuario.data);

    const successLogin = () =>{
           navigation.navigate('GoalsPage');
    }

    const signIn = async() =>{
        
        dispatcher({type: 'USER_FETCH_REQUEST',
            payload: { email, password }
            });
        console.log(usuario.data);

        // if(storage.getString("token"))
        //     successLogin();

    }

    const signUp = useCallback(() => {
        navigation.navigate('SignUp');
    });


    return(
        
        <View style= {styles.container}>
            
            <View style= {styles.signIn}>
                <Text style={styles.title}>
                    Sign In into Goals API!
                </Text>
            </View>

            <View style= {styles.info}>
                <View style={styles.infoSquare}>
                    <Text>
                        Email
                    </Text>
                    <TextInput 
                    placeholder="Enter email"
                    style ={styles.inputs}
                    onChangeText={setEmail}
                    />
                </View>
                <View style={styles.infoSquare}>
                    <Text>
                        Password
                    </Text>
                    <TextInput 
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder="Enter password"
                        secureTextEntry={true}
                        onChangeText={setPassword}
                        style ={styles.inputs}
                    />
                </View>
            </View>
            <View style= {styles.noAccount}>
                <View style= {styles.noAccount}>
                    <Button 
                        title= 'Sign In!'
                        onPress = {signIn}
                    />
                </View>
                <View style= {styles.signUp}>
                    <Text>
                        Don't have an account?
                    </Text>
                    <Button 
                        title= 'Sign up!'
                        onPress = {signUp}
                    />
                </View>
                
            </View>
            
        </View>
    )
}

export default LoginInfo;

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        justifyContent: 'center', //vertical
        alignItems: 'center' // horizontal
    },
    signIn: {
        flex: 1,
        justifyContent: 'center',
    },

    info: {
        flex: 1,
        justifyContent: 'space-evenly',
        width: "100%",
        alignItems: 'center'
        
    },
    infoSquare: {
         width: "100%",
        alignItems: 'center'
    },
    noAccount: {
        flex: 1,
        //backgroundColor: 'green'
    },
    signUp: {
        flex: 2,
    },
    inputs: {
        borderRadius: 20,
        borderWidth: 2,
        backgroundColor: 'white',
        margin: 5,
        height: 45,
        width: "80%",
    },
    title: {
        fontSize: 24,
        fontWeight: '600'
    }
})