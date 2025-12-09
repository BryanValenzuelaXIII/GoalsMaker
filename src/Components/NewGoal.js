import React, { forwardRef, useImperativeHandle, useState } from "react";
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';

//const NewGoal = forwardRef(function NewGoal (props, ref){
const NewGoal = () =>{
    const [goal, setGoal] = useState();

    /*useImperativeHandle(ref, () => {
        return(sendGoal)
    })*/

    const sendGoal= () => {
        return goal
    }

    return(
        <View style={styles.container}>
            <View style={styles.twoMain} >
                <TextInput
                onChangeText={setGoal}
                style = {styles.texBox}>
                
                </TextInput>
            </View>
            <View style={styles.twoMain}>
                <TouchableOpacity style={{borderWidth: 1}}

                >
                    <Text>
                        Set goal!
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}//)

export default NewGoal;

const styles = StyleSheet.create(
    {
        container: {flex: 1, flexDirection: 'column'},
        twoMain: {flex: 1, flexDirection: 'column'},
        texBox: {borderWidth: 2}
    }
)